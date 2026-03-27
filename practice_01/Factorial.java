public class Factorial {
    Factorial(int num) {
        int count = 1;
        for (int i = 1; i <= num; i++) {
            count = count * i;
        }
        System.out.println("factorial is : " + count);
    }

    public static void main(String[] args) {
        new Factorial(5);
    }
}