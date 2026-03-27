public class InstanceExample {

    // instance variables
    int num;
    String names;

    public InstanceExample() {
        this.names = "Chirayu";
        this.num = 45;
    }

    public static void main(String[] args) {
        InstanceExample ie = new InstanceExample();
        System.out.println(ie.num);
        int number = ie.num;
        System.out.println(number);
    }
}
