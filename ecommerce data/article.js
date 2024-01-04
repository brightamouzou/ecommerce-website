export function Artcile(
  name,
  category,
  subCategories,
  price,
  sex = "all",
  colors,
  description,
  brand = "Nike",
  availableSizes = {},
  stars = 4.5,
) {
  this.name = name;
  this.category = category;
  this.subCategories = subCategories;
  this.price = price; //En centime
  this.colors = colors;
  this.sex = sex;
  this.description = description;
  this.brand = brand;
  this.availableSizes=availableSizes;
  this.stars = stars;
}


export function Color(colorName, category, images, otherViewImages, sex="all") {
  this.colorName = colorName;
  this.category = category;
  this.images = images;
  this.otherViewImages = otherViewImages;
  this.sex = sex;
}

export const descriptions_lifestyle = [
  "Vous connaissez cette sensation d'excitation lorsque vous êtes sur le point de partir à l'aventure ? Nous nous en sommes inspirés pour créer ce modèle. La Terrascape 90 revisite la Air Max avec un design pensé pour les grands espaces. Le résultat : plus de durabilité et d’amorti sans encombrement supplémentaire, et une silhouette tendance aussi efficace sur les sentiers de randonnée que dans la jungle urbaine.",
  "La Nike Crater Impact reflète notre politique de développement durable visant à transformer les déchets en chaussures pour une empreinte plus légère. Cette chaussure affiche des choix de conception uniques qui réduisent les déchets par rapport à des méthodes de fabrication traditionnelles, comme un Swoosh brodé, des renforts fonctionnels et une semelle intermédiaire en mousse Crater.",
  "La Air Force 1 Mid '07 conserve tous les détails qui ont fait son succès : des renforts impeccables, des touches audacieuses et juste ce qu'il faut d'éclat pour vous faire briller. Le col mi-montant rembourré, doté d'une fermeture à scratch classique, offre un confort inspiré du basketball, tandis que les perforations sur la pointe permettent de garder votre pied au frais.",
  "Revendiquez votre côté rebelle avec votre Nike Air Max Plus, un modèle Air novateur qui offre une stabilité optimale et un amorti exceptionnel. Reprenant les lignes ondulées, les détails en TPU et l'empeigne en mesh aéré du modèle OG, elle incarne un style rebelle",
  "De la salle au terrain de sport et partout ailleurs, la célèbre Cross Trainer de 1987 vous permet de vous déplacer facilement et en toute confiance. Des détails comme le strap à l'avant-pied rappellent le modèle d'origine, tandis que les éléments réfléchissants et les touches irisées créent un look futuriste et fonctionnel. Conçus à l'origine pour le sport de compétition, l'amorti Air au talon et le col mi-montant vous assurent confort et maintien pour toutes vos aventures.",
];


export const descriptions_basket = [
  "LeBron James joue moins dans la raquette et occupe plus un rôle de meneur aujourd'hui, il est donc logique qu'il souhaite une chaussure un peu plus rapide. Son 19e modèle signature vous offre une sensation de maintien parfaite, avec une conception plus légère idéale pour les joueurs rapides et puissants comme LeBron, qui occupent toute la surface du terrain.",
  "Paul George donne tout sur le terrain, sans sourciller. Il peut éliminer la défense, la faire reculer, intercepter le ballon pour tirer, en restant toujours parfaitement serein et décisif sur le terrain. Grâce à son mesh respirant et sa mousse réactive, sa PG 6 signature est conçue pour vous offrir une sensation de légèreté et de dynamisme… comme si vous marchiez sur des nuages.",
  "Le step-back a été la source d'inspiration de la Jordan Zoom Separate : un modèle léger à la coupe basse, conçu pour vous aider à prendre le contrôle du terrain. L'amorti est plus ferme à l'extérieur du pied et plus souple à l'intérieur, pour vous permettre de vous appuyer fortement sur le sol lorsque vous vous inclinez pour changer de direction. L'unité Zoom Air vous aide à vous détacher du défenseur pour avoir une vue bien dégagée sur le panier.",
  "Enflammez le parquet comme Russell Westbrook.Inspirée de sa toute dernière chaussure de match, la semelle extérieure de la Jordan One Take 3 vous permet de changer de direction ou de vous arrêter d'un coup facilement.Accélérez le tempo comme Russ grâce à un amorti Zoom Air à retour d'énergie qui vous permet d'effectuer des tirs incroyables et de prendre le parquet d'assaut encore et encore.",
];

export const descriptions_foot = [
  "La Nike Mercurial Superfly 8 Elite FG présente un nouveau look avec des éléments spécialisés pour vous permettre de jouer rapidement du début à la fin du match. Le col extensible assure un maintien optimal, tandis que la plaque innovante offre une réactivité instantanée pour des changements de direction rapides à haute vitesse.",
  "L'une de nos Tiempo les plus légères à ce jour, la Nike Tiempo Legend 9 Pro FG vous aide à passer à l'offensive avec une silhouette basse revisitée spécialement pour les attaquants.L'empeigne présente des textures en relief avec des renforts en mousse souple pour des dribbles, des passes et des tirs précis, tandis que les crampons sous la chaussure assurent une adhérence optimale pour les changements de direction rapides et les arrêts soudains.",
  "Quand ton instinct est en parfaite harmonie avec ta vitesse, rien ne te résiste sur le terrain. Pense plus vite et joue plus vite avec la chaussure de football adidas X. Conçue pour offrir un chaussant ajusté et un confort ultime, cette chaussure légère te permet d'aller toujours plus vite. La semelle extérieure en TPU te garantit une vitesse ultime sur terrain souple. La languette quadri-extensible et la doublure antidérapante au talon t'assurent un maintien optimal.",
"Le foot à cinq a ses propres règles. L'intuition prend le pas sur la tactique. Quand tu dois être le plus rapide, la chaussure adidas X t'aide à maîtriser l'art de la vitesse. Cette chaussure de football indoor est dotée d'une tige minimaliste douce Speedskin pour plus de légèreté et de confort. À l'intérieur, le chausson intégré stretch t'offre un maintien parfait. La semelle extérieure en caoutchouc stylée te garantit une adhérence supérieure sur les surfaces planes pour prendre une longueur d'avance.",
  "Des vestiaires aux rues animées de la ville, la claquette Adilette est un must-have depuis plus de cinquante ans. En l'honneur du 50e anniversaire d'un véritable classique adidas, cette paire apporte une touche de fraîcheur à ton look avec des associations de couleurs modernes. L'assise plantaire moulée et la tige à séchage rapide t'offrent un maximum de confort, comme le modèle original des 70's.",
  ""
];

export const descriptions_tennis = [
  "Optimisez chaque pas grâce à la NikeCourt Zoom NXT. Tirant profit des observations des athlètes de haut niveau, nous avons amélioré l'amorti à l'avant-pied pour plus de dynamisme et de rebond au moment de décoller le pied au service. Réduisant le poids sans sacrifier la durabilité, nous avons également veillé à ce que ce modèle incroyablement léger reste ultra-confortable. Grâce au col doux et au mesh respirant, vous bénéficiez de la sensation de fraîcheur et de l'amorti que vous aimez tant pour rester concentrée et donner le meilleur de vous-même lorsque vous jouez.",
  "Célébrant le 30e anniversaire de la Nike Air Tech Challenge 2, la NikeCourt Tech Challenge 20 apporte une touche de modernité à une chaussure de tennis emblématique. Vous trouverez les mêmes motifs dynamiques que sur le modèle original, avec des matières modernes plus confortables.",
  "Affiche tes couleurs. Portée par les athlètes adidas lors du plus grand tournoi de l'hémisphère sud, cette chaussure de tennis est issue d'une collection éclatante qui met en lumière les conséquences du changement climatique. Son système de laçage intuitif est combiné à des inserts Sensepods au talon qui permettent un chaussant personnalisé. L'amorti dans la semelle intermédiaire Bounce et le renfort en TPU au médio-pied garantissent stabilité et confort",
];

export const descriptions_bags = [
  "Le sac à dos Nike Utility Elite permet de conserver votre équipement à portée de main, en sécurité et bien rangé lors de vos trajets entre chaque séance d'entraînement. Les bretelles rembourrées permettent de vous déplacer confortablement et le sac s'ouvre à plat pour accéder facilement à vos affaires.",
];