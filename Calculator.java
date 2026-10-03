import java.util.Scanner;

public class Calculator {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Monthly Salary: ₱");
        double salary = scanner.nextDouble();

        double rate = 0.05;
        double sssContribution = salary * rate;

        System.out.println("\n--- SSS Contribution ---");
        System.out.printf("Monthly Salary: ₱%.2f%n", salary);
        System.out.printf("SSS Contribution: ₱%.2f%n", sssContribution);

        scanner.close();
    }
}   