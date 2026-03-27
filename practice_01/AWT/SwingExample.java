package AWT;

import javax.swing.*;
import java.awt.event.*;

public class SwingExample extends JFrame {

    // initilizing constructor
    public SwingExample() {

        // label to display output
        JLabel outputLabel = new JLabel("");
        outputLabel.setBounds(400, 100, 100, 40);
        add(outputLabel);

        // label - name
        JLabel lName = new JLabel("Enter Name:");
        lName.setBounds(400, 150, 100, 20);
        // textfield - name
        JTextField tfName = new JTextField();
        tfName.setBounds(400, 170, 200, 20);

        // label - email
        JLabel lEmail = new JLabel("Email: ");
        lEmail.setBounds(400, 190, 100, 20);
        // textfield - email
        JTextField tfEmail = new JTextField();
        tfEmail.setBounds(400, 210, 200, 20);

        // label - password
        JLabel lPass = new JLabel("Password: ");
        lPass.setBounds(400, 230, 100, 20);
        // textfield - email
        JTextField tfPass = new JTextField();
        tfPass.setBounds(400, 250, 200, 20);

        // button - submit
        JButton btn = new JButton("Submit");
        btn.setBounds(400, 300, 80, 20);

        // adding components
        add(lName);
        add(tfName);
        add(lEmail);
        add(tfEmail);
        add(lPass);
        add(tfPass);
        add(btn);

        // Default properties for form
        setTitle("Registration Form");
        setSize(800, 800);
        setLayout(null);
        setVisible(true);

        // Creating event to display message
        btn.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String output = tfName.getText();
                if (output.isEmpty()) {
                    outputLabel.setText("Enter your name");
                } else {
                    outputLabel.setText("Hello " + output + "!");
                }
            }
        });

    }

    public static void main(String[] args) {
        new SwingExample();
    }
}