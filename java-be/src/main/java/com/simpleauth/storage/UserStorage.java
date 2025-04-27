package com.simpleauth.storage;

import com.simpleauth.model.User;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class UserStorage {
    private final Map<String, User> usersByEmail = new ConcurrentHashMap<>();
    private final Map<String, String> saltsByEmail = new ConcurrentHashMap<>();
    
    // Singleton pattern implementation
    private static UserStorage instance;
    
    private UserStorage() {}
    
    public static synchronized UserStorage getInstance() {
        if (instance == null) {
            instance = new UserStorage();
        }
        return instance;
    }
    
    public void saveUser(User user, String salt) {
        usersByEmail.put(user.getEmail(), user);
        saltsByEmail.put(user.getEmail(), salt);
    }
    
    public User findByEmail(String email) {
        return usersByEmail.get(email);
    }
    
    public String getSalt(String email) {
        return saltsByEmail.get(email);
    }
    
    public boolean emailExists(String email) {
        return usersByEmail.containsKey(email);
    }
}