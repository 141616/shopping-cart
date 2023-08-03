const products = [
  {
    availableSizes: ["X", "L", "XL", "XXL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "14/15 s/nº",
    id: 0,
    installments: 9,
    isFreeShipping: true,
    price: 10.9,
    sku: 8552515751438644,
    style: "White T-shirt",
    title: "Cropped Stay Groovy off white",
  },
  {
    availableSizes: ["X", "ML", "L"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "",
    id: 11,
    installments: 3,
    isFreeShipping: true,
    price: 13.25,
    sku: 39876704341265610,
    style: "Wine",
    title: "Basic Cactus White T-shirt",
  },
  {
    availableSizes: ["XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "14/15 s/nº - Jogador",
    id: 4,
    installments: 12,
    isFreeShipping: false,
    price: 25.9,
    sku: 9197907543445676,
    style: "Tony Hawk",
    title: "Skater Black Sweatshirt",
  },
  {
    availableSizes: ["M", "ML"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "",
    id: 13,
    installments: 5,
    isFreeShipping: true,
    price: 29.45,
    sku: 51498472915966370,
    style: "Tule",
    title: "Black Tule Oversized",
  },
  {
    availableSizes: ["S", "XS"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "4 MSL",
    id: 12,
    installments: 9,
    isFreeShipping: true,
    price: 10.9,
    sku: 12064273040195392,
    style: "Really Cool T-shirt",
    title: "Black Batman T-shirt",
  },
  {
    availableSizes: ["X", "L", "XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "GPX Poly 1",
    id: 14,
    installments: 3,
    isFreeShipping: true,
    price: 9,
    sku: 10686354557628304,
    style: "Mark Zuck have 365 of this one",
    title: "Blue T-Shirt",
  },
  {
    availableSizes: ["X", "L", "XL", "XXL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "Treino 2014",
    id: 15,
    installments: 5,
    isFreeShipping: true,
    price: 14,
    sku: 11033926921508488,
    style: "",
    title: "Loose Black T-shirt",
  },
  {
    availableSizes: ["X", "L", "XL", "XXL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "14/15 s/nº",
    id: 1,
    installments: 9,
    isFreeShipping: true,
    price: 10.9,
    sku: 18644119330491310,
    style: "White T-shirt",
    title: "Ringer Hall Pass",
  },
  {
    availableSizes: ["X", "L"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "14/15 s/nº",
    id: 2,
    installments: 7,
    isFreeShipping: true,
    price: 14.9,
    sku: 11854078013954528,
    style: "You will like this one",
    title: "Grey T-shirt",
  },
  {
    availableSizes: ["X", "L"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "2014 s/nº",
    id: 3,
    installments: 7,
    isFreeShipping: true,
    price: 14.9,
    sku: 876661122392077,
    style: "Adidas originals",
    title: "Black T-shirt with white stripes",
  },
  {
    availableSizes: ["X", "L", "XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "14/15 + Camiseta 1º Mundial",
    id: 5,
    installments: 9,
    isFreeShipping: false,
    price: 10.9,
    sku: 10547961582846888,
    style: "Cowabunga!",
    title: "Turtles Ninja T-shirt",
  },
  {
    availableSizes: ["XL", "XXL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "T-shirt 13/14",
    id: 6,
    installments: 0,
    isFreeShipping: true,
    price: 49.9,
    sku: 6090484789343891,
    style: "When you wish well",
    title: "Slim black T-shirt",
  },
  {
    availableSizes: ["S"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "1977 Infantil",
    id: 7,
    installments: 4,
    isFreeShipping: true,
    price: 22.5,
    sku: 18532669286405344,
    style: "Very comfy",
    title: "Blue Sweatshirt",
  },
  {
    availableSizes: ["XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "",
    id: 8,
    installments: 4,
    isFreeShipping: false,
    price: 18.7,
    sku: 5619496040738316,
    style: "Girl the future is all your",
    title: "White T-shirt Gucci",
  },
  {
    availableSizes: ["L", "XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "",
    id: 9,
    installments: 5,
    isFreeShipping: true,
    price: 134.9,
    sku: 11600983276356164,
    style: "",
    title: "Tropical Wine T-shirt",
  },
  {
    availableSizes: ["L", "XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "",
    id: 10,
    installments: 9,
    isFreeShipping: true,
    price: 49,
    sku: 27250082398145996,
    style: "",
    title: "Marine Blue T-shirt",
  },
];

const imageList = {
  8552515751438644: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644-1-product.b6128dd1df3de552cf1b.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644-2-product.6df01508d4cdad361b39.webp",
  },
  39876704341265610: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610-1-product.1f07d5fa94ed8584c756.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610-2-product.3235f492c13172fce85d.webp",
  },
  9197907543445676: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/9197907543445676-1-product.25f42b6c504af11cc71c.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/9197907543445676-2-product.10edcb56f4de9c30cdc9.webp",
  },
  51498472915966370: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370-1-product.e53dc0babb7b44f7e40e.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370-2-product.e0df7a2ffcefb9cb78dc.webp",
  },
  12064273040195392: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392-1-product.85191f0d6e809687fe4a.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392-2-product.71724fe50e92c9279519.webp",
  },
  10686354557628304: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304-1-product.00bf8ca2603352e0cfad.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304-2-product.fea1f2b89e7733b96b38.webp",
  },
  11033926921508488: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488-1-product.e80b2a0ba8e1d1c30095.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488-2-product.708970a88ed8cbf1921e.webp",
  },
  18644119330491310: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/18644119330491310-1-product.3ab8c5301302c1f8add4.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/18644119330491310-2-product.0407433696869d3a2dbf.webp",
  },
  11854078013954528: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528-1-product.e540be53e59461e648c8.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528-2-product.11fc624a0057dbbafcdb.webp",
  },
  876661122392077: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077-1-product.8c566b01d48c7b6964f0.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077-2-product.fdcfc2361538ab8da20a.webp",
  },
  10547961582846888: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/10547961582846888-1-product.76c02f8ee37e439fad3b.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/10547961582846888-2-product.e13582db1e9abd8e34b5.webp",
  },
  6090484789343891: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/6090484789343891-1-product.71fc50c019740fbf7e8e.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/6090484789343891-2-product.561147fd95b56af83742.webp",
  },
  18532669286405344: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344-1-product.7cde472a672f1f3412aa.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344-2-product.783be0ba5d624b65b697.webp",
  },
  5619496040738316: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/5619496040738316-1-product.f8e172dd538635d22ef8.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/5619496040738316-2-product.eacb81485e73d2239281.webp",
  },
  11600983276356164: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164-1-product.e4dadda2c10e5e458cce.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164-2-product.5c2a80784aba6e84c493.webp",
  },
  27250082398145996: {
    front:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996-1-product.1dd6d87d61bfdb92f787.webp",
    back: "https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996-2-product.f5b4fed52ecbfa0f4234.webp",
  },
};

const MOCK_PRODUCTS = products.map((prod) => {
  return {
    ...prod,
    ...((imageList as any)[prod.sku] || {}),
  };
});

export default MOCK_PRODUCTS;
