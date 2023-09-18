
const userid = {
    id: "20196630",
    password: "gunsang11@"
}
function open_mod_newlogin() {
    const _mod_newloginbox = document.querySelector(".mod_newloginbox");
    _mod_newloginbox.classList.add("active"); // active 클래스 추가
}

function close_mod_newlogin() {
    const _mod_newloginbox = document.querySelector(".mod_newloginbox");
    _mod_newloginbox.classList.remove("active"); // active 클래스 제거
}
function login(){
    const loginid = document.querySelector(".username");
    const loginpassword = document.querySelector(".password");
    if(loginid.value == userid.id && loginpassword.value == userid.password){
        alert("로그인 성공");
        window.location.href = "mainpage.html";
          
    }
    else{
        alert("로그인 실패");
    }
}
function open_todaylist(){
    const _mod_todaylist = document.querySelector(".todaylist")
    _mod_todaylist.classList.add("active")
}
function close_todaylist(){
    const _mod_todaylist = document.querySelector(".todaylist")
    _mod_todaylist.classList.remove("active")
}