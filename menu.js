const load = document.getElementById("Load_img");
function loading_Fun(){
    load.style.display ="none";
}

let menu = document.getElementById('men');
function dropBtn(){
    menu.style.left = '0';
}
function CloseMen(){
    let clos_btn = document.getElementsByClassName("CloseMenubtn");
    clos_btn_style = window.getComputedStyle(clos_btn[0])
    if(clos_btn_style.display === 'block'){
        menu.style.left = '-150%';
    }
}

