package com.simpleauth.server;

import com.simpleauth.model.User;
import com.simpleauth.service.UserService;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class AuthServer {
    private final int port;
    private final UserService userService;
    private HttpServer server;

    public AuthServer(int port) {
        this.port = port;
        this.userService = new UserService();
    }

    public void start() throws IOException {
        server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/register", new RegisterHandler());
        server.createContext("/login", new LoginHandler());
        server.setExecutor(null);
        server.start();
        System.out.println("Server started on port " + port);
    }

    public void stop() {
        if (server != null) {
            server.stop(0);
            System.out.println("Server stopped");
        }
    }

    private Map<String, String> parseRequestBody(HttpExchange exchange) throws IOException {
        Map<String, String> parameters = new HashMap<>();
        String requestBody = new BufferedReader(new InputStreamReader(exchange.getRequestBody(), StandardCharsets.UTF_8))
                .lines().collect(Collectors.joining("\n"));

        String contentType = exchange.getRequestHeaders().getFirst("Content-Type");
        if (contentType != null && contentType.contains("application/json")) {
            Pattern pattern = Pattern.compile("\"(\\w+)\"\\s*:\\s*\"([^\"]*)\"");
            Matcher matcher = pattern.matcher(requestBody);
            while (matcher.find()) {
                parameters.put(matcher.group(1), matcher.group(2));
            }
        } else {
            for (String pair : requestBody.split("&")) {
                String[] keyValue = pair.split("=");
                if (keyValue.length == 2) {
                    parameters.put(keyValue[0], keyValue[1]);
                }
            }
        }
        return parameters;
    }

    private void sendResponse(HttpExchange exchange, int statusCode, String response) throws IOException {
        exchange.getResponseHeaders().set("Content-Type", "application/json");
        exchange.sendResponseHeaders(statusCode, response.getBytes().length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(response.getBytes());
        }
    }

    class RegisterHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!exchange.getRequestMethod().equals("POST")) {
                sendResponse(exchange, 405, "{\"error\":\"Method not allowed\"}");
                return;
            }

            try {
                Map<String, String> params = parseRequestBody(exchange);
                String email = params.get("email");
                String name = params.get("name");
                String password = params.get("password");

                User user = userService.register(email, name, password);
                sendResponse(exchange, 200, "{\"message\":\"User registered successfully\",\"id\":\"" + user.getId() + "\"}");
            } catch (Exception e) {
                sendResponse(exchange, 400, "{\"error\":\"" + e.getMessage() + "\"}");
            }
        }
    }

    class LoginHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!exchange.getRequestMethod().equals("POST")) {
                sendResponse(exchange, 405, "{\"error\":\"Method not allowed\"}");
                return;
            }

            try {
                Map<String, String> params = parseRequestBody(exchange);
                String email = params.get("email");
                String password = params.get("password");

                User user = userService.login(email, password);
                sendResponse(exchange, 200, 
                    "{\"message\":\"Login successful\",\"id\":\"" + user.getId() + 
                    "\",\"name\":\"" + user.getName() + "\"}");
            } catch (Exception e) {
                sendResponse(exchange, 401, "{\"error\":\"" + e.getMessage() + "\"}");
            }
        }
    }
}