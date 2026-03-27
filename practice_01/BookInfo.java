// import java.awt.print.Book;

public class BookInfo {

    float price;
    String author;
    String title;

    // Default constructor
    public BookInfo() {
        this.price = 2000;
        this.author = "Chirayu";
        this.title = "Herculus";
    }

    // Parameterised constructor
    public BookInfo(float price, String author, String title) {
        this.price = price;
        this.author = author;
        this.title = title;
    }

    void dispaly() {
        System.out.println("Author : " + author);
        System.out.println("Title : " + title);
        System.out.println("Price : " + price);
    }

    public static void main(String[] args) {

        // call default constructor
        BookInfo bInfo = new BookInfo();
        bInfo.dispaly();

        // call parameterised constructor
        BookInfo bInfo2 = new BookInfo(4000, "Priyanshu", "mai hu DON");
        bInfo2.dispaly();
    }
}
