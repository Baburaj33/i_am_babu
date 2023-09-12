const follow_icon = document.querySelector("#follow-icon");

follow_icon.addEventListener("click",()=>{
    if(follow_icon.classList.contains("follow")){
        follow_icon.textContent="following ";
        follow_icon.classList.remove("follow");
        follow_icon.classList.add("following")
        
    }
    else{
        follow_icon.textContent="follow";
        follow_icon.classList.remove("following");
        follow_icon.classList.add("follow");
    }
    
})


// create a confetti animation using npm.js library
document.addEventListener("DOMContentLoaded",function(){
    const follow_icon = document.querySelector("#follow-icon");
    let isconfettiActive = false;
    let confettiInstance = null;
    // add the click event Listner to the button
    follow_icon.addEventListener("click",()=>{
        if(!isconfettiActive){

            // start confetti animation active
        // Access the JSconfetti global variable
        const confetti = new JSConfetti();
        // call the methode on the confetti object
        confetti.addConfetti();
        }
        else{
            // stop confetti animation
            if(confettiInstance){
                confettiInstance.clear();
            }
        }
       isconfettiActive = !isconfettiActive;
    })

})
// post like function
const like_pic = document.querySelector(".post_image");
const like = document.getElementById("like");
const zero = document.getElementById("zero");
like_pic.addEventListener("dblclick",()=>{
    var zer_val = 999;
    like.style.color="red";
    zer_val+=1;
    zero.innerHTML=zer_val;
})
like_pic.addEventListener("click",()=>{
    like.style.color="black";
})

// reals like function
const like_reals = document.getElementById("reals_click");
const like_icon = document.getElementById("like_reals");
const zero_like = document.getElementById("zero-like");
like_reals.addEventListener("dblclick",()=>{
    var reals_val = 999;
    like_icon.style.color="red";
    reals_val+=1;
    zero_like.innerHTML=reals_val;
   
})
like_pic.addEventListener("click",()=>{
    like.style.color="black";
})


