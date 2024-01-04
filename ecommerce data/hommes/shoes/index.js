import { Artcile, Color } from "../article";

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
  "A"
);

const article1 = new Artcile(
  "LeBron 19",
  "shoes",
  ["basket"],
  26000,
  "M",
  [color11],
  descriptions_basket[0]
);

fetch("http://localhost:5000/api/admin/new-article")
  .then((res) => {})
  .catch((e) => {
    console.log(e.message);
  });
