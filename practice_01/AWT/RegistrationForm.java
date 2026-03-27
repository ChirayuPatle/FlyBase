package AWT;

import java.awt.*;

public class RegistrationForm extends Frame {

    // initilizing constructor
    public RegistrationForm() {

        // Default properties for form
        setTitle("Registration Form");
        setSize(800, 800);
        setLayout(null);
        setVisible(true);

        // label - name
        Label lName = new Label("Enter Name:");
        lName.setBounds(400, 150, 100, 20);
        // textfield - name
        TextField tfName = new TextField();
        tfName.setBounds(400, 170, 200, 20);

        // label - email
        Label lEmail = new Label("Email: ");
        lEmail.setBounds(400, 190, 100, 20);
        // textfield - email
        TextField tfEmail = new TextField();
        tfEmail.setBounds(400, 210, 200, 20);

        // label - password
        Label lPass = new Label("Password: ");
        lPass.setBounds(400, 230, 100, 20);
        // textfield - email
        TextField tfPass = new TextField();
        tfPass.setBounds(400, 250, 200, 20);

        // button - submit
        Button btn = new Button("Submit");
        btn.setBounds(400, 300, 80, 20);

        // adding components
        add(lName);
        add(tfName);
        add(lEmail);
        add(tfEmail);
        add(lPass);
        add(tfPass);
        add(btn);
    }

    public static void main(String[] args) {
        new RegistrationForm();
    }
}