interface Animals {
    void sound(); // This is abstract method
}

class Dog implements Animals {
    public void sound() {
        System.out.println("Aminals bark on strangers");
    }
}

public class InterfaceExample {
    public static void main(String[] args) {
        Dog mydog = new Dog();
        mydog.sound();

        // Array for first time
        int[] nums= {1,2,3,4,5};
        for (int i=0; i<nums.length; i++){
            System.out.println(nums[i]);
        }

        // using long for first time
        long l = 1000L;
        System.out.println("The value of long is : " + l);
    }
}
