import { Color, Artcile, descriptions_basket } from "../../article.js";
import { availableSizes1 as  availableSizes} from "./descriptions.js";
// function Artcile(
//   name,
//   category,
//   subcategories,
//   price,
//   sex = "all",
//   colors,
//   description, 
//   brand = "Nike",
//   stars = 4.5
// ) {
//   this.name = name;
//   this.category = category;
//   this.subcCtegories = subCategories;
//   this.price = price; //En centime
//   this.colors = colors;
//   this.sex = sex;
//   this.description = description;
//   this.brand = brand;
//   this.stars = stars;
// }

// function Color(colorName, category, images, otherViewImages, sex = "all") {
//   this.colorName = colorName;
//   this.category = category;
//   this.images = images;
//   this.otherViewImages = otherViewImages;
//   this.sex = sex;
// }

// const descriptions_basket = [
//   "LeBron James joue moins dans la raquette et occupe plus un rôle de meneur aujourd'hui, il est donc logique qu'il souhaite une chaussure un peu plus rapide. Son 19e modèle signature vous offre une sensation de maintien parfaite, avec une conception plus légère idéale pour les joueurs rapides et puissants comme LeBron, qui occupent toute la surface du terrain.",
//   "Paul George donne tout sur le terrain, sans sourciller. Il peut éliminer la défense, la faire reculer, intercepter le ballon pour tirer, en restant toujours parfaitement serein et décisif sur le terrain. Grâce à son mesh respirant et sa mousse réactive, sa PG 6 signature est conçue pour vous offrir une sensation de légèreté et de dynamisme… comme si vous marchiez sur des nuages.",
//   "Le step-back a été la source d'inspiration de la Jordan Zoom Separate : un modèle léger à la coupe basse, conçu pour vous aider à prendre le contrôle du terrain. L'amorti est plus ferme à l'extérieur du pied et plus souple à l'intérieur, pour vous permettre de vous appuyer fortement sur le sol lorsque vous vous inclinez pour changer de direction. L'unité Zoom Air vous aide à vous détacher du défenseur pour avoir une vue bien dégagée sur le panier.",
//   "Enflammez le parquet comme Russell Westbrook.Inspirée de sa toute dernière chaussure de match, la semelle extérieure de la Jordan One Take 3 vous permet de changer de direction ou de vous arrêter d'un coup facilement.Accélérez le tempo comme Russ grâce à un amorti Zoom Air à retour d'énergie qui vous permet d'effectuer des tirs incroyables et de prendre le parquet d'assaut encore et encore.",
// ];


const color11 = new Color(
  "Multicolore/Multicolore",
  "shoes",
  {
    small:
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/465ab10b-d24f-4d78-98eb-f94db71fbdbd/chaussure-de-basketball-lebron-19-Tshbtg.png",
    
    default:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/465ab10b-d24f-4d78-98eb-f94db71fbdbd/chaussure-de-basketball-lebron-19-Tshbtg.png",
    large:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/465ab10b-d24f-4d78-98eb-f94db71fbdbd/chaussure-de-basketball-lebron-19-Tshbtg.png",

  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/58ae40db-4bab-441a-ba47-0c1ac4755654/chaussure-de-basketball-lebron-19-Tshbtg.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/44fe1799-8971-47ef-a84f-e58772a04143/chaussure-de-basketball-lebron-19-Tshbtg.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dc77afc3-ec74-45cb-8757-9c68276d5773/chaussure-de-basketball-lebron-19-Tshbtg.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c13adec0-4806-4540-b499-66952d851ad7/chaussure-de-basketball-lebron-19-Tshbtg.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5282e019-cbfa-450a-9803-ad288ec50f90/chaussure-de-basketball-lebron-19-Tshbtg.png",
  ],
  "men"
);


const article1 = new Artcile(
  "LeBron 19",
  "shoes",
  ["basket"],
  26000,
  "all",
  [color11],
  descriptions_basket[0],"Nike",availableSizes
);

//---------------------------------

const color21 = new Color(
  "Multicolore/Multicolore",
  "shoes",
  {
    small:
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/785359b7-9a86-4b9d-8f19-25cb8686cb9b/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    default:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ad635b0-d255-42eb-a182-c666df156019/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    large:
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ad635b0-d255-42eb-a182-c666df156019/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",

  },
  [
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ad635b0-d255-42eb-a182-c666df156019/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2bf61775-dd6b-4544-8910-197e502b9680/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a36d4f16-1bb6-49a1-bc47-7559386e3c8c/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/38ea6b17-985d-4ce6-9f5f-a89be9d4e704/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/528ccd75-fc51-49dd-9c8b-5154105e6681/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png"
],
  "men"
);

const color22 = new Color(
  "Noir/Blanc/Mousse menthe",
  "shoes",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/6ffcaec9-567c-4afb-a88b-7db1f7f73e7b/chaussure-de-basketball-pg-6-LC51Zx.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/81fd8d1f-4637-48d7-8253-d5185b770e40/chaussure-de-basketball-pg-6-LC51Zx.png",
    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/81fd8d1f-4637-48d7-8253-d5185b770e40/chaussure-de-basketball-pg-6-LC51Zx.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/81fd8d1f-4637-48d7-8253-d5185b770e40/chaussure-de-basketball-pg-6-LC51Zx.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/acba88c3-69b3-4e44-a2c0-a5876fd8bef5/chaussure-de-basketball-pg-6-LC51Zx.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7a946239-01c1-4c32-b95f-2c3da663207f/chaussure-de-basketball-pg-6-LC51Zx.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ac3f8673-7fcc-435d-9779-ca88e4f0cebc/chaussure-de-basketball-pg-6-LC51Zx.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/953cea41-2a74-4a4a-875e-033c8fdd3d6f/chaussure-de-basketball-pg-6-LC51Zx.png"
  ],
  "men"
);

const article2 = new Artcile(
  "PG 6",
  "shoes",
  ["basket"],
  14500,
  "all",
  [color21, color22],
  descriptions_basket[1],"Nike",availableSizes
);



//---------------------------------
const color31 = new Color(
  "Noir/Blanc/Gris ciel/Rouge gym",
  "shoes",
  {
    small:
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/a7f570c3-a235-40f3-ac4a-3ff42814f28b/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    default:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/38fe57ec-7350-4f80-9153-5f6b32492da2/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    large:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/38fe57ec-7350-4f80-9153-5f6b32492da2/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/38fe57ec-7350-4f80-9153-5f6b32492da2/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d3a5d62d-d09d-430f-9f7d-9c79194b43cc/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/166fd697-2b8e-4783-99e8-837215918227/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/917e4925-5143-4eca-a48b-9e818fc773bc/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/debe1e68-2c64-431d-8d8f-1b6607e351e4/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png"
  ],
  "men"
);


const color32 = new Color(
  "Bleu marine nuit/Bleu coureur/Blanc/Vert électrique",
  "shoes",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/a7f570c3-a235-40f3-ac4a-3ff42814f28b/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/81fd8d1f-4637-48d7-8253-d5185b770e40/chaussure-de-basketball-pg-6-LC51Zx.png",
    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/81fd8d1f-4637-48d7-8253-d5185b770e40/chaussure-de-basketball-pg-6-LC51Zx.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/81fd8d1f-4637-48d7-8253-d5185b770e40/chaussure-de-basketball-pg-6-LC51Zx.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/acba88c3-69b3-4e44-a2c0-a5876fd8bef5/chaussure-de-basketball-pg-6-LC51Zx.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7a946239-01c1-4c32-b95f-2c3da663207f/chaussure-de-basketball-pg-6-LC51Zx.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ac3f8673-7fcc-435d-9779-ca88e4f0cebc/chaussure-de-basketball-pg-6-LC51Zx.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/953cea41-2a74-4a4a-875e-033c8fdd3d6f/chaussure-de-basketball-pg-6-LC51Zx.png",
  ],
  "men"
);



const color33 = new Color(
  "Bleu marine nuit/Bleu coureur/Blanc/Vert électrique",
  "shoes",
  {
    small:
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/85a983b6-8615-43fe-bc7a-d74134bdb67b/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    default:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da4e8baf-ffe9-456c-96e8-764d2fcc41de/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    large:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da4e8baf-ffe9-456c-96e8-764d2fcc41de/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",

  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da4e8baf-ffe9-456c-96e8-764d2fcc41de/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ac61c2f4-33af-4fe1-b931-857d40eb170f/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4ebd17fa-9102-41a6-8771-0fe5a4aa27cf/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png',
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a3bd7d5-16fb-4612-b60a-0a602a33844d/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/52a54b82-0f42-4c49-b140-83ef44cce7c4/chaussures-de-basketball-jordan-zoom-separate-WbB4xC.png"
  ],
  "men"
);



const article3 = new Artcile(
  "Jordan Zoom Separate",
  "shoes",
  ["basket"],
  14500,
  "men",
  [color31, color32, color33],
  descriptions_basket[2],"Nike",availableSizes
);


//---------------------------------

const color41 = new Color(
  "Cramoisi brillant/Bleu chlorine/Violet agate/Noir",
  "shoes",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/69582a1d-a631-4745-8312-c9a09e0dcf24/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
    default:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/0e383d10-a0d0-4a68-854f-4693f9f571dc/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
    large:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/0e383d10-a0d0-4a68-854f-4693f9f571dc/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/0e383d10-a0d0-4a68-854f-4693f9f571dc/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/9315f4b5-44d8-4f5d-8fd4-9a96274fb244/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/6aa5eb99-92f5-457e-933b-caee54c08f14/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3e12e9c3-d11b-4d8e-b104-943ae1c68485/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/f06fc8fc-84cd-433f-a266-d8edb93b9524/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
  ],
  "women"
);
const color42 = new Color(
  "Noir/Étain mat/Lait de noix de coco/Or métallique",
  "shoes",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/49510338-f691-42be-92df-b612f98223d1/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2fba3fdf-80a0-4f25-8d55-14fc39889ef8/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2fba3fdf-80a0-4f25-8d55-14fc39889ef8/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2fba3fdf-80a0-4f25-8d55-14fc39889ef8/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/079e75f3-21c7-41e0-bb7b-c22fd09c897b/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d06d8e60-0f4a-4a55-9365-30244f6b3f93/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/37d610f7-2a59-433e-9db2-55ebe2f73aa2/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4495c3f5-18de-4995-9de1-122c5b978105/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
  ],
  "men"
);






const article4 = new Artcile(
  "Jordan One Take 3",
  "shoes",
  ["basket"],
  13500,
  "all",
  [color41, color42],
  descriptions_basket[3],"Nike",availableSizes
);


//---------------------------------

// const color51 = new Color(
//   "Cramoisi brillant/Bleu chlorine/Violet agate/Noir",
//   "shoes",
//   {
//     small:
//       "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/69582a1d-a631-4745-8312-c9a09e0dcf24/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
//     default:
//       "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/0e383d10-a0d0-4a68-854f-4693f9f571dc/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
//     large:
//       "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/0e383d10-a0d0-4a68-854f-4693f9f571dc/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
//   },
//   [
//     "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/0e383d10-a0d0-4a68-854f-4693f9f571dc/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
//     "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/9315f4b5-44d8-4f5d-8fd4-9a96274fb244/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
//     "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/6aa5eb99-92f5-457e-933b-caee54c08f14/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
//     "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3e12e9c3-d11b-4d8e-b104-943ae1c68485/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
//     "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/f06fc8fc-84cd-433f-a266-d8edb93b9524/chaussures-de-basketball-jordan-one-take-3-PTcBDf.png",
//   ],
//   "women"
// );


// const article5 = new Artcile(
//   "Jordan One Take 3",
//   "shoes",
//   ["basket"],
//   13500,
//   "all",
//   [color51],
//   descriptions_basket[4]
// );


const fetchData = (element) => {
  return fetch("http://localhost:5000/api/admin/new-article", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(element),
  });
};

fetchData(article1)
  .then(fetchData(article2))
  .then(fetchData(article3))
  .then(fetchData(article4))
  .then(()=>console.log("success"));
  
// const fetchData = (element) => {
//   return fetch("http://localhost:5000/api/admin/new-article", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(element),
//   });
// };

// fetchData(article1)
//   .then(res=>console.log("success"));
  

