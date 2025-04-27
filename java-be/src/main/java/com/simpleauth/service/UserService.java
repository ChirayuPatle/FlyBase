package com.simpleauth.service;

import com.simpleauth.model.User;
import com.simpleauth.storage.UserStorage;

public class UserService {
    private final UserStorage userStorage;
    
    public UserService() {
        this.userStorage = UserStorage.getInstance();
    }
    
    public User register(String email, String name, String password) throws Exception {
        if (userStorage.emailExists(email)) {
            throw new Exception("User with this email already exists");
        }
        
        validateEmail(email);
        if (password == null || password.length() < 8) {
            throw new Exception("Password must be at least 8 characters long");
        }
        
        String salt = PasswordHasher.generateSalt();
        String passwordHash = PasswordHasher.hashPassword(password, salt);
        
        User newUser = new User(email, name, passwordHash);
        userStorage.saveUser(newUser, salt);
        
        return newUser;
    }
    
    public User login(String email, String password) throws Exception {
        User user = userStorage.findByEmail(email);
        if (user == null) {
            throw new Exception("User not found");
        }
        
        String salt = userStorage.getSalt(email);
        boolean passwordMatches = PasswordHasher.verifyPassword(
            password, salt, user.getPasswordHash());
            
        if (!passwordMatches) {
            throw new Exception("Invalid password");
        }
        
        return user;
    }
    
    private void validateEmail(String email) throws Exception {
        if (email == null || !email.matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")) {
            throw new Exception("Invalid email format");
        }
    }
}