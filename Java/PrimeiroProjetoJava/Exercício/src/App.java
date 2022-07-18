import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        System.out.println("Informe o seu Nome:");
        String name = scn.nextLine();
        System.out.println("Meu nome é " + name);
        System.out.println("Qual a sua idade? ");
        int age = scn.nextInt();
        System.out.println("Minha idade é " + age);
        scn.close();
    }
}
