import { Artcile,Color} from "../article.js";
import { availableSizes1,descriptions_bags } from "./descriptions.js";

const color11 = new Color(
  "Marron clair/Marron clair/Pierre mystérieuse",
  "accessories",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/i1-907df49d-7af4-4d80-9074-06be5341f89b/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-4356ff52-793f-441e-adbd-59524a61150c/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-4356ff52-793f-441e-adbd-59524a61150c/sac-a-dos-de-training-utility-elite-GzKVWH.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-4356ff52-793f-441e-adbd-59524a61150c/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-fcd425c8-96aa-4254-9eb1-9be1b285dffb/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-879fc2d1-56d7-472c-8dcb-19b5d74f47aa/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-4daf5d95-9161-48d4-94c5-1e74882c1071/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-6ef73162-693a-4e7e-95b8-be770c8b58df/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-a896db5e-2f56-451d-8b1b-43da07c1f673/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-f6bc763c-95b4-46ed-9af9-e795c0bf8e03/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-935e60ad-024c-403b-9be9-b91bee320b5b/sac-a-dos-de-training-utility-elite-GzKVWH.png",
  ],
  "all"
);

const color12 = new Color(
  " Bleu marine nuit/Bleu marine Mystique/Bleu marine Mystique",
  "accessories",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/a74ad649-aa23-419f-9f87-b2edf27b8ed5/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c568e2c0-32ec-4a91-886b-c1271426812f/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c568e2c0-32ec-4a91-886b-c1271426812f/sac-a-dos-de-training-utility-elite-GzKVWH.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c568e2c0-32ec-4a91-886b-c1271426812f/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ab07d47e-1d7d-465f-bcbf-5e83ad864fba/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8e115e15-190c-40e1-b07b-2c47744a5d7f/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3f032048-29fa-4bbe-b8e5-9568cc756e6e/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0ecb7288-49dd-4e4f-86f2-13c6f858cd05/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3c7d4994-5087-48aa-8b66-29085bb4c4f4/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2c884147-759e-46b2-b2f0-8c4fdfd0d1aa/sac-a-dos-de-training-utility-elite-GzKVWH.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1e6a15fb-3bf5-43eb-a0bf-3186f4af127c/sac-a-dos-de-training-utility-elite-GzKVWH.png",
  ],
  "all"
);

const article1=new Artcile(
    "Nike Utility Elite",
    "accessories",
    ["bags"],
    11500,
    "all",
    [color11,color12],
    descriptions_bags[0],
    "Nike",
    availableSizes1,

)

const color21 = new Color(
  "Bleu marine Mystique/Noir/Bleu laser",
  "accessories",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/a737bdc5-9392-420b-a24e-cdd34d75365d/sac-a-dos-heritage-8Nqm7S.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b97cc9c5-f5c2-4af0-9e01-448516b6263a/sac-a-dos-heritage-8Nqm7S.png",
    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b97cc9c5-f5c2-4af0-9e01-448516b6263a/sac-a-dos-heritage-8Nqm7S.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/31e8eb1d-7f1f-4d1a-b50f-f1fac68a7634/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/31e8eb1d-7f1f-4d1a-b50f-f1fac68a7634/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9131ddda-1acb-497d-b688-e301678f3454/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b8eeef55-70f6-4336-ad80-70e727f0bfb8/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f01880eb-1707-4e47-bc95-0b0af901dd31/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aa40ba32-4e35-4cc4-89d7-8d86f47d18a2/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f07c257d-51b2-4015-8361-d33fed86b71c/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bd296a12-71d7-404f-be82-90a7862084e3/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/26430c67-90b1-4245-8e47-84bac848a6b7/sac-a-dos-heritage-8Nqm7S.png",
  ],
  "all"
);

const color22 = new Color(
  "Racine de garance clair/Noir/Voile/Rose",
  "accessories",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/4dd39e47-7187-4bd4-90dc-a5d146947da0/sac-a-dos-heritage-8Nqm7S.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/782f23a7-cd18-4c15-ab01-674d2de22ceb/sac-a-dos-heritage-8Nqm7S.png",

    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/782f23a7-cd18-4c15-ab01-674d2de22ceb/sac-a-dos-heritage-8Nqm7S.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/782f23a7-cd18-4c15-ab01-674d2de22ceb/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b4b71a31-9363-48b0-a314-68d8eaa5fc6d/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/10cce5dd-e4ca-45c4-a7b8-56c1c46c1d4f/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5db10b2e-135d-4d1f-986c-fb5ae7d62ecf/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/caf8618c-9a1b-4242-be3a-85c977e6098f/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/81d8220f-89d2-4c4e-97a5-59afdd249bef/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/df5a47ef-c552-42fb-861e-5e98ab411780/sac-a-dos-heritage-8Nqm7S.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4ae908e-d692-40f5-9fd7-8bcc96439c1c/sac-a-dos-heritage-8Nqm7S.png",
  ],
  "all"
);

const article2=new Artcile(
    "Nike Heritage",
    "accessories",
    ["bags"],
    4200,
    "all",
    [color21, color22],
    descriptions_bags[1],
    "Nike",
    availableSizes1
)



const color31 = new Color(
  "Rose archéo/Rose archéo/Bronze métallique",
  "accessories",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/8d8f3472-6477-42c5-ada3-2e44d6ea7700/sac-banane-heritage-m82L20.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/539f5c75-1eb8-4894-9cc2-36c3b77b7741/sac-banane-heritage-m82L20.png",
    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/539f5c75-1eb8-4894-9cc2-36c3b77b7741/sac-banane-heritage-m82L20.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/539f5c75-1eb8-4894-9cc2-36c3b77b7741/sac-banane-heritage-m82L20.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d7096db8-5c2c-4cc7-8982-a1c2fd5f3ac8/sac-banane-heritage-m82L20.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f084fdc6-8159-40e5-9406-b54a2d3f1595/sac-banane-heritage-m82L20.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a6577db6-23a7-4a09-81dc-e821c8abf70e/sac-banane-heritage-m82L20.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eea48e1f-7d12-4cb6-8c6b-64e3c0d6000d/sac-banane-heritage-m82L20.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9c862651-6067-4be4-9eb0-42e2ac3f3245/sac-banane-heritage-m82L20.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e5507a39-f2ee-4121-a59a-1ae167891293/sac-banane-heritage-m82L20.png",
  ],
  "all"
);
new Artcile()
const color32 = new Color(
  "Olive mat/Olive mat/Kaki cargo",
  "accessories",
  {
    small:
      "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/7708f44c-56dc-48cb-ae1c-bf76f4ea5a41/sac-banane-heritage-m82L20.png",
    default:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a58aac8f-03f3-417d-a0e0-3cf7b181d258/sac-banane-heritage-m82L20.png",

    large:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a58aac8f-03f3-417d-a0e0-3cf7b181d258/sac-banane-heritage-m82L20.png",
  },
  [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a58aac8f-03f3-417d-a0e0-3cf7b181d258/sac-banane-heritage-m82L20.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/ff2f0deb-50e1-4300-899e-21bab8746c1c/sac-banane-heritage-m82L20.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ff2f0deb-50e1-4300-899e-21bab8746c1c/sac-banane-heritage-m82L20.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2c9ebd5e-77c6-45f9-8c5a-1cfb4558c98a/sac-banane-heritage-m82L20.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7911cd56-12f2-42c9-880d-a70062191954/sac-banane-heritage-m82L20.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a7b79b96-d847-485a-b9cb-76bbcc0d0007/sac-banane-heritage-m82L20.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f59782e4-d4c6-42b7-a18d-93d0d9c93e94/sac-banane-heritage-m82L20.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4df99cf9-7a0e-45bd-889b-7ffffd3e604a/sac-banane-heritage-m82L20.png",
  ],
  "all"
);

const article3 = new Artcile(
  "Nike Heritage Banane",
  "accessories",
  ["bags"],
  3000,
  "all",
  [color31, color32],
  descriptions_bags[2],
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