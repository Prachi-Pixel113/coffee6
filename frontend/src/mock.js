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
    description: "50% off all espresso drinks every weekday from 2-4 PM",
    validUntil: "2024-12-31",
    discount: "50%",
    type: "time-based",
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    title: "Buy 10, Get 1 Free",
    description: "Loyalty card program for all hot beverages",
    validUntil: "ongoing",
    discount: "Free",
    type: "loyalty",
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    title: "Weekend Brunch Deal",
    description: "Coffee + pastry combo for just $8.99 on weekends",
    validUntil: "2024-12-31",
    discount: "$8.99",
    type: "combo",
    image: "/api/placeholder/400/300"
  },
  {
    id: 4,
    title: "Student Discount",
    description: "20% off with valid student ID",
    validUntil: "ongoing",
    discount: "20%",
    type: "student",
    image: "/api/placeholder/400/300"
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
          image: "/api/placeholder/300/200"
        },
        {
          id: 2,
          name: "Cappuccino",
          description: "Equal parts espresso, steamed milk, and foam",
          price: 4.25,
          image: "/api/placeholder/300/200"
        },
        {
          id: 3,
          name: "Caffe Latte",
          description: "Smooth espresso with steamed milk and light foam",
          price: 4.75,
          image: "/api/placeholder/300/200"
        },
        {
          id: 4,
          name: "Americano",
          description: "Espresso shots with hot water for a clean taste",
          price: 3.50,
          image: "/api/placeholder/300/200"
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
          image: "/api/placeholder/300/200"
        },
        {
          id: 6,
          name: "Cold Brew",
          description: "Smooth, slow-steeped coffee concentrate",
          price: 4.25,
          image: "/api/placeholder/300/200"
        },
        {
          id: 7,
          name: "Iced Latte",
          description: "Espresso with cold milk over ice",
          price: 4.75,
          image: "/api/placeholder/300/200"
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
          image: "/api/placeholder/300/200"
        },
        {
          id: 9,
          name: "Blueberry Muffin",
          description: "Fresh baked with wild blueberries",
          price: 2.95,
          image: "/api/placeholder/300/200"
        },
        {
          id: 10,
          name: "Chocolate Chip Cookie",
          description: "Homemade with premium chocolate chips",
          price: 2.50,
          image: "/api/placeholder/300/200"
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