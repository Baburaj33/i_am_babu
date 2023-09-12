const post = document.getElementById("post")
const reals_ = document.getElementById("reals");
const post_icon = document.getElementById("media_icon-post");
post_icon.addEventListener("click",()=>{
    post.classList.toggle("show")
    reals_.style.display="none";
    tag .style.display='none';
    post.style.display="block";   
})
// start reals
const post_ = document.getElementById("post")
const reals_icon = document.getElementById("media_icon-post-movie");
const reals = document.getElementById("reals");
reals_icon.addEventListener("click",()=>{
    // post_.style.left = value = 25 +'px';
    reals.classList.toggle("show_reals")
    post_.style.display="none";
    tag.style.display="none";
    reals.style.display="block";
})
// tag
const post__ = document.getElementById("post")
const reals__ = document.getElementById("reals");
const tag = document.getElementById("tag");
const tag_icon = document.getElementById("media_icon-post-tag");
tag_icon.addEventListener("click",()=>{
    tag.classList.toggle('show_tag')
    post__.style.display="none";
    reals__.style.display="none";
    tag.style.display="block"; 
})



// login page
const login_btn = document.querySelector('#login');
const login_page  = document.querySelector("#login_page");
login_btn.addEventListener("click",()=>{
    login_page.style.position = "fixed";
    login_page.style.top ="100px"
    login_page.style.display="block";
    Sign_Up_page.style.display="none";   

})

// into signUp
const into_signUp = document.querySelector("#into_signUp");
into_signUp.addEventListener("click",()=>{
    login_page.style.display="none";
    Sign_Up_page.style.display="block";
}) 
// login page cancel

var cancel_login = document.querySelector("#login_cancel");
cancel_login.addEventListener("click",()=>{
    login_page.style.display="none";
    
})

// sign page
const signin_btn = document.querySelector("#sign_in");
const Sign_Up_page = document.querySelector("#Sign_Up_page");
signin_btn .addEventListener("click",()=>{
    Sign_Up_page.style.display="block";
    Sign_Up_page.style.top = "70px"
    login_page.style.display="none";
})
// into login

const into_login = document.querySelector("#into_login");
into_login.addEventListener("click",()=>{
    Sign_Up_page.style.display="none";
    login_page.style.display="block";
})
// signin page cancel
var signin_cancel = document.querySelector("#signin_cancel");
signin_cancel.addEventListener("click",()=>{
    Sign_Up_page .style.display="none";
        
})

// password login
const password_login = document.querySelector("#pwd");
const check = document.querySelector("#chk");
check.onchange = function(e){
    password_login.type = check.checked?"text":"password";
};


// password sign Up
const password_sign = document.querySelector("#pwd-1");
const check_1 = document.querySelector("#chk-1");
check_1.onchange = function(b){
    password_sign.type = check_1.checked?"text":"password";
};


// message section delivery


const sendMsg = document.querySelector("#sendMsg");
function send(){
    const messagetext = document.getElementById("messagetext").value;
    const msg_1 = document.getElementById("msg_1").innerHTML=messagetext;
    
}
