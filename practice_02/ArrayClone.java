public class ArrayClone {

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5 };
        for (int i = 0; i < arr.length; i++) {
            System.out.println("Original array: " + arr[i]);
        }
        int cloneArr[] = arr.clone();
        for (int item : cloneArr) {
            System.out.println("cloned array: " + item);
        }
    }
}