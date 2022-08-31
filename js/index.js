console.log("Project-4");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validname
let validemail
let validphone

// ***Event***
name.addEventListener('blur', ()=>{
    let regex =/^[a-zA-Z]([0-9a-zA-Z]){3,20}$/;
    let str = name.value;
    console.log(regex,str);
    if(regex.test(str)){
        name.classList.remove('is-invalid');
        console.log("name is valid");
        validname = true;
    }else{
       name.classList.add('is-invalid');
       validname = false;
       console.log("name is not valid");
    }
})
email.addEventListener('blur', ()=>{
    let regex =/^([_\-\.0-9a-zA-z]+)@([_\-\.0-9a-zA-z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex,str);
    if(regex.test(str)){
        email.classList.remove('is-invalid');
        console.log("email is valid");
        validemail = true;
    }else{
       email.classList.add('is-invalid');
       validemail = false;
       console.log("email is not valid");
    }

})
phone.addEventListener('blur', ()=>{
    let regex =/^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        phone.classList.remove('is-invalid');
        console.log("phone is valid");
        validphone = true;
    }else{
       phone.classList.add('is-invalid');
       validphone = false;
       console.log("phone is not valid");
    }

})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
   if(validname && validemail && validphone){
       let success = document.getElementById('success')
       success.classList.add('show');
       failure.classList.remove('show');
       console.log("sb shi h");
   } 
   else{
    let failure = document.getElementById('failure')
    failure.classList.add('show');
    success.classList.remove('show');
    console.log("koi sa galat ho gye h");
   }
})