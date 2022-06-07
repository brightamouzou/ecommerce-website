function Artcile(name,category, subcategories, price, sex="all", colors, model=""){
    this.name=name;     
    this.category=category;     
    this.subcategories=subcategories;     
    this.price=price;     
    this.colors=colors;
    this.sex=sex
}

function Color(colorName,category, images, otherViewImages){
    this.colorName=colorName; 
    this.category=category; 
    this.images=images; 
    this.otherViewImages=otherViewImages;
}

const color1=new Color("blue", 
"shoes",
{
    small:"http://google1.com", 
    default:"http://google2.com", 
    large:"http://google3.com", 
},
[
    "http://google4.com",
    "http://google5.com",
])

const article1=new Artcile("nike 1", "shoes",["all"], 10,"all",[color1])

fetch("http://localhost:5000/api/admin/new-article",{
    method:"POST", 
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(article1)
}).then(res=>console.log(res)).catch(e=>console.log(e.message))