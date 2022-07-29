// Very basic Surgeon class with a constructor method

class Surgeon {
  constructor(name, department) { // Takes 2 parameters
    this._name = name;
    this._department = department;
  }
}

// Adding detail to the class

class Surgeon {
  constructor(name, department) {
    this._name = name; // Underscore signifies that this value is not
    this._department = department; // to be accessed directly
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }
}

// Example of accessing this information
console.log(surgeonRomero.name)
surgeonRomero.takeVacationDays(3) // Similar to ruby!
console.log(surgeonRomero.remainingVacationDays)

// But what if we wanted a more general hospital employee class, since
// so many employees share similar properties?

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }
}

// How does our Nurse class look when it inherits values from HospitalEmployee?

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications
  }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"])

// What if we wanted to give Nurse unique properties?

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certifications() {
    return this._certifications;
  }
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications)

// Final iteration of parent class...

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() { // A static method is like a class method in ruby
    return Math.floor(Math.random() * 10000) // Can only be called on class,
  } // not an instance!
}
