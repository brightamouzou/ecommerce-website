
let articles=[]

for (let i =0; i<10; i++){
    articles.push(Articlegenerator(i))
}

export default articles

function Articlegenerator(i){
    const testData = {
      id: i,
      desc: `Le running est un rituel quotidien, chaque pas vous rapprochant de votre objectif personnel. Laissez la Nike Air Zoom Pegasus 39 vous permettre d'atteindre de nouveaux sommets, que ce soit pour l’entraînement ou le jogging, grâce à son design intuitif`,
      name: "Nike Air Zoom 39",
      category: "shoes",
      sybcategories: "lifestyle",
      sex: "A",
      price: 16000,
      colors: [
        {
          id: +`${i}1`,
          colorName:
            "Platine pur/Ardoise minérale/Épinette brillant/Orange total",
          category: "shoes",
          images: {
            small:
              "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/fa49236e-bc0b-4194-996c-5148086aa5cf/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
            default:
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5d338dd-58b5-4134-8951-692c89477116/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
            large:
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5d338dd-58b5-4134-8951-692c89477116/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
          },
          otherViewImages: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5d338dd-58b5-4134-8951-692c89477116/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/70fdfeea-35c1-4fd6-8012-cd04e1231ecd/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d72512e5-7c88-4473-9263-1cabb53a6411/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/03cb3532-40b7-4bc3-ae40-2325098dcef5/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/36c0fec7-7a27-4b44-a441-35fd7e0236e9/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
          ],
        },

        {
          id: +`${i}2`,
          colorName: " Noir/Gris fumée foncé/Blanc",
          category: "shoes",
          images: {
            small:
              "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/7a563c5a-6048-4804-97a4-1cc4de6f6097/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
            default:
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a96f62d4-b20a-4371-a660-38565bc4581b/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
            large:
              "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a96f62d4-b20a-4371-a660-38565bc4581b/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
          },
          otherViewImages: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a96f62d4-b20a-4371-a660-38565bc4581b/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7c13f2f2-4bc7-4a96-8c77-99530cc48876/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1378be9c-77a6-40c2-be1e-532a0df1a375/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/06f8aed3-dae6-428f-a320-17e435c50962/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b2516c8-26df-453e-970b-3787abc89bdc/chaussure-de-running-sur-route-air-zoom-pegasus-39-pour-fRzz2h.png",
          ],
        },
      ],
    };
    return testData
}