export interface MenuItem {
  id: string;
  category: string;
  price: string;
  image: string;
  en: {
    title: string;
    description: string;
  };
  am: {
    title: string;
    description: string;
  };
}

export const menuCategories = [
  { id: 'salad', en: 'Salads', am: 'ሰላጣ' },
  { id: 'main', en: 'Main Course', am: 'ዋና ምግብ' },
  { id: 'pasta', en: 'Pasta & Lasagna', am: 'ፓስታ እና ላዛኛ' },
  { id: 'burgers', en: 'Burgers', am: 'በርገር' },
  { id: 'breakfast', en: 'Breakfast', am: 'ቁርስ' },
  { id: 'lunch', en: 'Traditional Lunch', am: 'ምሳ' },
];

export const menuData: MenuItem[] = [
  // SALAD
  {
    id: 'greek-salad',
    category: 'salad',
    price: '0.00',
    image: '/greek.webp',
    en: { title: 'Greek Salad', description: 'Lettuce, tomato, onion, Kalamata olives, feta cheese' },
    am: { title: 'ግሪክ ሰላጣ', description: 'ሰላጣ፣ ቲማቲም፣ ቀይ ሽንኩርት፣ የወይራ ፍሬ፣ ፌታ አይብ' }
  },
  {
    id: 'garden-salad',
    category: 'salad',
    price: '0.00',
    image: '/green.jpg',
    en: { title: 'Garden Salad', description: 'Lettuce, tomato, onion, shaved carrot, cucumber' },
    am: { title: 'ጋርደን ሰላጣ', description: 'ሰላጣ፣ ቲማቲም፣ ቀይ ሽንኩርት፣ ካሮት፣ ዱባ' }
  },
  {
    id: 'mixed-salad',
    category: 'salad',
    price: '0.00',
    image: '/mixed.jpg',
    en: { title: 'Mixed Salad', description: 'Fresh mixed garden vegetables' },
    am: { title: 'ሚክስድ ሰላጣ', description: 'የተቀላቀሉ አትክልቶች' }
  },
  {
    id: 'caesar-salad',
    category: 'salad',
    price: '0.00',
    image: '/caesar.jpg',
    en: { title: 'Caesar Salad', description: 'Classic Caesar Salad' },
    am: { title: 'ሴዛር ሰላጣ', description: 'ሴዛር ሰላጣ' }
  },
  {
    id: 'chicken-salad',
    category: 'salad',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Chicken Salad', description: 'Grilled chicken with fresh greens' },
    am: { title: 'የዶሮ ሰላጣ', description: 'በጥብስ ዶሮ የተዘጋጀ ሰላጣ' }
  },
  {
    id: 'tuna-salad',
    category: 'salad',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Tuna salad', description: 'Tuna flakes with garden vegetables' },
    am: { title: 'ቱና ሰላጣ', description: 'የቱና ሰላጣ ከአትክልት ጋር' }
  },

  // MAIN COURSE
  {
    id: 'beef-steak',
    category: 'main',
    price: '0.00',
    image: '/beef.avif',
    en: { title: 'Beef Steak', description: 'Premium grilled beef steak' },
    am: { title: 'ቢፍ ስቴክ', description: 'ጥሩ ጥራት ያለው የበሬ ስቴክ' }
  },
  {
    id: 'grilled-fish',
    category: 'main',
    price: '0.00',
    image: '/grilled fish.jpeg',
    en: { title: 'Grilled Fish', description: 'Freshly grilled seasonal fish' },
    am: { title: 'የተጠበሰ ዓሣ', description: 'በጥንቃቄ የተጠበሰ ዓሣ' }
  },
  {
    id: 'grilled-chicken',
    category: 'main',
    price: '0.00',
    image: '/grilled chicken.webp',
    en: { title: 'Grilled Chicken', description: 'Succulent grilled chicken' },
    am: { title: 'የተጠበሰ ዶሮ', description: 'በጥንቃቄ የተጠበሰ ዶሮ' }
  },

  // PASTA & LASAGNA
  {
    id: 'pasta-tomato',
    category: 'pasta',
    price: '0.00',
    image: '/spaghetti.jpg',
    en: { title: 'Spaghetti / Penne / Tagliatelle with Tomato Sauce', description: 'Pasta with fresh tomato sauce' },
    am: { title: 'ፓስታ በቲማቲም ሶስ', description: 'ፓስታ በቲማቲም ሶስ' }
  },
  {
    id: 'pasta-bolognese',
    category: 'pasta',
    price: '0.00',
    image: '/spaghetti bolognese.jpg',
    en: { title: 'Spaghetti / Penne / Tagliatelle Bolognese Sauce', description: 'Pasta with rich meat sauce' },
    am: { title: 'ፓስታ በቦሎኔዝ ሶስ', description: 'ፓስታ በስጋ ሶስ' }
  },
  {
    id: 'pasta-pesto',
    category: 'pasta',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Spaghetti / Penne / Tagliatelle Pesto Sauce', description: 'Pasta with fresh pesto' },
    am: { title: 'ፓስታ በፔስቶ ሶስ', description: 'ፓስታ በፔስቶ ሶስ' }
  },
  {
    id: 'pasta-cream',
    category: 'pasta',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Spaghetti / Penne / Tagliatelle Tomato-Bolognese Cream Sauce', description: 'Pasta with creamy meat and tomato sauce' },
    am: { title: 'ፓስታ በቲማቲም-ቦሎኔዝ ክሬም ሶስ', description: 'ፓስታ በክሬም ሶስ' }
  },
  {
    id: 'pasta-veg',
    category: 'pasta',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Spaghetti / Penne / Tagliatelle Vegetable Sauce', description: 'Pasta with fresh vegetable sauce' },
    am: { title: 'ፓስታ በአትክልት ሶስ', description: 'ፓስታ በአትክልት ሶስ' }
  },
  {
    id: 'lasagna',
    category: 'pasta',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Lasagna', description: 'Bolognese, cheese, and Béchamel sauce' },
    am: { title: 'ላዛኛ', description: 'ላዛኛ በቦሎኔዝ እና በቤሻሜል ሶስ' }
  },

  // BURGERS
  {
    id: 'beef-burger',
    category: 'burgers',
    price: '0.00',
    image: '/beef burgur.jpg',
    en: { title: 'Beef Burger', description: 'With lettuce, tomato, grilled onion. Side French Fries' },
    am: { title: 'ቢፍ በርገር', description: 'ሰላጣ፣ ቲማቲም፣ የተጠበሰ ሽንኩርት። ከቺፕስ ጋር' }
  },
  {
    id: 'cheeseburger',
    category: 'burgers',
    price: '0.00',
    image: '/cheese burger.jpg',
    en: { title: 'Cheeseburger', description: 'With lettuce, tomato, cheese, grilled onion. Side French Fries' },
    am: { title: 'ቺዝ በርገር', description: 'ሰላጣ፣ ቲማቲም፣ አይብ፣ የተጠበሰ ሽንኩርት። ከቺፕስ ጋር' }
  },
  {
    id: 'home-special-burger',
    category: 'burgers',
    price: '0.00',
    image: '/mitmita-burger.png',
    en: { title: 'Home Special', description: 'Our signature House Special Burger' },
    am: { title: 'ሆም ስፔሻል በርገር', description: 'የቤታችን ልዩ በርገር' }
  },

  // BREAKFAST
  {
    id: 'plain-omelet',
    category: 'breakfast',
    price: '0.00',
    image: '/bread omelette.jpg',
    en: { title: 'Plain omelet with toast bread', description: 'Simple fluffy omelet' },
    am: { title: 'ፕሌይን ኦምሌት', description: 'ኦምሌት በቶስት ዳቦ' }
  },
  {
    id: 'omelet-cheese',
    category: 'breakfast',
    price: '0.00',
    image: '/cheese omelette.jpg',
    en: { title: 'Omelet with cheese', description: 'Omelet filled with melted cheese' },
    am: { title: 'ኦምሌት በአይብ', description: 'ኦምሌት በአይብ' }
  },
  {
    id: 'egg-veg',
    category: 'breakfast',
    price: '0.00',
    image: '/egg veg.jpg',
    en: { title: 'Egg with vegetable', description: 'Scrambled eggs with fresh vegetables' },
    am: { title: 'እንቁላል በአትክልት', description: 'እንቁላል በአትክልት' }
  },
  {
    id: 'bf-tibs-firfir',
    category: 'breakfast',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Tibs Firfir', description: 'Traditional breakfast meat and injera mix' },
    am: { title: 'ጥብስ ፍርፍር', description: 'ጥብስ ፍርፍር' }
  },
  {
    id: 'normal-foul',
    category: 'breakfast',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Normal Foul', description: 'Foul with Tomato and Onion' },
    am: { title: 'ኖርማል ፉል', description: 'ፉል በቲማቲም እና ሽንኩርት' }
  },
  {
    id: 'special-foul',
    category: 'breakfast',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Special Foul', description: 'Foul with Tomato, Onion, and Egg' },
    am: { title: 'ስፔሻል ፉል', description: 'ፉል በቲማቲም፣ ሽንኩርት እና እንቁላል' }
  },

  // LUNCH
  {
    id: 'lunch-tibs-firfir',
    category: 'lunch',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Tibs Firfir', description: 'Traditional lunch meat and injera mix' },
    am: { title: 'ጥብስ ፍርፍር', description: 'ጥብስ ፍርፍር' }
  },
  {
    id: 'tibs-awaze',
    category: 'lunch',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Tibs', description: 'With or without Awaze' },
    am: { title: 'ጥብስ', description: 'በአዋዜ ወይም ያለ አዋዜ' }
  },
  {
    id: 'shiro',
    category: 'lunch',
    price: '0.00',
    image: '/shiro.avif',
    en: { title: 'Shiro', description: 'With tomato salad' },
    am: { title: 'ሽሮ', description: 'ሽሮ ከቲማቲም ሰላጣ ጋር' }
  },
  {
    id: 'firfir',
    category: 'lunch',
    price: '0.00',
    image: '/gursha-platter.png',
    en: { title: 'Firfir', description: 'Traditional injera mix' },
    am: { title: 'ፍርፍር', description: 'ፍርፍር' }
  },
];
