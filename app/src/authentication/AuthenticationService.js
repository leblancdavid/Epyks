import { SkypeClient } from './../services/SkypeClient'

export const AuthenticationService = {
  isAuthenticated: false,
  authenticate(username, password, callback) {
    var result = new SkypeClient();
    result.connect(username, password).then(() => {
      this.isAuthenticated = true;
      callback();
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 100);
  }
}