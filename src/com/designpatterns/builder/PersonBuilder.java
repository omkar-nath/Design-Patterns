package com.designpatterns.builder;

import java.util.Date;

public class PersonBuilder<T extends Person<T>> {
    protected Person person;
    PersonBuilder(){
        person=new Person();
    }
    public PersonAddressBuilder address(){
        return new PersonAddressBuilder(person);
    }
    public PersonWorkBuilder work(){
        return new PersonWorkBuilder(person);
    }
    public PersonBuilder<T> withName(String name){
        person.name=name;
        return this;
    }
    public PersonBuilder<T> withDob(Date date){
        person.dob=date;
        return this;
    }
    public PersonBuilder<T> withAge(int age){
        person.age=age;
        return this;
    }
    public Person build(){
        return person;
    }

}
