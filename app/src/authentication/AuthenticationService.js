
//TODO: https://tylermcginnis.com/react-router-protected-routes-authentication/

export const AuthenticationService = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 100);//fake async
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 100);
  }
}