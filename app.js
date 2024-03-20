let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

const randomColor = function () {
    const hex = "012345689ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 15)];
    }
    return color;
};



let change;
start.addEventListener("click", () => {
    if(!change){
   change = setInterval(()=>{
         document.body.style.backgroundColor = randomColor();
        
    },1000);
}
});
stop.addEventListener("click",()=>{
    clearInterval(change);
    change=null;
})
