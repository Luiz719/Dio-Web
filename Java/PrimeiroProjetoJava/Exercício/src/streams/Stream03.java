package streams;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

class Product1{
    int id;
    String name;
    double price;
    public Product1(int id, String name, double price) {
        super();
        this.id = id;
        this.name = name;
        this.price = price;    
    }
}

public class Stream03 {
    public static void main(String[] args) {
        List<Product1> cart = new ArrayList<Product1>();
        cart.add(new Product1(1,"Carregador", 200.23));
        cart.add(new Product1(2,"Teclado", 700.99));
        cart.add(new Product1(3,"Fone", 800.50));
        cart.add(new Product1(4,"Mouse", 300.10));
        //Obtendo todos os produtos com preço maior que 300
        Stream<Product1> stream = cart.stream().filter(product -> product.price > 300);
        //Obtendo a quantidade de produtos com preço maior que 300
        double stream2 = cart.stream().filter(product -> product.price > 300).count();
        System.out.println("Quantidade de produtos: " + stream2);
        stream.forEach(
            product -> System.out.println(product.id + "-" + product.name + ":" + product.price)
        );
    } 
}