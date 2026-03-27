public class Staticmethod {

    static int name(int... a) {
        int sum = 0;
        for (int e : a) {
            sum += e;
        }
        System.out.println();
        return sum;
    }

    public static void main(String[] args) {
        System.out.println(name(4, 5, 6, 7, 8));
        System.out.println(name(4, 8));
    }
}