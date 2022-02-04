let inputName=document.getElementById("inputName")
let submit= document.getElementById("submit")


inputName.onchange=function(){
    console.log(inputName.value) 
}


submit.onclick=function(){
        window.location.href="./readcreate.html"
    
    
}
