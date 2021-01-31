package com.designpatterns.builder;

public class PersonAddressBuilder extends PersonBuilder{
    PersonAddressBuilder(Person person){
        this.person=person;
    }
    public PersonAddressBuilder withCity(String city){
        person.city=city;
        return this;
    }
    public PersonAddressBuilder withState(String state) {
        person.state = state;
        return this;
    }
}
