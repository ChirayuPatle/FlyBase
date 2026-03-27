// JwtAuthFilter.java
@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    private static final String SECRET_KEY = "mySecretKey";

    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {
        String header = request.getHeader("Authorization");

        if (header == null || !header.startsWith("Bearer ")) {
            filterChain.doFilter(request, response); // No token, continue as anonymous
            return;
        }

        String token = header.replace("Bearer ", "");

        try {
            String username = Jwts.parser()
                    .setSigningKey(SECRET_KEY)
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();

            if (username != null) {
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(username, null,
                        List.of());
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        } catch (Exception ex) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Invalid or expired token");
            return;
        }

        filterChain.doFilter(request, response);
    }
}
