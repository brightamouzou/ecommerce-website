import { Artcile, Color } from "../article.js";
import { availableSizes1, descriptions_hats } from "./descriptions.js";
const color11 = new Color(
  "Noisette rush/Olive moyen/Blanc sommet",
  "accessories",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/5ccb2892-9166-4663-ab89-d93339ad0ac5/casquette-acg-heritage86-V7WN5h.png",
    default:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b5dd9db8-9c85-4fdb-8543-ca30d874364c/casquette-acg-heritage86-V7WN5h.png",
    large:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b5dd9db8-9c85-4fdb-8543-ca30d874364c/casquette-acg-heritage86-V7WN5h.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b5dd9db8-9c85-4fdb-8543-ca30d874364c/casquette-acg-heritage86-V7WN5h.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/73c13da1-e243-43ff-a59b-26abcc3bde0b/casquette-acg-heritage86-V7WN5h.png",
  ],
  "all"
);


const color12 = new Color(
  "Noir/Cyber/Cyber",
  "accessories",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/315c9ad6-fc99-49f5-bf3e-27f51ff87fa8/casquette-acg-heritage86-V7WN5h.png",
    default:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b9e1cbac-1546-4771-bf89-03d9f827a501/casquette-acg-heritage86-V7WN5h.png",
    large:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b9e1cbac-1546-4771-bf89-03d9f827a501/casquette-acg-heritage86-V7WN5h.png",

  },
  [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b9e1cbac-1546-4771-bf89-03d9f827a501/casquette-acg-heritage86-V7WN5h.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/ab5ac989-33ea-4d01-809e-12d282ab0a76/casquette-acg-heritage86-V7WN5h.png",
  ],
  "all"
);

const article1 = new Artcile(
    "Nike ACG Heritage86",
  "accessories",
  ["hats"],
  3500,
  "all",
  [color11, color12],
  descriptions_hats[0],
  "Nike",
  availableSizes1
);

const color21 = new Color(
  "Bleu marine Mystique/Noir/Bleu laser",
  "accessories",
  {
    small:
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/37631ab8-0761-42ab-b63a-424db594105e/bonnet-sportswear-8jckrj.png",
    default:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/5e6dd14c-225b-4a8e-a28e-f1c38b13a43d/bonnet-sportswear-8jckrj.png",
    large:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/5e6dd14c-225b-4a8e-a28e-f1c38b13a43d/bonnet-sportswear-8jckrj.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/5e6dd14c-225b-4a8e-a28e-f1c38b13a43d/bonnet-sportswear-8jckrj.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/21b91a1b-19ea-4d6a-afaf-c29caa6c38ab/bonnet-sportswear-8jckrj.png",
  ],
  "all"
);

const color22 = new Color(
  "Pierre",
  "accessories",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/bf4bd794-ce1d-4a4f-8e18-e04121743d38/bonnet-sportswear-8jckrj.png",
    default:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/6df37d21-ab3b-449f-8e0b-93cee0172ec3/bonnet-sportswear-8jckrj.png",
    large:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/6df37d21-ab3b-449f-8e0b-93cee0172ec3/bonnet-sportswear-8jckrj.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/6df37d21-ab3b-449f-8e0b-93cee0172ec3/bonnet-sportswear-8jckrj.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/e5ddb1e5-3f02-4081-8ee7-646a862fed92/bonnet-sportswear-8jckrj.png",
  ],
  "all"
);

const article2 = new Artcile(
  "Nike Bonnet Sportswear ",
  "accessories",
  ["hatss"],
  4200,
  "all",
  [color21, color22],
  descriptions_hats[1],
  "Nike",
  availableSizes1
);


const color32 = new Color(
  "Noir",
  "accessories",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/922c39ad-8be8-4db3-a306-3c7e80d0ddaa/bob-de-tennis-nikecourt-1T0KKP.png",
    default:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b0e5a0e5-7ae1-4119-b029-2401d6cf21d8/bob-de-tennis-nikecourt-1T0KKP.png",
    large:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b0e5a0e5-7ae1-4119-b029-2401d6cf21d8/bob-de-tennis-nikecourt-1T0KKP.png",
  },

  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b0e5a0e5-7ae1-4119-b029-2401d6cf21d8/bob-de-tennis-nikecourt-1T0KKP.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/a2609256-18a7-4c03-a1c8-2b577a79b44d/bob-de-tennis-nikecourt-1T0KKP.png",
  ],
  "all"
);

const color31 = new Color(
  "Blanc",
  "accessories",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/f3146b88-e8b2-49d3-ae92-298cde2d72f3/bob-de-tennis-nikecourt-1T0KKP.png",
    default:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/019e2697-8f6d-4c4a-ab4e-c9715861478f/bob-de-tennis-nikecourt-1T0KKP.png",
    large:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/019e2697-8f6d-4c4a-ab4e-c9715861478f/bob-de-tennis-nikecourt-1T0KKP.png",
  },

  [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/019e2697-8f6d-4c4a-ab4e-c9715861478f/bob-de-tennis-nikecourt-1T0KKP.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/47518d44-9fbc-4c24-b6cc-0e075257d7f0/bob-de-tennis-nikecourt-1T0KKP.png",
  ],
  "all"
);

const article3 = new Artcile(
  "NikeCourt",
  "accessories",
  ["hatss"],
  3800,
  "all",
  [color31, color32],
  descriptions_hats[2],
  "Nike",
  availableSizes1
);


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
  .then(() => console.log("success"));
