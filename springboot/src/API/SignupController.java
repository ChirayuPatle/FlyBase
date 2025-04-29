// SignupController.java
@RestController
@RequestMapping("/signup")
public class SignupController {

    private final InMemoryUserDetailsManager userDetailsManager;
    private final PasswordEncoder passwordEncoder;

    public SignupController(InMemoryUserDetailsManager userDetailsManager, PasswordEncoder passwordEncoder) {
        this.userDetailsManager = userDetailsManager;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping
    public ResponseEntity<String> signup(@RequestBody SignupRequest request) {
        if (userDetailsManager.userExists(request.getUsername())) {
            return ResponseEntity.badRequest().body("User already exists");
        }

        UserDetails user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .roles("USER")
                .build();

        userDetailsManager.createUser(user);
        return ResponseEntity.ok("User registered successfully");
    }
}
