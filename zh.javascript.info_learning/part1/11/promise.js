/*
 * @Author: JAM-SEVEN
 * @Date: 2022-02-23 16:28:08
 * @LastEditTime: 2022-02-23 17:03:23
 * @Description: TO DO
 */

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success")
    }, 1000)
})

promise.then(result => {
    console.log(result)
})

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error")
    }, 1000)
})

promise1.catch(error => {
    console.log(error)
})