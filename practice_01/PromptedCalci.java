import java.util.Scanner;

public class PromptedCalci {

    public static void add(int x, int y){
        System.out.println("Addition : " + (x+y));
    }
    public static void sub(int x, int y){
        System.out.println("Subtraction : " + (x-y));
    }
    public static void mul(int x, int y){
        System.out.println("Multiplication : " + (x*y));
    }
    public static void div(int x, int y){
        System.out.println("Division : " + (x/y));
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number : ");
        int num1 = sc.nextInt();
        System.out.println("Enter second number :");
        int num2= sc.nextInt();

        System.out.println("Enter operation you want to preform:");
        char ch = sc.next().charAt(0);

        if(ch == '+'){
            add(num1, num2);
        }
        else if(ch == '-'){
            sub(num1, num2);
        }
        else if(ch == '*'){
            mul(num1, num2);
        }
        else if(ch == '/'){
            div(num1, num2);
        }
        else{
            System.out.println("Invalid operation..");
        }
        sc.close();
    }
}
