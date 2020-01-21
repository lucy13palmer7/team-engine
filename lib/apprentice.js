const Employee = require("./employee");

class Apprentice extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Apprentice";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Apprentice;
