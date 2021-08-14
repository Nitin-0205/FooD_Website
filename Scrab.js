function dropDownFun(){
    let x = document.getElementById("drop_list_id");
    let drop_icon = document.getElementById("navDrop");
    let menuShift = document.getElementById("Main");

    if(x.classList == "drop_close"){
        x.classList.remove("drop_close");
        x.classList.add("drop_open");
        drop_icon.childNodes[0].classList.remove("fa-bars");
        drop_icon.childNodes[0].classList.add("fa-times");
        drop_icon.style.padding = "0.2rem 0.5rem";
        menuShift.style.marginTop ="6rem";

    }
    else{
        x.classList.remove("drop_open");
        x.classList.add("drop_close");
        drop_icon.childNodes[0].classList.remove("fa-times");
        drop_icon.childNodes[0].classList.add("fa-bars");
        drop_icon.style.padding = "0.2rem 0.4rem";
        menuShift.style.marginTop ="0rem";
    }
    
}

function MenuButFun(){
    alert("Sorry Menu Not Available Yet !!!")

}
const text = ["Late night at office ?","Are You Hungry ?","Game night ?","Unexpected Guest ?","Cooking Gone Wrong ?"]
function log(){
    for(let i=0;i<text.length ;i++){
        setTimeout(function(){document.getElementById("log_change").innerHTML = text[i];}, 2500*i);
    }
}
log();
setInterval(log,2500*(text.length));

function Send_Message(){
    alert("Thank You For Your Response!!!")

}

let dat = new Date();
yr = dat.getFullYear();
document.getElementById("copywrite").innerHTML = "Made by <em>Nitin Gupta</em> copywrite &copy; " + yr;