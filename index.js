// const sum = function sum(a,b) {
//     return a+b;
// }


// const a=36;
// const b=9;

// const add = (a,b) => {
//     a=Math.sqrt(a);
//     b=Math.sqrt(b);
//     return a+b;
// }


function login (error, msg){
    if(error==null){
        console.log(msg);
    }
    else{
        console.log(error);
    }
}


function loginHanler(username, password, clbf){
    if(username=="hululu" && password=="1234"){
       clbf(null, "Logim sucess")
    }
    else{
        clbk("Usename or password is incorrect", null)
    }
}

loginHanler("hululu", "1234", login)