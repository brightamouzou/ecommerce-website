export  function buttonEvent(){

    const buttons=document.querySelectorAll("button");
    console.log(buttons);

    window.onload=()=>{
        console.log(buttons);

        buttons.forEach(btn=>{

            btn.addEventListener("mouseenter", ()=>{
                btn.classList.remove("btn-lvd") //button leaved
            })
            btn.addEventListener("mouseout", ()=>{
                btn.classList.add("btn-lvd") //button leaved
                btn.style.setProperty("animation", "")
                btn.style.setProperty("animation-iteration-count", "2")
                
            })
        })
    }

}

export function linkEvent(){
    const links=document.querySelectorAll(".header-menu-item");
    console.log(links);
    links.forEach(link=>{
        link.addEventListener("mouseenter",(e)=>{
            e.stopPropagation();
            link.classList.remove("link-lvd");
            // link.classList.add("after-visible");-
            
            
        })

        link.addEventListener("mouseleave",(e)=>{
            e.stopPropagation();
            link.classList.add("link-lvd");
        })
    })

}


