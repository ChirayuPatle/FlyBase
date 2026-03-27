public class InstanceVariable {
    int num;

    InstanceVariable(){
        this.num = 10;
    }
    void display(){
        System.out.println(num);
    }

    public static void main(String[] args) {
        InstanceVariable v = new InstanceVariable();
        v.display();
    }
}
