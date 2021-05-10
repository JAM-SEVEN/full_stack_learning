/*
 * @Author: JAM-SEVEN
 * @Date: 2021-04-09 09:52:42
 * @LastEditTime: 2021-04-09 11:42:36
 * @Description: TO DO
 */

"use strict"

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}
let calculator = {
    read() {
        this.num1 = +prompt("Number1", "");
        this.num2 = +prompt("Number2", "");
    },

    sum() {
        return this.num1 + this.num2;
    },

    mul() {
        return this.num1 * this.num2;
    },
}
let user = makeUser();
console.log(user.ref().name);