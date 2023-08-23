let button = document.querySelector('.btn')
let uname = document.querySelector('.uname');
let pwd = document.querySelector('.pwd');
let c_pwd  = document.querySelector('.c_pwd');
let message = document.querySelector('.message')
//let name = document.querySelector('.name');
let user = {}

let data = []



function register(){
    if(!(pwd.value && uname.value)){
        alert("Please check empty fields")
        return;
    }else if(pwd.value != c_pwd.value){
        alert("password and confirm pword does not match");
        return;
    }
    else{
        save();
        message.style.display = "block"
        message.style.backgroundColor = "rgb(95, 234, 95)"
        message.innerHTML = 'Logged in successfully!'
        
        setTimeout(()=>{
            location.href= "index.html"
        }, 3000)
    }
}


function save(){
    user = {
           username: uname.value,
           password: pwd.value,
           con_pass: c_pwd.value 
       }
       console.log(user)
       // data.push(user)
        localStorage.setItem('UserData', JSON.stringify(user))
}


let logger = ()=>{
    let data = JSON.parse(localStorage.getItem('UserData'))
    
    if (pwd.value == data.password && uname.value == data.username){
        message.style.display = "block";
        message.style.backgroundColor = "rgb(95, 234, 95)";
        message.innerHTML = 'Logged in succesfully';

        setTimeout(()=>{
            location.href = "app.html"
        }, 2000)
    }else{
        message.style.display = "block"
        message.style.backgroundColor = "red"
        message.innerHTML = 'Incorrect credentials, please try again'
    }
 
}

