function Stuff(name, value){
    this.name=name;
    this.value=value;
}

export const  categories=[
    new Stuff("Chaussure", 'shoes'),
    new Stuff("Vetements", 'clothes'),
    new Stuff("Accessoires", 'accessories')
]

export const subCategories={
    shoes: [
        new Stuff("Lifestyle","lifestyle"),
        new Stuff("Football","football"),
        new Stuff("Tennis","tennis"),
        new Stuff("Basketball","basketball"),
        new Stuff("Others","otherShoes"),
    ], 
    clothes:[
        new Stuff("Pantalons", "pants"), 
        new Stuff("Hauts", "tops"), 
        new Stuff("Shorts", "pants"), 
        new Stuff("Sweat-shirts", "sweatShirts"), 
        new Stuff("Maillots", "jerseys"),
    ],
    accessories:[
        new Stuff("Montres", 'watches'), 
        new Stuff("Chaussetes", 'socks'), 
        new Stuff("Autres", "ohterAccessories")
    ]

}

export const morePrecisions={
    shoes: {}, 
    clothes:{

        pants: [
            new Stuff("Joggers","joggers"),
            new Stuff("Joggers","tights"),
           
        ], 
        tops:[
            new Stuff("Hauts sans manche","sleevelessTop"),
            new Stuff("Hauts sans manche","sleevelessTop"),
        ], 
        sweatShirts:[
            new Stuff("SweatShirts sans capuche","hoodlessSweatshirt"),
            new Stuff("SweatShirts avec","hoodless"),

        ], 
        jerseys:[
            new Stuff("Football", "footJersey"),
            new Stuff("Basketball", "basketJersey"),
            new Stuff("drawingLess", "drawingLess"),
            new Stuff("Autres maillots", "otherJerseys"),
        ]
    }, 
    accessories:{}
}


export const sexs=[
    new Stuff("Pour tous","A"),
    new Stuff("Pour hommes","M"),
    new Stuff("Pour Femmes","W"),
    new Stuff("Pour Enfants","C"),
]