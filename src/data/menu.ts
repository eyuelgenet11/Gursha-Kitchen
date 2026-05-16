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
  { id: 'pasta', en: 'Pasta', am: 'ፓስታ' },
  { id: 'lasagna', en: 'Lasagna', am: 'ላዛኛ' },
  { id: 'salad', en: 'Salads', am: 'ሰላጣ' },
  { id: 'breakfast', en: 'Breakfast', am: 'ቁርስ' },
  { id: 'pizza', en: 'Pizza', am: 'ፒዛ' },
  { id: 'grill', en: 'Burger, Steak, Grilled', am: 'በርገር፣ ስቴክ እና ግሪል' },
  { id: 'traditional', en: 'Traditional', am: 'ባህላዊ ምግቦች' },
  { id: 'drinks', en: 'Drinks', am: 'መጠጦች' },
];

export const menuData: MenuItem[] = [
  // PASTA & LASAGNA
  {
    id: 'signature-pomodoro',
    category: 'pasta',
    price: '0.00',
    image: '/spaghetti.jpg',
    en: { title: 'Signature Pomodoro', description: 'Spaghetti / Penne / Tagliatelle with fresh tomato sauce' },
    am: { title: 'ሲግኔቸር ፖሞዶሮ', description: 'ፓስታ በቲማቲም ሶስ' }
  },
  {
    id: 'slow-cooked-bolognese',
    category: 'pasta',
    price: '0.00',
    image: '/spaghetti bolognese.jpg',
    en: { title: 'Slow-Cooked Bolognese', description: 'Spaghetti / Penne / Tagliatelle with rich meat sauce' },
    am: { title: 'ስሎው ኩክድ ቦሎኔዝ', description: 'ፓስታ በስጋ ሶስ' }
  },
  {
    id: 'fresh-basil-pesto',
    category: 'pasta',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Fresh Basil Pesto', description: 'Spaghetti / Penne / Tagliatelle with fresh pesto' },
    am: { title: 'ፍሬሽ ባሲል ፔስቶ', description: 'ፓስታ በፔስቶ ሶስ' }
  },
  {
    id: 'creamy-rose-bolognese',
    category: 'pasta',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Creamy Rosé Bolognese', description: 'Spaghetti / Penne / Tagliatelle with creamy meat and tomato sauce' },
    am: { title: 'ክሪሚ ሮዝ ቦሎኔዝ', description: 'ፓስታ በክሬም ሶስ' }
  },
  {
    id: 'garden-medley-sauce',
    category: 'pasta',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Garden Medley Sauce', description: 'Spaghetti / Penne / Tagliatelle with fresh vegetable sauce' },
    am: { title: 'ጋርደን ሜድሊ ሶስ', description: 'ፓስታ በአትክልት ሶስ' }
  },
  {
    id: 'gursha-lasagna',
    category: 'lasagna',
    price: '0.00',
    image: '/tibbs.webp',
    en: { 
      title: 'The Gursha Lasagna', 
      description: 'Layers of slow-cooked Bolognese, melted artisan cheese, and our signature creamy Béchamel sauce.' 
    },
    am: { title: 'የጉርሻ ላዛኛ', description: 'ላዛኛ በቦሎኔዝ እና በቤሻሜል ሶስ' }
  },

  // SALAD
  {
    id: 'greek-salad',
    category: 'salad',
    price: '0.00',
    image: '/greek.webp',
    en: { title: 'Greek salad', description: 'Lettuce, tomato, onion, Kalamata olives, feta cheese' },
    am: { title: 'ግሪክ ሰላጣ', description: 'ሰላጣ፣ ቲማቲም፣ ቀይ ሽንኩርት፣ የወይራ ፍሬ፣ ፌታ አይብ' }
  },
  {
    id: 'garden-salad',
    category: 'salad',
    price: '0.00',
    image: '/green.jpg',
    en: { title: 'Garden salad', description: 'Lettuce, tomato, onion, shaved carrot, cucumber' },
    am: { title: 'ጋርደን ሰላጣ', description: 'ሰላጣ፣ ቲማቲም፣ ቀይ ሽንኩርት፣ ካሮት፣ ዱባ' }
  },
  {
    id: 'mixed-salad',
    category: 'salad',
    price: '0.00',
    image: '/mixed.jpg',
    en: { title: 'Mixed salad', description: 'Fresh mixed garden vegetables' },
    am: { title: 'ሚክስድ ሰላጣ', description: 'የተቀላቀሉ አትክልቶች' }
  },
  {
    id: 'caesar-salad',
    category: 'salad',
    price: '0.00',
    image: '/caesar.jpg',
    en: { title: 'Caesar salad', description: 'Classic Caesar Salad' },
    am: { title: 'ሴዛር ሰላጣ', description: 'ሴዛር ሰላጣ' }
  },
  {
    id: 'chicken-salad',
    category: 'salad',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Chicken salad', description: 'Grilled chicken with fresh greens' },
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

  // BREAKFAST
  {
    id: 'omelet-toast',
    category: 'breakfast',
    price: '0.00',
    image: '/bread omelette.jpg',
    en: { title: 'Omelet with Toast', description: 'Simple fluffy omelet with toast bread' },
    am: { title: 'ኦምሌት በቶስት', description: 'ኦምሌት በቶስት ዳቦ' }
  },
  {
    id: 'omelet-cheese',
    category: 'breakfast',
    price: '0.00',
    image: '/cheese omelette.jpg',
    en: { title: 'Omelet with Cheese', description: 'Omelet filled with melted cheese' },
    am: { title: 'ኦምሌት በአይብ', description: 'ኦምሌት በአይብ' }
  },
  {
    id: 'eggs-vegetables',
    category: 'breakfast',
    price: '0.00',
    image: '/egg veg.jpg',
    en: { title: 'Eggs with Vegetables', description: 'Scrambled eggs with fresh vegetables' },
    am: { title: 'እንቁላል በአትክልት', description: 'እንቁላል በአትክልት' }
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

  // PIZZA
  {
    id: 'pizza-margherita',
    category: 'pizza',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Margherita', description: 'Classic tomato and cheese' },
    am: { title: 'ማርጋሪታ', description: 'ክላሲክ ቲማቲም እና አይብ' }
  },
  {
    id: 'pizza-tuna',
    category: 'pizza',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Tuna', description: 'Tuna and cheese' },
    am: { title: 'የቱና ፒዛ', description: 'የቱና እና አይብ ፒዛ' }
  },
  {
    id: 'pizza-fasting',
    category: 'pizza',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Fasting', description: 'Vegan pizza with vegetables' },
    am: { title: 'የፆም ፒዛ', description: 'የፆም ፒዛ በአትክልት' }
  },
  {
    id: 'pizza-special',
    category: 'pizza',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Gursha Special', description: 'Our house special pizza' },
    am: { title: 'ጉርሻ ልዩ ፒዛ', description: 'የቤታችን ልዩ ፒዛ' }
  },

  // BURGER, STEAK, GRILLED
  {
    id: 'beef-burger',
    category: 'grill',
    price: '0.00',
    image: '/beef burger.jpg',
    en: { title: 'Beef Burger', description: 'With lettuce, tomato, grilled onion. Side crispy fries' },
    am: { title: 'ቢፍ በርገር', description: 'ሰላጣ፣ ቲማቲም፣ የተጠበሰ ሽንኩርት። ከቺፕስ ጋር' }
  },
  {
    id: 'cheeseburger',
    category: 'grill',
    price: '0.00',
    image: '/cheese burger.jpg',
    en: { title: 'Cheeseburger', description: 'With lettuce, tomato, cheese, grilled onion. Side crispy fries' },
    am: { title: 'ቺዝ በርገር', description: 'ሰላጣ፣ ቲማቲም፣ አይብ፣ የተጠበሰ ሽንኩርት። ከቺፕስ ጋር' }
  },
  {
    id: 'beef-steak',
    category: 'grill',
    price: '0.00',
    image: '/beef.avif',
    en: { title: 'Beef Steak', description: 'Premium grilled beef steak' },
    am: { title: 'ቢፍ ስቴክ', description: 'ጥሩ ጥራት ያለው የበሬ ስቴክ' }
  },
  {
    id: 'grilled-fish',
    category: 'grill',
    price: '0.00',
    image: '/grilled fish.jpeg',
    en: { title: 'Grilled Fish', description: 'Freshly grilled seasonal fish' },
    am: { title: 'የተጠበሰ ዓሣ', description: 'በጥንቃቄ የተጠበሰ ዓሣ' }
  },
  {
    id: 'grilled-chicken',
    category: 'grill',
    price: '0.00',
    image: '/grilled chicken.webp',
    en: { title: 'Grilled Chicken', description: 'Succulent grilled chicken' },
    am: { title: 'የተጠበሰ ዶሮ', description: 'በጥንቃቄ የተጠበሰ ዶሮ' }
  },

  // TRADITIONAL
  {
    id: 'tibs-firfir',
    category: 'traditional',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Tibs Firfir', description: 'Traditional meat and injera mix' },
    am: { title: 'ጥብስ ፍርፍር', description: 'ጥብስ ፍርፍር' }
  },
  {
    id: 'tibs-awaze',
    category: 'traditional',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Tibs (With Awaze)', description: 'With or without Awaze' },
    am: { title: 'ጥብስ (በአዋዜ)', description: 'በአዋዜ ወይም ያለ አዋዜ' }
  },
  {
    id: 'shiro-tomato',
    category: 'traditional',
    price: '0.00',
    image: '/shiro.avif',
    en: { title: 'Shiro With tomato salad', description: 'Traditional shiro with fresh tomato salad' },
    am: { title: 'ሽሮ ከቲማቲም ሰላጣ ጋር', description: 'ሽሮ ከቲማቲም ሰላጣ ጋር' }
  },
  {
    id: 'firfir',
    category: 'traditional',
    price: '0.00',
    image: '/gursha-platter.png',
    en: { title: 'Firfir', description: 'Traditional injera mix' },
    am: { title: 'ፍርፍር', description: 'ፍርፍር' }
  },

  // DRINKS
  {
    id: 'tea',
    category: 'drinks',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Tea', description: 'Freshly brewed tea' },
    am: { title: 'ሻይ', description: 'ሻይ' }
  },
  {
    id: 'coffee',
    category: 'drinks',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Coffee', description: 'Traditional Ethiopian coffee' },
    am: { title: 'ቡና', description: 'ቡና' }
  },
  {
    id: 'water',
    category: 'drinks',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Water', description: 'Mineral water' },
    am: { title: 'ውሃ', description: 'ውሃ' }
  },
  {
    id: 'juice',
    category: 'drinks',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Juice', description: 'Fresh fruit juice' },
    am: { title: 'ጁስ', description: 'ጁስ' }
  },
  {
    id: 'soft-drinks',
    category: 'drinks',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Soft Drinks', description: 'Assorted soft drinks' },
    am: { title: 'ለስላሳ መጠጦች', description: 'ለስላሳ መጠጦች' }
  },
  {
    id: 'wine',
    category: 'drinks',
    price: '0.00',
    image: '/tibbs.webp',
    en: { title: 'Wine', description: 'Selected wines' },
    am: { title: 'ወይን', description: 'ወይን' }
  }
];
