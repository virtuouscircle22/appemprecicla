export class User {
    constructor(_id = "", email = "", password = ""  ) {
      this._id = _id;
      this.email = email;
      this.password = password;
    }
  
    _id: string;
    email: string;
    password: string;
  }