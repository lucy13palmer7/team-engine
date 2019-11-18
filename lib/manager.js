// this is the constructor one person at a time (modules)
class manager {
  constructor(name, email, role, id) {
    this.name = name;
    this.email = email;
    this.role = role;
    this.id = id;
  }
  // what is needed for the html
  getName(name) {
    return this.name;
  }
  getEmail(email) {
    return this.email;
  }
  getRole(role) {
    return this.role;
  }
  getId(id) {
    return this.id;
  }
}
// export the modules
module.export = manager;
