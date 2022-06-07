"usestrict";

const btnMouseLeaveAnimation="default-leave-button-animation .2s forwards ";
const buttons=document.querySelectorAll("button");



window.onload=()=>{
console.log(buttons);

    forEach(btn=>{
        btn.addEventListener("mouseout", ()=>{
            console.log("leaved");
            btn.style
            .setProperty("animation-direction","alternate")
            .setProperty("animation-iteration-count", "2")
            
        })
    })
}
