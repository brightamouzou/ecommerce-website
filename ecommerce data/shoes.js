function Artcile(
  name,
  category,
  subcategories,
  price,
  sex = "all",
  colors,
  model = ""
) {
  this.name = name;
  this.category = category;
  this.subcategories = subcategories;
  this.price = price; //En centime
  this.colors = colors;
  this.sex = sex;
}

function Color(colorName, category, images, otherViewImages, sex) {
  this.colorName = colorName;
  this.category = category;
  this.images = images;
  this.otherViewImages = otherViewImages;
  this.sex=sex;
}

descriptions = [
  "Vous connaissez cette sensation d'excitation lorsque vous êtes sur le point de partir à l'aventure ? Nous nous en sommes inspirés pour créer ce modèle. La Terrascape 90 revisite la Air Max avec un design pensé pour les grands espaces. Le résultat : plus de durabilité et d’amorti sans encombrement supplémentaire, et une silhouette tendance aussi efficace sur les sentiers de randonnée que dans la jungle urbaine.",
  "La Nike Crater Impact reflète notre politique de développement durable visant à transformer les déchets en chaussures pour une empreinte plus légère. Cette chaussure affiche des choix de conception uniques qui réduisent les déchets par rapport à des méthodes de fabrication traditionnelles, comme un Swoosh brodé, des renforts fonctionnels et une semelle intermédiaire en mousse Crater.",
  "La Air Force 1 Mid '07 conserve tous les détails qui ont fait son succès : des renforts impeccables, des touches audacieuses et juste ce qu'il faut d'éclat pour vous faire briller. Le col mi-montant rembourré, doté d'une fermeture à scratch classique, offre un confort inspiré du basketball, tandis que les perforations sur la pointe permettent de garder votre pied au frais.",
  "Revendiquez votre côté rebelle avec votre Nike Air Max Plus, un modèle Air novateur qui offre une stabilité optimale et un amorti exceptionnel. Reprenant les lignes ondulées, les détails en TPU et l'empeigne en mesh aéré du modèle OG, elle incarne un style rebelle",
  "De la salle au terrain de sport et partout ailleurs, la célèbre Cross Trainer de 1987 vous permet de vous déplacer facilement et en toute confiance. Des détails comme le strap à l'avant-pied rappellent le modèle d'origine, tandis que les éléments réfléchissants et les touches irisées créent un look futuriste et fonctionnel. Conçus à l'origine pour le sport de compétition, l'amorti Air au talon et le col mi-montant vous assurent confort et maintien pour toutes vos aventures."
];

const color11 = new Color(
  " Obsidienne/Bleu orage/Racine de garance clair/Marina",
  "shoes",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/7b2c9613-05d6-4048-beb8-fbbf4b298bad/chaussures-air-max-terrascape-90-pour-1ZpGGk.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0c537a6a-a8ff-4ce3-b168-f39de087941a/chaussures-air-max-terrascape-90-pour-1ZpGGk.png",
    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0c537a6a-a8ff-4ce3-b168-f39de087941a/chaussures-air-max-terrascape-90-pour-1ZpGGk.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/42d594fd-deb8-4b22-863f-a487629fd4b3/chaussures-air-max-terrascape-90-pour-1ZpGGk.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/06513836-19dd-47a5-89a7-203520af669c/chaussures-air-max-terrascape-90-pour-1ZpGGk.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7965099e-7b10-440f-813a-3f7f95641d07/chaussures-air-max-terrascape-90-pour-1ZpGGk.png",
  ],
  "M"
);

const color12 = new Color(
  "Rotin/Kaki/Phantom/Gris fumée foncé",
  "shoes",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/303abd11-0610-4881-8616-a8103a700aed/chaussures-air-max-terrascape-90-pour-1ZpGGk.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/35ed748e-8b28-4421-87a8-6f2cfdc53b73/chaussures-air-max-terrascape-90-pour-1ZpGGk.png",
    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/35ed748e-8b28-4421-87a8-6f2cfdc53b73/chaussures-air-max-terrascape-90-pour-1ZpGGk.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3f199c83-722e-4497-9faf-00bf6b14eac1/chaussures-air-max-terrascape-90-pour-1ZpGGk.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/01574713-0e47-48bc-ae9f-fab2dafe684d/chaussures-air-max-terrascape-90-pour-1ZpGGk.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9402694a-3c86-4d84-8609-234278c55605/chaussures-air-max-terrascape-90-pour-1ZpGGk.png",
  ],
  "M"
);

const article1 = new Artcile(
  "Nike Air Max Terrascape 90",
  "shoes",
  ["lifestyle"],
  18000,
  "M",
  [color11, color12]
);

//---------------------------------

const color21 = new Color(
  "white",
  "shoes",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/843898b4-4c3e-42aa-b14d-7fb9f1d47a14/chaussure-crater-impact-se-pour-91r7cR.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d8de3fbb-4559-493f-83bd-e741e803b750/chaussure-crater-impact-se-pour-91r7cR.png",
    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d8de3fbb-4559-493f-83bd-e741e803b750/chaussure-crater-impact-se-pour-91r7cR.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/831f67b5-ac42-4e38-9037-bd0c504b8257/chaussure-crater-impact-se-pour-91r7cR.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c6c37cd4-983b-4fa8-b064-f1a9c6b21a10/chaussure-crater-impact-se-pour-91r7cR.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0cd85b8f-80e8-4172-8e8a-bcec426ad92b/chaussure-crater-impact-se-pour-91r7cR.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a3953f4b-1bb4-4a20-afef-5fa70705d33a/chaussure-crater-impact-se-pour-91r7cR.png",
  ],
  "M"
);

const color22 = new Color(
  "white",
  "shoes",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/dd38d4b0-4acd-465b-8eff-7c5d168db71a/chaussure-air-force-1-mid-07-pour-pj5Mqp.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/70b5f06a-f023-4ff3-9822-da33ab4a6d18/chaussure-air-force-1-mid-07-pour-pj5Mqp.png",
    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/70b5f06a-f023-4ff3-9822-da33ab4a6d18/chaussure-air-force-1-mid-07-pour-pj5Mqp.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/70b5f06a-f023-4ff3-9822-da33ab4a6d18/chaussure-air-force-1-mid-07-pour-pj5Mqp.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d617ab1d-1ff0-4a86-98fe-b54aad27b560/chaussure-air-force-1-mid-07-pour-pj5Mqp.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/99cec274-814e-4658-af0d-e4c1f606c8af/chaussure-air-force-1-mid-07-pour-pj5Mqp.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33942b2a-d473-4418-86f9-a8f934908c66/chaussure-air-force-1-mid-07-pour-pj5Mqp.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a3953f4b-1bb4-4a20-afef-5fa70705d33a/chaussure-crater-impact-se-pour-91r7cR.png",
  ],
  "M"
);

const article2 = new Artcile(
  "Nike Crater Impact SE",
  "shoes",
  ["lifestyle"],
  13500,
  "B",
  [color21, color22]
);

//---------------------------------

const color31 = new Color(
  "Noir/Noir",
  "shoes",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/843898b4-4c3e-42aa-b14d-7fb9f1d47a14/chaussure-crater-impact-se-pour-91r7cR.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d8de3fbb-4559-493f-83bd-e741e803b750/chaussure-crater-impact-se-pour-91r7cR.png",
    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d8de3fbb-4559-493f-83bd-e741e803b750/chaussure-crater-impact-se-pour-91r7cR.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d8de3fbb-4559-493f-83bd-e741e803b750/chaussure-crater-impact-se-pour-91r7cR.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0cd85b8f-80e8-4172-8e8a-bcec426ad92b/chaussure-crater-impact-se-pour-91r7cR.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/75b12891-34cb-45c4-841b-b2be5ad2e919/chaussure-crater-impact-se-pour-91r7cR.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a3953f4b-1bb4-4a20-afef-5fa70705d33a/chaussure-crater-impact-se-pour-91r7cR.png",
  ],
  "M"
);

const color32 = new Color(
  "Blanc/Blanc",
  "shoes",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/5521d317-b4b7-4f88-b803-b8eb9feec0c1/chaussure-crater-impact-se-pour-91r7cR.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/66a4ebfa-1afb-4d7e-bfc3-bf3863c47100/chaussure-crater-impact-se-pour-91r7cR.png",
    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/66a4ebfa-1afb-4d7e-bfc3-bf3863c47100/chaussure-crater-impact-se-pour-91r7cR.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/66a4ebfa-1afb-4d7e-bfc3-bf3863c47100/chaussure-crater-impact-se-pour-91r7cR.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3a6e998e-1e79-403d-aef5-21c58743fa0d/chaussure-crater-impact-se-pour-91r7cR.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cf6d0a71-39e8-4e63-aca5-9a3278abc34b/chaussure-crater-impact-se-pour-91r7cR.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2b633923-8f5e-47f3-a12b-cdddac32ebae/chaussure-crater-impact-se-pour-91r7cR.png",
  ],
  "M"
);

const article3 = new Artcile(
  "Nike Air Force 1 Mid '07",
  "shoes",
  ["lifestyle"],
  14500,
  "M",
  [color31, color32]
);

//---------------------------------

const color41 = new Color(
  " Noir/Noir/Noir",
  "shoes",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/erzfadfpnzgkxt0gn2ya/chaussure-air-max-plus-pour-nnTrAZe0.png",
    default:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/erzfadfpnzgkxt0gn2ya/chaussure-air-max-plus-pour-nnTrAZe0.png",
    large:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/erzfadfpnzgkxt0gn2ya/chaussure-air-max-plus-pour-nnTrAZe0.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/erzfadfpnzgkxt0gn2ya/chaussure-air-max-plus-pour-nnTrAZe0.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/qidmkfcwrhufqbwcyuvi/chaussure-air-max-plus-pour-nnTrAZe0.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/bdmjvdiunvo8qozpbabw/chaussure-air-max-plus-pour-nnTrAZe0.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/xu5kugo19nr5bwc511ek/chaussure-air-max-plus-pour-nnTrAZe0.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/xmgcmvnwzp68ozqtkao0/chaussure-air-max-plus-pour-nnTrAZe0.png",
  ],
  "M"
);

const color42 = new Color(
  "Blanc/Noir/Gris polaire/Blanc",
  "shoes",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/go9ejlsilpz2hq0eophu/chaussure-air-max-plus-pour-nnTrAZe0.png",
    default:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/lx0owmisj943sr59emb8/chaussure-air-max-plus-pour-nnTrAZe0.png",
    large:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/lx0owmisj943sr59emb8/chaussure-air-max-plus-pour-nnTrAZe0.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/sjeagwnftwiu5lynug50/chaussure-air-max-plus-pour-nnTrAZe0.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/makns9rnf9cl1tbewtci/chaussure-air-max-plus-pour-nnTrAZe0.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/bfngaljvtk4fedltpquk/chaussure-air-max-plus-pour-nnTrAZe0.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/qp3nmrlrofugbgqajn82/chaussure-air-max-plus-pour-nnTrAZe0.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/zsyvn2qvhmzdgfy1k8u7/chaussure-air-max-plus-pour-nnTrAZe0.png",
  ],
  "M"
);

const article4 = new Artcile(
  "Nike Air Max Plus",
  "shoes",
  ["lifestyle"],
  22500,
  "M",
  [color41, color42]
);

"https://static.nike.com/a/images/t_PDP_144_v1/f_auto/go9ejlsilpz2hq0eophu/chaussure-air-max-plus-pour-nnTrAZe0.png";

//---------------------------------

const color51 = new Color(
  " Noir/Noir/Noir",
  "shoes",
  {
    small:
    "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ff71e8c2-bc05-45f4-bcbd-b1410a3eab07/date-de-sortie-de-la-air-trainer%C2%A01-%C2%AB%C2%A0dark-smoke-grey%C2%A0%C2%BB-dh7338-001.jpg",
    default:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/erzfadfpnzgkxt0gn2ya/chaussure-air-max-plus-pour-nnTrAZe0.png",
    large:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/erzfadfpnzgkxt0gn2ya/chaussure-air-max-plus-pour-nnTrAZe0.png",
  },
  [
    "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/e9e65fc8-868f-431e-9cf9-8894f2ecd433/date-de-sortie-de-la-air-trainer%C2%A01-%C2%AB%C2%A0dark-smoke-grey%C2%A0%C2%BB-dh7338-001.jpg",
    "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/e5adfc0b-0444-4382-9b53-4f85bfc7933f/date-de-sortie-de-la-air-trainer%C2%A01-%C2%AB%C2%A0dark-smoke-grey%C2%A0%C2%BB-dh7338-001.jpg",
    "https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/fc08970c-2e72-4157-809e-8c18f7366306/date-de-sortie-de-la-air-trainer%C2%A01-%C2%AB%C2%A0dark-smoke-grey%C2%A0%C2%BB-dh7338-001.jpg",
    "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/72b06e69-af28-4a1d-89e7-02afd2271364/date-de-sortie-de-la-air-trainer%C2%A01-%C2%AB%C2%A0dark-smoke-grey%C2%A0%C2%BB-dh7338-001.jpg",
  ],
  "M"
);

const color52 = new Color(
  "Blanc/Noir/Gris polaire/Blanc",
  "shoes",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/go9ejlsilpz2hq0eophu/chaussure-air-max-plus-pour-nnTrAZe0.png",
    default:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/lx0owmisj943sr59emb8/chaussure-air-max-plus-pour-nnTrAZe0.png",
    large:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/lx0owmisj943sr59emb8/chaussure-air-max-plus-pour-nnTrAZe0.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/sjeagwnftwiu5lynug50/chaussure-air-max-plus-pour-nnTrAZe0.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/makns9rnf9cl1tbewtci/chaussure-air-max-plus-pour-nnTrAZe0.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/bfngaljvtk4fedltpquk/chaussure-air-max-plus-pour-nnTrAZe0.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/qp3nmrlrofugbgqajn82/chaussure-air-max-plus-pour-nnTrAZe0.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/zsyvn2qvhmzdgfy1k8u7/chaussure-air-max-plus-pour-nnTrAZe0.png",
  ],
  "M"
);

const article5 = new Artcile(
  "Dark Smoke Grey",
  "shoes",
  ["lifestyle"],
  190,
  "M",
  [color41, color42]
);

"https://static.nike.com/a/images/t_PDP_144_v1/f_auto/go9ejlsilpz2hq0eophu/chaussure-air-max-plus-pour-nnTrAZe0.png";






fetch("http://localhost:5000/api/admin/new-article", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ ...article1 }),
})
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.log(e.message));
