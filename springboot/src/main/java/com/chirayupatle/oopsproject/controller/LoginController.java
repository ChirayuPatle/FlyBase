package com.chirayupatle.oopsproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String showLoginForm() {
        return "login";
    }

    @PostMapping("/login")
    public String processLogin(
            @RequestParam String username,
            @RequestParam String password,
            Model model) {

        // Simple authentication logic (in real app, use Spring Security)
        if ("admin".equals(username) && "password".equals(password)) {
            model.addAttribute("message", "Login successful!");
            return "welcome";
        } else {
            model.addAttribute("error", "Invalid credentials");
            return "login";
        }
    }
}