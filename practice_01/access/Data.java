package access;

public class Data {

    // instance variables
    public String gender;
    private int count;
    protected double date;

    // instance menthods
    public Data(String g, int c, double d) {
        this.gender = g;
        this.count = c;
        this.date = d;
    }

    void display() {
        System.out.println("Gender:" + gender);
        System.out.println("Count:" + count);
        System.out.println("Date:" + date);
    }

}
