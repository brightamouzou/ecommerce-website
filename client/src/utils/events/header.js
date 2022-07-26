"usestrict";

export function headerMenuItems(){
    window.onload=()=>{
        const menuItems=document.querySelectorAll(".menu__item");
        menuItems.forEach(item=>{
    
            item.addEventListener('mouseenter', ()=>{
                const tmp=item.childNodes[0].childNodes.at(-1);
                tmp.classList.add("after-visible");
       
            })
        } ) 
    }




}

export function simulateMouseEvent(){
    const event=new MouseEvent("mouseenter", {
        "view":window,
        "bubbles":true,
        "cancelable":true
    })

    return event;
}

export function simulateHoverOnMenuItem(){
    const submenus=document.querySelectorAll(".submenus");
    console.log(submenus);
    submenus.forEach(ele=>{
        ele.addEventListener("mouseenter",()=>{
            console.log(ele.closest());
        } )
    })
}