  const menu=document.getElementById("menu");
  const Sidebar=document.getElementById("sidebar");
  const container=document.querySelector(".container");

   menu.addEventListener('click',()=>{
      Sidebar.classList.toggle("hello");
    container.classList.toggle("large-container");
    
   })