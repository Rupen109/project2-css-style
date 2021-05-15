burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
// rightnav=document.querySelector('.rightNav')




burger.addEventListener('click',()=>{
    // rightnav.classlList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');


})


  const Clc = document.querySelector(".cancel");
  const arr = document.querySelector(".arr_container");
  const left_container = document.querySelector(".left_container");

  arr.addEventListener("click", ()=>{
      arr.classList.add("active-arr");
      if(left_container.classList.contains("off")){
        left_container.classList.remove("off");
        left_container.classList.add("active");
      }
  });
  Clc.addEventListener("click", ()=>{
    arr.classList.remove("active-arr");
    if(left_container.classList.contains("active")){
        left_container.classList.remove("active");
        left_container.classList.add("off");
      }
  });