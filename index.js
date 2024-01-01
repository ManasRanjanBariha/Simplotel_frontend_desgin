let nav=document.getElementById("navlist");
let togglenav=document.getElementById('toggle-nav');
console.log(togglenav);
togglenav.addEventListener('click',function(){
    if(nav.style.display==="")
    {
        nav.style.display="block"
    }
    else{
        nav.style.display=""
    }
})