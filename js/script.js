let hireBtn=document.getElementById("hire");
let form=document.getElementById("contactForm");
let cancelBtn=document.getElementById("cancelBtn");
let divBlurs=document.getElementsByClassName("blur");
let inputs=form.getElementsByTagName("input");
hireBtn.onclick=()=>{
    for(let i=0;i<divBlurs.length;i++){
        divBlurs[i].classList.add("active-blur");
    }
    form.style.display="block";
}
cancelBtn.onclick=()=>{
    for(let i=0;i<divBlurs.length;i++){
        divBlurs[i].classList.remove("active-blur");
    }
    form.style.display="none";
}
form.onsubmit=(e)=>{
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value.trim()===""){
            inputs[i].classList.add("is-invalid");
            e.preventDefault();
            return;
        }
    }
}
for(let i=0;i<inputs.length;i++){
    inputs[i].onkeyup=()=>{
        if(inputs[i].value.trim()===""){
            inputs[i].classList.add("is-invalid");
            inputs[i].classList.remove("is-valid");
        }
        else{
            inputs[i].classList.remove("is-invalid");
            inputs[i].classList.add("is-valid");
        }
    }
}