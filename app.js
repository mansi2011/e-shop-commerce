var menuItems = document.getElementById("menu-item")
menuItems.style.maxHeight = "0px";

function menutoggle(){
if(menuItems.style.maxHeight == "0px"){
    menuItems.style.maxHeight = "300px"
}
else{
    menuItems.style.maxHeight = "0px";
}
}