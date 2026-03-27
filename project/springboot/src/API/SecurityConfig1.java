// SecurityConfig.java
@Configuration
@EnableWebSecurity
public class SecurityConfig1 {

    @Bean
    public InMemoryUserDetailsManager userDetailsService() {
        return new InMemoryUserDetailsManager(); // Empty in-memory user store
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Secure password encoding
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/signup").permitAll()
                        .anyRequest().authenticated())
                .httpBasic(); // For testing with tools like Postman
        return http.build();
    }
}
