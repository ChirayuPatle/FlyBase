public class Arrays {

    void ayyaySuum(int[] a) {
        int sum = 0;
        for (int i = 0; i <= a.length; i++) {
            sum += i;
        }
        System.out.println("Sum: " + sum);
    }

    public static void main(String[] args) {
        Arrays arr = new Arrays();
        // int[] ref = {1,2,3,4,5};
        // arr.ayyaySuum(ref);
        arr.ayyaySuum(new int[] { 1, 2, 3, 4, 5 });

    }
}