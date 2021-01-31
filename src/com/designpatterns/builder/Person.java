package com.designpatterns.builder;
import java.util.Date;

public class Person<T> {

    protected String name;
    protected int age;
    protected Date dob;

    //Address details

    protected String city;
    protected String state;
    protected String pinCode;
    protected String street;

    //Work details

    protected String company;
    protected String officeCity;
    protected String designation;


    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", dob=" + dob +
                ", city="+ city+
                ",state="+state+
                ",pinCode="+pinCode+
                ",street="+street+
                ",company="+company+
                ",officeCity="+officeCity+
                ",designation="+designation+
                '}';
    }
}
