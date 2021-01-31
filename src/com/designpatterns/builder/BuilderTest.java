package com.designpatterns.builder;
import java.io.IOException;

public class BuilderTest {
    public static void main(String args[]) throws IOException {
        Person om =new  PersonBuilder()
                .withName("Omkar")
                .withAge(25)
                .address()
                    .withCity("Lucknow")
                    .withState("Uttar Pradesh")
                .work()
                    .withCompany("Amazon")
                    .withDesignation("Frontend Engineer")
                .build();
        System.out.println(om);
    }
}
