// incrementBtn id wale btn ko select kiya incrementBtn variable mai
const incrementBtn = document.getElementById("incrementBtn"); 
// decrementBtn id wale btn ko select kiya decrementBtn variable mai
const decrementBtn = document.getElementById("decrementBtn");
// number id vale div ko select kiya value variable mai
const value = document.getElementById("number");
// resetbtn id vale btn ko select kiya resetBtn variable mai
const resetBtn = document.getElementById("resetBtn")

// two ways of using eventlistner
// 1st way is used in decrement and increment and 2nd way is used in reset

// in 1st meathod instead of writing func name in argument of eventlistner we write function there itself in argument of eventlistner as arrow func

decrementBtn.addEventListener("click",() => {
    const v = Number(value.innerText);
    if(v>0){
        value.innerText = v - 1;
    } 
    else{
        alert("negative not allowed");
    }
});

incrementBtn.addEventListener("click",() => {
    const v = Number(value.innerText);
    if(v>=10){
        alert("10+ are not allowed");
    } 
    else{
        value.innerText = v + 1;
    }
});

// 2nd meathod is normal one as we write name of func as argument of eventlistner and then the func sepratly and not within the argument of eventlistner

resetBtn.addEventListener("click",reset)
function reset(){
    value.innerText=0;
}

