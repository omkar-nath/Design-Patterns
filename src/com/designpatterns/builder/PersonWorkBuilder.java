package com.designpatterns.builder;

public class PersonWorkBuilder extends PersonBuilder {
    PersonWorkBuilder(Person person){
        this.person=person;
    }
    public PersonWorkBuilder withCompany(String company){
        person.company=company;
        return this;
    }
    public PersonWorkBuilder withOfficeCity(String city){
        person.officeCity=city;
        return this;
    }
    public PersonWorkBuilder withDesignation(String designation){
        person.designation=designation;
        return this;
    }
    public Person build(){
        return person;
    }
}
