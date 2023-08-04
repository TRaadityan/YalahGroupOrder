
document.addEventListener('DOMContentLoaded', () => 
 {

    const numData = localStorage.getItem('numData'),
    num1Data = localStorage.getItem('num1Data');
    const num=document.querySelector(".num"),
     num1=document.querySelector(".num1");
     num1.textContent=num1Data;
     num.textContent=numData;






});
 
    


function counter()
{

//     // Retrieve data from localStorage

// const num1Data = localStorage.getItem('numData');


// // Use the data as needed

// console.log('num1Data:', num1Data);


    const Dplus= document.querySelector(".Dplus"),
    Dminus = document.querySelector(".Dminus"),
    Dnum=document.querySelector(".Dnum"),
    plus= document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num=document.querySelector(".num"),
    plus1= document.querySelector(".plus1"),
    minus1 = document.querySelector(".minus1"),
    num1=document.querySelector(".num1"),
    plus2= document.querySelector(".plus2"),
    minus2 = document.querySelector(".minus2"),
    num2=document.querySelector(".num2"),
    plus3= document.querySelector(".plus3"),
    minus3 = document.querySelector(".minus3"),
    num3=document.querySelector(".num3");
    
 
let a=1;
let a1=1;
// Mobile counter

plus.addEventListener("click",()=>
{
    a++;
    num.textContent=a;
    Dnum.textContent=a;
    console.log(a);
});

minus.addEventListener("click",()=>
{
    a--;
    num.textContent=a;
    Dnum.textContent=a;
    console.log(a);
});


plus1.addEventListener("click",()=>
{
    a1++;
    num1.textContent=a1;
    console.log(a1);
});

minus1.addEventListener("click",()=>
{
    a1--;
    num1.textContent=a1;
    console.log(a1);
});

plus2.addEventListener("click",()=>
{
    a2++;
    num2.textContent=a2;
    console.log(a1);
});

minus2.addEventListener("click",()=>
{
    a2--;
    num2.textContent=a2;
    console.log(a1);
});

plus3.addEventListener("click",()=>
{
    a3++;
    num3.textContent=a3;
    console.log(a1);
});

minus3.addEventListener("click",()=>
{
    a3--;
    num3.textContent=a3;
    console.log(a1);
});








}


counter();