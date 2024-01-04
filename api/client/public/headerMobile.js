const liElements = document.querySelectorAll(".header__mobile__drawerBody li");

if (liElements.length){

    liElements.forEach((li) => {
      const svg = li.querySelector("h6 svg");
      const h6 = li.querySelector("h6");


    //   li.dataset.active = false;
      console.log(svg);
      h6.addEventListener("click", (e) => {
        e.stopPropagation();  
        console.log('clicked');
        if (li.dataset.active=='true') {
            li.dataset.active = false;
            return
        }
        li.dataset.active = true;

      });
    
      if (!li.dataset.active) {

      }
    });
    console.log(liElements[0].children);
}
