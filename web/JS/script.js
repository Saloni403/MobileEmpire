let three_lines= document.querySelector("#threelines")
let side_menu= document.querySelector(".companyinfo-hidden")

let hidemenu=document.querySelector("#cross");

three_lines.addEventListener("click", function(){
    side_menu.style.right="0";
    
})

hidemenu.addEventListener("click", function(){
    side_menu.style.right="-350px";
    
})