let LengthSlider = document.getElementById('LengthSlider');
let sliderValue=document.getElementById('sliderValue');

sliderValue.textContent=LengthSlider.value;
LengthSlider.addEventListener("input",()=>{
    sliderValue.textContent=LengthSlider.value
})

let checkboxes =document.querySelectorAll('.checkbox')

Array.from(checkboxes).forEach(Element=>{
    Element.addEventListener('click',(e)=>{
        if(e.target.innerText=='radio_button_unchecked'){
            e.target.innerText='task_alt'
            e.target.nextElementSibling.nextElementSibling.checked=true
        }
        else{
            e.target.innerText='radio_button_unchecked'
            e.target.nextElementSibling.nextElementSibling.checked=false

        }
    })

})

let includeLables =document.querySelectorAll('.row label')
Array.from(includeLables).forEach(Element=>{
    Element.addEventListener('click',(e)=>{
        if(e.target.previousElementSibling.innerText=='radio_button_unchecked'){
            e.target.previousElementSibling.innerText='task_alt'
        }
        else{
            e.target.previousElementSibling.innerText='radio_button_unchecked'
        }
    })

})

let Password=document.getElementById('Password')
let generateBtn =document.getElementById('generateBtn')
generateBtn.addEventListener('click',function(){
    let length=LengthSlider.value

    let uppercase=document.getElementById('uppercase').checked
    let lowercase=document.getElementById('lowercase').checked
    let symble=document.getElementById('symble').checked
    let numbers=document.getElementById('number').checked

    let password_genarated=genaratePassword(length,uppercase,lowercase,symble,numbers);
    Password.value=password_genarated
})

function genaratePassword(length,uppercase,lowercase,symble,number){
    let charset="";
    let string ="";

    if(uppercase)charset +="ABCDEGDHIJKLMNOPQRSTUVWXYZ"


    if(lowercase)charset +="abcdefghijklmnopqrstuvwxyz"

    if(symble)charset +="@#$%^&*()!"
    

    if(number)charset +="0123456789"
    

    for(let i=0 ; i<length; i++){
        string+= charset.charAt(Math.floor(Math.random()*charset.length))
    }
   
    return string;


}

let COPY=document.getElementById('COPY')

COPY.addEventListener('click',()=>{

    if(Password.value !=""){
        navigator.clipboard.writeText(Password.value)
        COPY.innerText='check'

    setTimeout(()=>{
        COPY.innerText='content_copy'
    },3000)
    }
    
})