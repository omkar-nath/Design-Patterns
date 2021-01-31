const Person = require("./Person");

class PersonBuilder {
  constructor() {}
  address() {
    return new PersonAddressBuilder(this);
  }
  work() {
    return new PersonWorkBuilder(this);
  }
  withName(name) {
    this.name = name;
    return this;
  }
  withAge(age) {
    this.age = age;
    return this;
  }
  withDob(date) {
    this.dob = date;
    return this;
  }
  build() {
    return new Person(this);
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
    console.log(person);
    this._person=person;
  }
  withCity(city) {
    this._person.city = city;
    return this;
  }
  withState(state) {
    this._person.state = state;
    return this;
  }
  withPinCode(pinCode) {
    this._person.pincode = pinCode;
    return this;
  }
  build(){
      return new Person(this._person);
  }
}

class PersonWorkBuilder extends PersonBuilder {
  constructor(person) {
    super();
    this._person = person;
  }
  withCompany(name) {
    this._person.company = name;
    return this;
  }
  withOfficeCity(city) {
    this._person.officeCity = city;
    return this;
  }
  withDesignation(designation) {
    this._person.designation = designation;
    return this;
  }
  build(){
      return new Person(this._person);
  }
}

module.exports = {
  PersonWorkBuilder: PersonWorkBuilder,
  PersonBuilder: PersonBuilder,
  PersonAddressBuilder: PersonAddressBuilder,
};
