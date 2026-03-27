package main.java.com.chirayupatle.oops_project;

// AuthController.java
@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        if ("user".equals(authRequest.getUsername()) && "password".equals(authRequest.getPassword())) {
            String token = JwtUtil.generateToken((String) authRequest.getUsername());
            return ResponseEntity.ok(new AuthResponse(token));
        }
        return ((Object) ResponseEntity.status(HttpStatus.UNAUTHORIZED)).build();
    }
}

// AuthRequest.java
public class AuthRequest {
    private String username;
    private String password;
    // getters and setters
    public Object getUsername() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUsername'");
    }
    public Object getPassword() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPassword'");
    }
}

// AuthResponse.java
public class AuthResponse {
    private String token;
    public AuthResponse(String token) { this.token = token; }
    public String getToken() { return token; }
}
