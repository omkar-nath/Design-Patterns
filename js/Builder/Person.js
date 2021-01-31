class Person {
  //Private members
  #name;
  #age;
  #dob;

  // Address details
  #city;
  #state;
  #pincode;
  #street;

  //Work Details
  #company;
  #officeCity;
  #designation;

  // Constructor which takes builder instance and sets the value of Person object
  constructor(builder) {
    this.#name = builder.name;
    this.#age = builder.age;
    this.#dob = builder.dob;
    this.#city = builder.city;
    this.#state = builder.state;
    this.#pincode = builder.pinCode;
    this.#street = builder.street;
    this.#company = builder.company;
    this.#officeCity = builder.officeCity;
    this.#designation = builder.designation;
  }

  toString() {
    return {
      Name: `${this.#name}`,
      Age: `${this.#age}`,
      Dob: `${this.#dob}`,
      City: `${this.#city}`,
      State: `${this.#state}`,
      Pincode: `${this.#pincode}`,
      Street: `${this.#street}`,
      Company: `${this.#company}`,
      OfficeCity: `${this.#officeCity}`,
      Designation: `${this.#designation}`,
    };
  }
}

module.exports = Person;
