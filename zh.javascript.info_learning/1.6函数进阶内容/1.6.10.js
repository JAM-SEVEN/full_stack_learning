/*
 * @Author: JAM-SEVEN
 * @Date: 2021-07-08 15:04:42
 * @LastEditTime: 2021-07-08 15:05:22
 * @Description: TO DO
 */
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false))