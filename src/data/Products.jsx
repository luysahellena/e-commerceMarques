// src/data/Products.jsx
const products = [
  { 
      id: 1, 
      name: 'Whisky Black Label', 
      price: 199.99, 
      image: `${process.env.PUBLIC_URL}/img/products/blacklabel.jpg`,
      productionYear: 2015,
      imported: true,
      specifications: "Whisky de alta qualidade com notas de carvalho e baunilha.",
      userComments: [
          "Excelente qualidade, sabor suave.",
          "Perfeito para momentos especiais.",
          "Um pouco caro, mas vale a pena."
      ]
  },
  { 
      id: 2, 
      name: 'Chivas Regal', 
      price: 149.99, 
      image: `${process.env.PUBLIC_URL}/img/products/chivas.jpg`,
      productionYear: 2018,
      imported: true,
      specifications: "Blend escocês com sabor complexo e suave.",
      userComments: [
          "Melhor whisky que já experimentei!",
          "Bom custo-benefício.",
          "Ideal para presentes."
      ]
  },
  { 
      id: 3, 
      name: "Jack Daniel's", 
      price: 99.99, 
      image: `${process.env.PUBLIC_URL}/img/products/jack.jpg`,
      productionYear: 2017,
      imported: false,
      specifications: "Whisky americano clássico com sabor forte e adocicado.",
      userComments: [
          "Ótimo para beber puro.",
          "Sabor forte e marcante.",
          "Perfeito para amantes de whisky."
      ]
  },
  { 
      id: 4, 
      name: 'Jameson Irish Whiskey', 
      price: 129.99, 
      image: `${process.env.PUBLIC_URL}/img/products/jameson.jpg`,
      productionYear: 2016,
      imported: true,
      specifications: "Whisky irlandês suave e levemente adocicado.",
      userComments: [
          "Sabor equilibrado e agradável.",
          "Bom para beber puro ou em drinks.",
          "Um clássico entre os whiskies."
      ]
  },
  { 
      id: 5, 
      name: 'Johnnie Walker Red Label', 
      price: 89.99, 
      image: `${process.env.PUBLIC_URL}/img/products/redlabel.jpg`,
      productionYear: 2019,
      imported: true,
      specifications: "Blend de whiskies com sabor robusto e defumado.",
      userComments: [
          "Bom custo-benefício.",
          "Sabor forte e marcante.",
          "Ideal para misturar em drinks."
      ]
  },
  { 
      id: 6, 
      name: 'Bacardi Carta Blanca Rum', 
      price: 79.99, 
      image: `${process.env.PUBLIC_URL}/img/products/bacardi.jpg`,
      productionYear: 2020,
      imported: true,
      specifications: "Rum branco clássico com sabor suave e levemente adocicado.",
      userComments: [
          "Ótimo para coquetéis.",
          "Sabor suave e versátil.",
          "Um clássico entre os runs."
      ]
  },
  { 
      id: 7, 
      name: 'Hennessy Cognac', 
      price: 249.99, 
      image: `${process.env.PUBLIC_URL}/img/products/cognac.jpg`,
      productionYear: 2016,
      imported: true,
      specifications: "Cognac de alta qualidade, encorpado e aromático.",
      userComments: [
          "Uma experiência incrível!",
          "Excelente para degustar lentamente.",
          "Recomendo para quem gosta de destilados fortes."
      ]
  },
  { 
      id: 8, 
      name: 'Martini Rosso Vermouth', 
      price: 49.99, 
      image: `${process.env.PUBLIC_URL}/img/products/rosso.jpg`,
      productionYear: 2021,
      imported: true,
      specifications: "Vermouth com sabor doce e herbal.",
      userComments: [
          "Perfeito para Negroni.",
          "Sabor clássico e versátil.",
          "Ótimo para misturar com gin."
      ]
  },
  { 
      id: 9, 
      name: 'Patrón Silver Tequila', 
      price: 249.99, 
      image: `${process.env.PUBLIC_URL}/img/products/patron.jpg`,
      productionYear: 2019,
      imported: true,
      specifications: "Tequila premium com sabor refrescante e suave.",
      userComments: [
          "Ótima tequila, vale o preço.",
          "Perfeita para shots.",
          "Sabor incomparável!"
      ]
  },
  { 
      id: 10, 
      name: 'Grey Goose Vodka', 
      price: 159.99, 
      image: `${process.env.PUBLIC_URL}/img/products/goose.jpg`,
      productionYear: 2020,
      imported: true,
      specifications: "Vodka premium com pureza excepcional.",
      userComments: [
          "Ótima para coquetéis.",
          "Sabor limpo e suave.",
          "Vale o preço pelo sabor único."
      ]
  },
  { 
      id: 11, 
      name: 'Tanqueray London Dry Gin', 
      price: 119.99, 
      image: `${process.env.PUBLIC_URL}/img/products/tanqueray.jpg`,
      productionYear: 2021,
      imported: true,
      specifications: "Gin clássico com aroma de zimbro.",
      userComments: [
          "Ótimo para gin tônica.",
          "Sabor equilibrado.",
          "Um dos melhores gins do mercado."
      ]
  },
  { 
      id: 12, 
      name: 'Ciroc Vodka', 
      price: 189.99, 
      image: `${process.env.PUBLIC_URL}/img/products/ciroc.jpg`,
      productionYear: 2020,
      imported: true,
      specifications: "Vodka destilada a partir de uvas finas.",
      userComments: [
          "Sabor incrível e suave.",
          "Perfeita para festas.",
          "Vale o preço pela qualidade."
      ]
  },
  { 
      id: 13, 
      name: 'Captain Morgan Spiced Rum', 
      price: 69.99, 
      image: `${process.env.PUBLIC_URL}/img/products/spicedRum.jpg`,
      productionYear: 2020,
      imported: true,
      specifications: "Rum com especiarias e sabor marcante.",
      userComments: [
          "Ótimo para drinks tropicais.",
          "Sabor único e picante.",
          "Perfeito para coquetéis."
      ]
  },
  { 
      id: 14, 
      name: 'Don Julio Añejo Tequila', 
      price: 279.99, 
      image: `${process.env.PUBLIC_URL}/img/products/donJulio.jpg`,
      productionYear: 2019,
      imported: true,
      specifications: "Tequila premium envelhecida, com sabor suave e complexo.",
      userComments: [
          "Excelente qualidade.",
          "Sabor inigualável.",
          "Ótima para ocasiões especiais."
      ]
  },
  { 
      id: 15, 
      name: 'Moët & Chandon Champagne', 
      price: 299.99, 
      image: `${process.env.PUBLIC_URL}/img/products/moetChandon.jpg`,
      productionYear: 2022,
      imported: true,
      specifications: "Champanhe refinado, com sabor suave e bolhas persistentes.",
      userComments: [
          "Perfeito para celebrações.",
          "Sabor leve e elegante.",
          "Excelente champanhe."
      ]
  },
  { 
      id: 16, 
      name: 'Heineken Lager Beer', 
      price: 7.99, 
      image: `${process.env.PUBLIC_URL}/img/products/heineken.jpg`,
      productionYear: 2022,
      imported: true,
      specifications: "Cerveja lager de sabor suave e refrescante.",
      userComments: [
          "Excelente para o verão.",
          "Sabor refrescante.",
          "Ótima para festas."
      ]
  },
  { 
      id: 17, 
      name: 'Corona Extra Beer', 
      price: 8.99, 
      image: `${process.env.PUBLIC_URL}/img/products/corona.jpg`,
      productionYear: 2022,
      imported: true,
      specifications: "Cerveja leve e refrescante com toque cítrico.",
      userComments: [
          "Ótima com limão!",
          "Refrescante e saborosa.",
          "Perfeita para dias quentes."
      ]
  },
  { 
      id: 18, 
      name: 'Budweiser Lager Beer', 
      price: 6.99, 
      image: `${process.env.PUBLIC_URL}/img/products/budweiser.jpg`,
      productionYear: 2021,
      imported: false,
      specifications: "Cerveja americana clássica com sabor encorpado.",
      userComments: [
          "Sabor suave.",
          "Ótima para churrascos.",
          "Cerveja clássica e acessível."
      ]
  },
  { 
      id: 19, 
      name: 'Guinness Draught', 
      price: 9.99, 
      image: `${process.env.PUBLIC_URL}/img/products/guiness.jpg`,
      productionYear: 2021,
      imported: true,
      specifications: "Cerveja stout com sabor de café e chocolate.",
      userComments: [
          "Sabor intenso e encorpado.",
          "A melhor cerveja para quem gosta de algo mais forte.",
          "Inigualável em sabor."
      ]
  },
  { 
      id: 20, 
      name: 'Stella Artois', 
      price: 7.49, 
      image: `${process.env.PUBLIC_URL}/img/products/stella.jpg`,
      productionYear: 2021,
      imported: true,
      specifications: "Cerveja belga clássica com sabor suave e refrescante.",
      userComments: [
          "Ótima para qualquer ocasião.",
          "Sabor suave e refrescante.",
          "Sempre uma boa escolha."
      ]
  }
];

export default products;
