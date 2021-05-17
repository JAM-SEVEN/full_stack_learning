/*
 * @Author: JAM-SEVEN
 * @Date: 2021-04-01 11:02:54
 * @LastEditTime: 2021-04-01 16:31:09
 * @Description: TO DO
 */



let userName = prompt("Who's there?",'');

if (userName == null || userName == "") {
    
    alert("Canceled");

}else if (userName != "Admin") {

    alert("I don't know you")

}else {

    let passWord = prompt("Password?","")

    if (passWord == null || passWord == "") {

        alert("Canceled")
        
    }else if (passWord != "TheMaster") {

        alert("Wrong password")

    }else {

        alert("Welcome!")
        
    }
}
