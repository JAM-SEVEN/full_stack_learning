/*
 * @Author: JAM-SEVEN
 * @Date: 2021-04-09 09:52:42
 * @LastEditTime: 2021-04-09 09:56:45
 * @Description: TO DO
 */
"use strict"
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();
console.log(user.ref.name);