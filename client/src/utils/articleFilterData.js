
export const availableSizes1=["S","M","L","XL","XXL"]

export const availableSizes2=[]

for(let i=36;i<51;i++){
    availableSizes2.push(i.toString(),(i+0.5).toString())
}


export const availableSizes3=["TAILLE UNIQUE"]


export const allCategoriesFilters = {
  sex: {
    name: "Sexe",
    items: {
      Hommes: "men",
      Femmes: "women",
      Enfants: "children",
      "Aucune restricition": "",
    },
  },

  price: {
    name: "Rechercher par prix",
    items: {
      "0$ - 74.99$": 7500,
      "75$ - 149.99": 15000,
      "150$ - 199.99$": 20000,
      "200$ +": "+200",
      "Aucune restricition": "",
    },
  },

  brand: {
    name: "Marque",
    items: {
      Nike: "Nike",
      Adidas: "Adidas",
      Autres: "other",
      "Aucune restricition": "",
    },
  },
};

//I didn't make difference betwen categories sorting it by sex for in this case i have the same articles for men, women , children...

export const specificCategoriesSubCategories = {
  shoes: {
    LifeStyle: "lifestyle",
    Tennis: "tennis",
    Basketball: "basket",
    Football: "foot",
    "Aucune restricition": "",
  },
  clothes: {
    "Sweat-shirts": "sweatShirts",
    "T-shirts": "tShirts",
    Pantalons: "pants",
    Maillots: "jerseys",
    Shorts: "shorts",
    "Aucune restricition": "",
  },
  accessories: {
    Sacs: "bags",
    Chapeaux: "hats",
    Chaussetes: "socks",
    "Aucune restricition": "",
  },
};

export const specificCategoriesAvailablesSizes={
    shoes:availableSizes1,
    clothes:availableSizes2,
    accessories:availableSizes3
}



export const colors = {
    Pourpre: "rgb(141, 66, 159)",
    Noir: "rgb(0,0,0)",
    Rouge: "rgb(231, 53, 43)",
    Orange: "rgb(243, 107, 38)",
    Bleu: "rgb(23, 144, 200)",
    Blanc: "rgb(255,255,255)",
    Marron: "rgb(130, 93, 65)",
    Vert: "rgb(123, 186, 60)",
    Jaune: "rgb(254, 213, 51)",
    Multicolore:
      "radial-gradient(rgb(255, 255, 255) 20%, transparent 20%) 0px 0px / 15px 15px, radial-gradient(rgb(255, 255, 255) 20%, transparent 20%) 8px 8px, rgb(0, 0, 0)",
    Gris: "rgb(128, 128, 128)",
    Rose: "rgb(240, 114, 143)",
  };