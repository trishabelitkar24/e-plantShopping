const photo = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

export const plantCategories = [
  {
    id: "aromatic",
    title: "Aromatic Plants",
    subtitle: "Natural fragrance and a little calm for every corner.",
    plants: [
      { id: "lavender", name: "English Lavender", price: 499, description: "Fragrant purple blooms that bring a soothing feel to sunny spaces.", image: photo("photo-1499002238440-d264edd596ec") },
      { id: "rosemary", name: "Rosemary", price: 349, description: "A beautifully scented herb with needle-like evergreen leaves.", image: photo("photo-1515586000433-45406d8e6662") },
      { id: "mint", name: "Peppermint", price: 249, description: "Fresh, bright green leaves with a crisp and refreshing aroma.", image: photo("photo-1628556270448-4d4e4148e1b1") },
      { id: "jasmine", name: "Jasmine", price: 599, description: "Delicate star-shaped flowers known for their sweet fragrance.", image: photo("photo-1490750967868-88aa4486c946") },
      { id: "lemongrass", name: "Lemongrass", price: 299, description: "An easy-care tropical grass with a fresh citrus scent.", image: photo("photo-1501004318641-b39e6451bec6") },
      { id: "thyme", name: "Garden Thyme", price: 279, description: "A compact aromatic herb with tiny leaves and a warm scent.", image: photo("photo-1466692476868-aef1dfb1e735") }
    ]
  },
  {
    id: "medicinal",
    title: "Medicinal Plants",
    subtitle: "Thoughtful greenery traditionally valued in home gardens.",
    plants: [
      { id: "aloe", name: "Aloe Vera", price: 299, description: "A sculptural succulent with fleshy, water-storing leaves.", image: photo("photo-1509423350716-97f9360b4e09") },
      { id: "tulsi", name: "Holy Basil (Tulsi)", price: 199, description: "A much-loved aromatic plant for a sunny windowsill.", image: photo("photo-1618164436241-4473940d1f5c") },
      { id: "neem", name: "Dwarf Neem", price: 449, description: "A young neem plant with delicate compound foliage.", image: photo("photo-1485955900006-10f4d324d411") },
      { id: "brahmi", name: "Brahmi", price: 229, description: "A low-growing, moisture-loving plant with rounded leaves.", image: photo("photo-1509423350716-97f9360b4e09") },
      { id: "giloy", name: "Giloy", price: 259, description: "A climbing tropical vine that adds a lush green touch.", image: photo("photo-1497250681960-ef046c08a56e") },
      { id: "lemonginger", name: "Ginger Plant", price: 329, description: "A leafy tropical plant that grows well in warm conditions.", image: photo("photo-1501004318641-b39e6451bec6") }
    ]
  },
  {
    id: "indoor",
    title: "Indoor & Airy Greens",
    subtitle: "Easy-going statement plants to make your home feel alive.",
    plants: [
      { id: "monstera", name: "Monstera Deliciosa", price: 899, description: "Iconic split leaves make this tropical beauty a bold focal point.", image: photo("photo-1614594975525-e45190c55d0b") },
      { id: "snake", name: "Snake Plant", price: 499, description: "Upright architectural leaves and a forgiving nature.", image: photo("photo-1593691509543-c55fb32e5cee") },
      { id: "pothos", name: "Golden Pothos", price: 349, description: "Trailing heart-shaped leaves that brighten shelves and corners.", image: photo("photo-1600411832986-5a4471b1b1b1") },
      { id: "zz", name: "ZZ Plant", price: 699, description: "Glossy, deep-green foliage for low-maintenance styling.", image: photo("photo-1597055181300-e3633a917c3a") },
      { id: "peace", name: "Peace Lily", price: 599, description: "Elegant leaves and graceful white blooms in soft light.", image: photo("photo-1593482892290-f54927ae2b3a") },
      { id: "rubber", name: "Rubber Plant", price: 749, description: "Large glossy leaves create a rich, sculptural silhouette.", image: photo("photo-1509423350716-97f9360b4e09") }
    ]
  }
];
