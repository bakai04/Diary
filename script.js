let weakdays=document.querySelector(".weakdays");
let message=document.querySelector(".message");
let btn=document.querySelector(".add");
let displaywrap=[[{}],[{}],[{}],[{}],[{}],[{}],[{}]];
let days=[];
let wrapper=[];
let active="day_1";


for(let i=0; i<=6; i++){
    wrapper[i]=document.querySelector(".wrapper_"+(i+1));
    days[i]=document.querySelector(".day_"+(i+1));
}
days[+active[4]-1].classList.toggle("active");
wrapper[+active[4]-1].classList.toggle("active");
weakdays.addEventListener("click", function(event){
    for(let i=0; i<=6;i++){
        days[i].classList.remove("active");
        wrapper[i].classList.remove("active")
    }
    active=event.target.getAttribute("class");
    days[+active[4]-1].classList.toggle("active");
    wrapper[+active[4]-1].classList.toggle("active");
     
})




weakdays.addEventListener("contextmenu", function(event){
    event.preventDefault();
})




btn.addEventListener("click",function(){
    let newtodo={
        title:message.value,
        checked: false
    }
    displaywrap[+active[4]-1].push(newtodo);
    displaymessages()
})





function displaymessages(){
    let displaymessage="";
    displaywrap[+active[4]-1].forEach(function(item,i){
        displaymessage+=`
            <p>${item.title}</p>
            <input type="checkbox">${item.checked? "checked": ""}</input>
        `
        wrapper[+active[4]-1].innerHTML=displaymessage;
    })
}