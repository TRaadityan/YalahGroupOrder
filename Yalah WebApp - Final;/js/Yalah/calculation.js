document.addEventListener('DOMContentLoaded', () => 
 {

 
    calc();
    


});


function calc()
{
    
// Get the values and perform calculations
const num = parseInt(document.querySelector('.num').textContent);
console.log('Total for Item 1:', num);
console.log(document.querySelector('.num').textContent);
const num1 = parseInt(document.querySelector('.num1').textContent);
const num2 = parseInt(document.querySelector('.num2').textContent);
const num3 = parseInt(document.querySelector('.num3').textContent);
const item  = parseInt(document.getElementById('item').textContent);
console.log('item', document.getElementById('item').textContent);
const item1 = parseInt(document.getElementById('item1').textContent);
const item2 = parseInt(document.getElementById('item2').textContent);
const item3 = parseInt(document.getElementById('item3').textContent);
const total = document.getElementById('total');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const ifee= document.getElementById('fee');
const itax= document.getElementById('tax');
const itotal=document.getElementById('itotal');;
const total1 = num  * item;
console.log(total1);
const total2 = num1 * item1;
const total3 = num2 * item2;
console.log(total3);
const total4 = num3 * item3;
console.log(total4);





const grandTotal = total1 + total2 + total3 + total4;
total.textContent=grandTotal;
itax.textContent=(12/100)*grandTotal;

const ftax= parseInt(itax.textContent);
const ftotal= parseInt(grandTotal)+ parseInt(ifee.textContent) +ftax;
itotal.textContent=parseInt(ftotal) ; 



// Display the results
console.log('Total for Item 1:', total1);
console.log('Total for Item 2:', total2);
console.log('Grand Total:', grandTotal);
}




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
    
 
let a= num.textContent;
let a1= num1.textContent;
let a2=  num2.textContent;
let a3=  num3.textContent;
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