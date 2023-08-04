document.addEventListener('DOMContentLoaded', () => 
 {
  const addImage1 = document.querySelector(".addImage1");
  const addImageOne1 = document.querySelector(".addImageOne1");
  const addImage2 = document.querySelector(".addImage2");
  const addImageOne2 = document.querySelector(".addImageOne2");

  // Add click event listener to "addImageOne" section
  addImageOne1.addEventListener("click", function () {
    addImage1.style.display = "flex";
    addImageOne1.style.display = "none";
  });

  addImageOne2.addEventListener("click", function () {
    addImage2.style.display = "flex";
    addImageOne2.style.display = "none";
  });


  });



function counter()
{

    const Dplus= document.querySelector(".Dplus"),
    Dminus = document.querySelector(".Dminus"),
    Dnum=document.querySelector(".Dnum"),
    plus= document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num=document.querySelector(".num"),
    plus1= document.querySelector(".plus1"),
    minus1 = document.querySelector(".minus1"),
    num1=document.querySelector(".num1");
    
   

let a=1;
let a1=1;
// Mobile counter

plus.addEventListener("click",()=>
{
    a++;
    num.textContent=a;
    localStorage.setItem('numData', num.textContent)
    Dnum.textContent=a;
    console.log(a);
});

minus.addEventListener("click",()=>
{
    a--;
    num.textContent=a;
    localStorage.setItem('numData', num.textContent)
    Dnum.textContent=a;
    console.log(a);
});


plus1.addEventListener("click",()=>
{
    a1++;
    num1.textContent=a1;
    localStorage.setItem('num1Data', num1.textContent);
    console.log(a1);
});

minus1.addEventListener("click",()=>
{
    a1--;
    num1.textContent=a1;
    localStorage.setItem('num1Data', num1.textContent);
    console.log(a1);
});





// Desktop counter

Dplus.addEventListener("click",()=>
{
    a++;
    num.textContent=a;
    Dnum.textContent=a;
    console.log(a);
});

Dminus.addEventListener("click",()=>
{
    a--;
    num.textContent=a;
    Dnum.textContent=a;
    console.log(a);
});



}


counter();