const navItem=document.querySelectorAll(".nav-item");
const sideDrawer=document.getElementById("side-drawer");
const title=document.getElementById("title");
const cross=document.getElementById("cross");
const formSubmit=document.getElementById("widget-form");


navItem.forEach(item=>{
    item.addEventListener('click',()=>drawerOpenHandler(item))
});

cross.addEventListener('click',drawerCloseHandler)

formSubmit.addEventListener('submit',submitHandler);

function drawerOpenHandler(item){
    sideDrawer.style.visibility="visible";
    sideDrawer.style.opacity="1";
    sideDrawer.style.width="500px";
    title.innerText=item.innerText;
}


function drawerCloseHandler(){
    sideDrawer.style.visibility="hidden";
    sideDrawer.style.opacity="0";
    sideDrawer.style.width="0";
}

async function submitHandler(event){
    const titleObject={title:title.innerText}
    event.preventDefault();
    const payload=new FormData(formSubmit);
    await fetch('http://httpbin.org/post',{
        method:"POST",
        body:payload
    }).then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error));
    formSubmit.reset();
}
