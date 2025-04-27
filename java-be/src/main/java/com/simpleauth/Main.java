package com.simpleauth;

import com.simpleauth.server.AuthServer;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        int port = 8080;
        
        if (args.length > 0) {
            try {
                port = Integer.parseInt(args[0]);
            } catch (NumberFormatException e) {
                System.err.println("Invalid port number. Using default port 8080.");
            }
        }
        
        try {
            AuthServer server = new AuthServer(port);
            server.start();
            
            Runtime.getRuntime().addShutdownHook(new Thread(server::stop));
            
            System.out.println("Auth server is running on port " + port);
            System.out.println("Press Ctrl+C to stop the server");
        } catch (IOException e) {
            System.err.println("Failed to start server: " + e.getMessage());
        }
    }
}