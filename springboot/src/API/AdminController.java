// AdminController.java
@RestController
@RequestMapping("/admin")
public class AdminController {

    @GetMapping("/dashboard")
    public String dashboard() {
        return "Welcome to Admin Dashboard!";
    }
}
