let weakdays=document.querySelector(".weakdays");
let message=document.querySelector(".message");
let btn=document.querySelector(".add");
let todoitem=document.querySelector(".todo_item")
let displaywrap=[[],[],
[],[],[],
[],[]];
let days=[];
let wrapper=[];
let active="day_1";
let txt2=document.querySelector('.txt2');


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




btn.addEventListener("click",function(){
    let newtodo={
        title:message.value,
        checked: false
    }
    displaywrap[+active[4]-1].push(newtodo);
    displaymessages()
    localStorage.setItem(active,JSON.stringify(displaywrap[+active[4]-1]))
})





function displaymessages(){
    let displaymessage="";
    displaywrap[+active[4]-1].forEach(function(item,i){
        displaymessage+=`
            <p class="txt">${item.title}</p>
            <input type="checkbox" class="check_${active[4]-1}${i}"${item.checked? "checked": ""}>
            <button class="remove${active[4]-1}${i}">Удалить</button>
            <hr class="line">
        `
        wrapper[+active[4]-1].innerHTML=displaymessage;
    })
}
 


todoitem.addEventListener("click",function(event){
    let idinput= event.target.getAttribute("class");
    if(idinput[0]==="c"){
        displaywrap[+active[4]-1].forEach(function(item,i){
            if(idinput[6]==active[4]-1 && i==idinput[7]){
                item.checked= !item.checked;
                localStorage.setItem(active,JSON.stringify(displaywrap[+active[4]-1]));
            }
        }) 
    }else if(idinput[7]=="0"){
        wrapper[+active[4]-1].innerHTML=`
        <p class="txt2">Планируйте свой день</p>
        `;
    }else{
        displaywrap[+active[4]-1].splice(+idinput[7],1);
        localStorage.setItem(active,JSON.stringify(displaywrap[+active[4]-1]));
        displaymessages()
        console.log(displaywrap[+active[4]-1])
        }
    
})