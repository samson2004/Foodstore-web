console.log("Hello world");

/*
const myname= "sam";
const h1=document.querySelector(".heading-primary");

console.log(h1);
console.log(myname);

h1.addEventListener("click",function(){

    h1.textContent=myname;
    h1.style.backgroundColor="blue";
    h1.style.padding= "5rem";
    
    
})
*/


const yearEL=document.querySelector(".year");
const currentyear= new Date().getFullYear();
yearEL.textContent=currentyear;
yearEL.style.color="#767676";
yearEL.style.fontWeight="400";


const cc1=document.querySelector("icon-mobile-nav[name='menu-outline']");
const cc2=document.querySelector(".icon-mobile-nav[name='close-outline']");
const cc3=document.querySelector(".icon-mobile-nav");
console.log(cc1);
console.log(cc2);
console.log(cc3);
cc1.addEventListener("click",function(){
    cc3.style.display="block";
})

