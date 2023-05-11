import bcrypt from 'bcrypt';

export default class Password {
  constructor() {
    this.saltRounds = 10;
  }

  async hash(password) {
    return bcrypt.hash(password, this.saltRounds);
  }

  async compare(password, hash) {
    return bcrypt.compare(password, hash);
  }

}
