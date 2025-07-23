// Mock data for Brew Haven Coffee Shop

export const heroData = {
  title: "Welcome to Brew Haven",
  subtitle: "Where Every Cup Tells a Story",
  description: "Discover the perfect blend of premium coffee beans, artisanal brewing methods, and cozy atmosphere. Your journey to coffee perfection starts here.",
  cta: "Explore Our Menu",
  backgroundImage: "/api/placeholder/1200/600"
};

export const aboutData = {
  title: "Our Story",
  subtitle: "Brewing Excellence Since 2015",
  description: "At Brew Haven, we believe that great coffee brings people together. What started as a small roastery has grown into a beloved community hub where coffee lovers gather to enjoy expertly crafted beverages and connect with friends.",
  mission: "To source the finest coffee beans from around the world and transform them into memorable experiences for our customers.",
  values: [
    {
      title: "Quality First",
      description: "We source only the highest grade coffee beans and use artisanal brewing methods."
    },
    {
      title: "Community Focus", 
      description: "We're more than a coffee shop - we're a gathering place for our neighborhood."
    },
    {
      title: "Sustainability",
      description: "We work directly with farmers and support environmentally friendly practices."
    }
  ]
};

export const offersData = [
  {
    id: 1,
    title: "Happy Hour Special",
    description: "50% off all espresso drinks every weekday from 2-4 PM. Perfect time to treat yourself to premium coffee at an amazing price!",
    validUntil: "2024-12-31",
    discount: "50%",
    type: "time-based",
    image: "https://images.unsplash.com/photo-1612509590595-785e974ed690?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBlc3ByZXNzb3xlbnwwfHx8fDE3NTMyNTMyODN8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 2,
    title: "Buy 10, Get 1 Free",
    description: "Loyalty card program for all hot beverages. Build lasting relationships with us while enjoying your favorite coffee regularly.",
    validUntil: "ongoing",
    discount: "Free",
    type: "loyalty",
    image: "https://images.unsplash.com/photo-1524686788093-aa1f9c0f7c4f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBlc3ByZXNzb3xlbnwwfHx8fDE3NTMyNTMyODN8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    title: "Weekend Brunch Deal",
    description: "Coffee + pastry combo for just $8.99 on weekends. The perfect combination to start your relaxing weekend morning right.",
    validUntil: "2024-12-31",
    discount: "$8.99",
    type: "combo",
    image: "https://images.unsplash.com/photo-1622744527656-8ca8ae3ac038?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBicnVuY2h8ZW58MHx8fHwxNzUzMjUzMjkwfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 4,
    title: "Student Discount",
    description: "20% off with valid student ID. Supporting students with quality coffee to fuel their studies and academic success.",
    validUntil: "ongoing",
    discount: "20%",
    type: "student",
    image: "https://images.unsplash.com/photo-1655248762702-321fa572a2ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicnVuY2h8ZW58MHx8fHwxNzUzMjUzMjkwfDA&ixlib=rb-4.1.0&q=85"
  }
];

export const menuData = {
  categories: [
    {
      id: 1,
      name: "Hot Beverages",
      items: [
        {
          id: 1,
          name: "Classic Espresso",
          description: "Rich, bold shot of pure coffee perfection",
          price: 2.50,
          image: "https://images.unsplash.com/photo-1596018589878-217d8603c4c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxsYXR0ZSUyMGFydHxlbnwwfHx8fDE3NTMxNTk2Njh8MA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 2,
          name: "Cappuccino",
          description: "Equal parts espresso, steamed milk, and foam",
          price: 4.25,
          image: "https://images.unsplash.com/photo-1534778101976-62847782c213?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vfGVufDB8fHx8MTc1MzE2MDUxOXww&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 3,
          name: "Caffe Latte",
          description: "Smooth espresso with steamed milk and light foam",
          price: 4.75,
          image: "https://images.unsplash.com/photo-1531441802565-2948024f1b22?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydHxlbnwwfHx8fDE3NTMxNTk2Njh8MA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 4,
          name: "Americano",
          description: "Espresso shots with hot water for a clean taste",
          price: 3.50,
          image: "https://images.unsplash.com/photo-1473923377535-0002805f57e8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxjYXBwdWNjaW5vfGVufDB8fHx8MTc1MzE2MDUxOXww&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 11,
          name: "Mocha",
          description: "Rich espresso with steamed milk and chocolate syrup",
          price: 5.25,
          image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxjYXBwdWNjaW5vfGVufDB8fHx8MTc1MzE2MDUxOXww&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 12,
          name: "Macchiato",
          description: "Espresso marked with a dollop of steamed milk foam",
          price: 4.50,
          image: "https://images.unsplash.com/photo-1531441802565-2948024f1b22?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydHxlbnwwfHx8fDE3NTMxNTk2Njh8MA&ixlib=rb-4.1.0&q=85"
        }
      ]
    },
    {
      id: 2,
      name: "Cold Beverages",
      items: [
        {
          id: 5,
          name: "Iced Coffee",
          description: "Refreshing cold brew served over ice",
          price: 3.75,
          image: "https://images.unsplash.com/photo-1534414671319-4fc58cc112e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjBkcmlua3N8ZW58MHx8fHwxNzUzMTYwNTExfDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 6,
          name: "Cold Brew",
          description: "Smooth, slow-steeped coffee concentrate",
          price: 4.25,
          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxjb2ZmZWV8ZW58MHx8fHwxNzUzMTU5Njc0fDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 7,
          name: "Iced Latte",
          description: "Espresso with cold milk over ice",
          price: 4.75,
          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBkcmlua3N8ZW58MHx8fHwxNzUzMTYwNTExfDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 13,
          name: "Frappuccino",
          description: "Blended iced coffee with milk and ice",
          price: 5.50,
          image: "https://images.unsplash.com/photo-1534414671319-4fc58cc112e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjBkcmlua3N8ZW58MHx8fHwxNzUzMTYwNTExfDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 14,
          name: "Nitro Coffee",
          description: "Cold brew infused with nitrogen for a creamy texture",
          price: 4.95,
          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBkcmlua3N8ZW58MHx8fHwxNzUzMTYwNTExfDA&ixlib=rb-4.1.0&q=85"
        }
      ]
    },
    {
      id: 3,
      name: "Pastries & Snacks",
      items: [
        {
          id: 8,
          name: "Croissant",
          description: "Buttery, flaky French pastry",
          price: 3.25,
          image: "https://images.unsplash.com/photo-1691480162735-9b91238080f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnR8ZW58MHx8fHwxNzUzMTYwNTUxfDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 9,
          name: "Blueberry Muffin",
          description: "Fresh baked with wild blueberries",
          price: 2.95,
          image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtdWZmaW58ZW58MHx8fHwxNzUzMTYwNTU5fDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 10,
          name: "Chocolate Chip Cookie",
          description: "Homemade with premium chocolate chips",
          price: 2.50,
          image: "https://images.unsplash.com/photo-1578632398050-cccbc1461ab9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxtdWZmaW58ZW58MHx8fHwxNzUzMTYwNTU5fDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 15,
          name: "Pain au Chocolat",
          description: "Classic French pastry with rich chocolate filling",
          price: 3.75,
          image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxwYXN0cnl8ZW58MHx8fHwxNzUzMTYwNTcwfDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 16,
          name: "Almond Croissant",
          description: "Buttery croissant filled with sweet almond cream",
          price: 4.25,
          image: "https://images.unsplash.com/photo-1623334044303-241021148842?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjcm9pc3NhbnR8ZW58MHx8fHwxNzUzMTYwNTUxfDA&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 17,
          name: "Danish Pastry",
          description: "Flaky pastry with your choice of fruit or cream filling",
          price: 3.50,
          image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtdWZmaW58ZW58MHx8fHwxNzUzMTYwNTU5fDA&ixlib=rb-4.1.0&q=85"
        }
      ]
    },
    {
      id: 4,
      name: "Specialty Drinks",
      items: [
        {
          id: 18,
          name: "Chai Latte",
          description: "Spiced tea blend with steamed milk and honey",
          price: 4.50,
          image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxjYXBwdWNjaW5vfGVufDB8fHx8MTc1MzE2MDUxOXww&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 19,
          name: "Hot Chocolate",
          description: "Rich, creamy chocolate with whipped cream",
          price: 3.75,
          image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxjYXBwdWNjaW5vfGVufDB8fHx8MTc1MzE2MDUxOXww&ixlib=rb-4.1.0&q=85"
        },
        {
          id: 20,
          name: "Matcha Latte",
          description: "Premium Japanese green tea with steamed milk",
          price: 5.25,
          image: "https://images.unsplash.com/photo-1534778101976-62847782c213?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vfGVufDB8fHx8MTc1MzE2MDUxOXww&ixlib=rb-4.1.0&q=85"
        }
      ]
    }
  ]
};

export const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    content: "The best coffee in the city! The atmosphere is perfect for working and the staff is incredibly friendly.",
    rating: 5,
    image: "/api/placeholder/80/80"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Coffee Enthusiast",
    content: "I've tried coffee shops all over the world, and Brew Haven consistently delivers exceptional quality.",
    rating: 5,
    image: "/api/placeholder/80/80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Local Resident",
    content: "This place has become my second home. Great coffee, great people, great vibes!",
    rating: 5,
    image: "/api/placeholder/80/80"
  }
];

export const shopInfoData = {
  address: "123 Coffee Street, Downtown, City 12345",
  phone: "(123) 456-7890",
  email: "hello@brewhaven.com",
  hours: {
    monday: "6:00 AM - 8:00 PM",
    tuesday: "6:00 AM - 8:00 PM", 
    wednesday: "6:00 AM - 8:00 PM",
    thursday: "6:00 AM - 8:00 PM",
    friday: "6:00 AM - 8:00 PM",
    saturday: "7:00 AM - 9:00 PM",
    sunday: "8:00 AM - 6:00 PM"
  }
};