
import { ShoppingBag, Users, ChartSpline } from "lucide-react";

// No imports needed! Next.js serves the 'public' folder at the root '/'
export const ASSETS = {
    hero_img: "/hero.png",
    avatar_1: "/avatar_1.png",
    avatar_2: "/avatar_2.png",
    avatar_3: "/avatar_3.png",
    banner: "/banner.png",
    banner_countdown: "/banner_countdown.png",
    user_logo: "/user.png",
    store_1_logo: "/store_1_logo.png",
    store_2_logo: "/store_2_logo.png",
    // Products
    p1_1: "/product_1_1.png",
    p1_2: "/product_1_2.png",
    p1_3: "/product_1_3.png",
    p1_4: "/product_1_4.png",
    p2: "/product_2.png",
    p3: "/product_3.png",
    p4: "/product_4.png",
    p5: "/product_5.png",
    p6: "/product_6.png",
    p7: "/product_7.png",
    p8: "/product_8.png",
    p9: "/product_9.png",
    p10: "/product_10.png",
    p11: "/product_11.png",
    p12: "/product_12.png",
    p13: "/product_13.png",
    p14: "/product_14.png",
    p15: "/product_15.png",
    p16: "/product_16.png",
    p17: "/product_17.png",
    p18: "/product_18.png",
    p19: "/product_19.png",
    p20: "/product_20.png",
};

export const THEMES = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave',
  'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua',
  'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula',
  'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter',
];


export const CATEGORIES = ["Women", "Men", "Teens", "Kids"];


  export const STATS = [
  {
    id: 1,
    title: "Active Sellers",
    value: "10k+",
    desc: "Independent artisans",
    color: "text-primary",
    icon: <Users className="h-8 w-8" />, 
  },
  {
    id: 2,
    title: "Products Sold",
    value: "48.6K",
    desc: "This month",
    color: "text-secondary",
    icon: <ChartSpline className="h-8 w-8" />, 
  },
  {
    id: 3,
    title: "Happy Customers",
    value: "18.2K",
    desc: "4.9/5 average rating",
    color: "text-secondary",
    type: "avatars",
    avatars: [
      ASSETS.avatar_1, 
      ASSETS.avatar_2, 
      ASSETS.avatar_3
    ],
    placeholder: "+99",
  },
];



// 1. STORE DATA
export const STORE_DATA = {
    id: "store_01",
    userId: "user_owner_01",
    name: "StyleVibe Fashion",
    username: "stylevibe_fashion",
    description: "Premium fashion pieces for the entire family.",
    logo: ASSETS.store_1_logo,
    status: "approved",
    isActive: true,
    email: "support@stylevibe.com",
    contact: "+1 888 STYLE 777",
    createdAt: "2025-01-15T12:00:00Z",
    address: "123 Fashion Street, New York, NY 10001",
    user: { name: "StyleVibe Fashion Co", email: "owner@stylevibe.com", image: ASSETS.user_logo },
};

export const RATINGS_DATA = [
    { 
        id: "rat_01", 
        rating: 4.5, 
        review: "Absolutely love the fit and comfort!", 
        user: { name: 'Sarah Anderson', image: ASSETS.user_logo }, 
        productId: "prod_02", // Matches PRODUCTS_DATA[0].id
        createdAt: "2025-08-12T10:30:00Z",
        product: {name: "Classic White T-Shirt", category: "Women", id: "prod_01"} 
    },
    { 
        id: "rat_02", 
        rating: 4.8, 
        review: "Great quality and service!", 
        user: { name: 'Michael Johnson', image: ASSETS.user_logo }, 
        productId: "prod_01", // Matches PRODUCTS_DATA[6].id
        createdAt: "2025-08-13T15:45:00Z",
        product: {name: "Summer Floral Dress", category: "Women", id: "prod_01"}
    }
];

export const PRODUCTS_DATA = [
    {
        id: "prod_01",
        name: "Summer Floral Dress",
        description: "Beautiful summer floral dress perfect for warm days and casual outings. Made from breathable cotton.",
        regularPrice: 69,
        price: 49,
        images: [ASSETS.p1_1, ASSETS.p1_2, ASSETS.p1_3, ASSETS.p1_4],
        category: "Women",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-15T08:22:10Z"
    },
    {
        id: "prod_02",
        name: "Classic White T-Shirt",
        description: "Timeless classic white t-shirt made from 100% organic cotton. Soft and durable.",
        regularPrice: 29,
        price: 19,
        images: [ASSETS.p2],
        category: "Women",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-16T11:15:42Z"
    },
    {
        id: "prod_03",
        name: "Slim Fit Blue Jeans",
        description: "Modern slim fit blue jeans with a flattering silhouette. Premium denim with stretch.",
        regularPrice: 79,
        price: 59,
        images: [ASSETS.p3],
        category: "Women",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-17T13:48:20Z"
    },
    {
        id: "prod_04",
        name: "Casual Linen Blazer",
        description: "Elegant casual linen blazer perfect for dressing up any outfit. Breathable fabric.",
        regularPrice: 119,
        price: 89,
        images: [ASSETS.p4],
        category: "Women",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-18T09:33:15Z"
    },
    {
        id: "prod_05",
        name: "Black Leather Ankle Boots",
        description: "Sophisticated black leather ankle boots with cushioned insoles for all-day comfort.",
        regularPrice: 139,
        price: 99,
        images: [ASSETS.p5],
        category: "Women",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-19T12:20:08Z"
    },
    {
        id: "prod_06",
        name: "Classic Button-Up Shirt",
        description: "Crisp cotton button-up shirt. A versatile staple for every man's wardrobe.",
        regularPrice: 59,
        price: 39,
        images: [ASSETS.p6],
        category: "Men",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-20T14:51:25Z"
    },
    {
        id: "prod_07",
        name: "Dark Denim Cargo Pants",
        description: "Stylish cargo pants with multiple pockets and a modern rugged fit.",
        regularPrice: 89,
        price: 64,
        images: [ASSETS.p7],
        category: "Men",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-21T10:30:45Z"
    },
    {
        id: "prod_08",
        name: "Wool Blend Sweater",
        description: "Premium wool blend sweater. Soft, warm, and perfect for winter layering.",
        regularPrice: 99,
        price: 74,
        images: [ASSETS.p8],
        category: "Men",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-22T16:20:30Z"
    },
    {
        id: "prod_09",
        name: "Chinos Pants Beige",
        description: "Classic beige chinos tailored for a clean, professional yet casual look.",
        regularPrice: 69,
        price: 49,
        images: [ASSETS.p9],
        category: "Men",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-23T11:45:15Z"
    },
    {
        id: "prod_10",
        name: "Athletic Track Jacket",
        description: "Lightweight moisture-wicking track jacket for gym or street style.",
        regularPrice: 109,
        price: 79,
        images: [ASSETS.p10],
        category: "Men",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-24T13:30:50Z"
    },
    {
        id: "prod_11",
        name: "Graphic Hoodie",
        description: "Bold graphic prints on soft fleece. The ultimate teen fashion statement.",
        regularPrice: 49,
        price: 34,
        images: [ASSETS.p11],
        category: "Teens",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-25T15:12:20Z"
    },
    {
        id: "prod_12",
        name: "Skinny Fit Black Jeans",
        description: "Stretchy skinny black jeans designed for comfort and a sleek modern silhouette.",
        regularPrice: 59,
        price: 42,
        images: [ASSETS.p12],
        category: "Teens",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-26T09:25:40Z"
    },
    {
        id: "prod_13",
        name: "Colorful Striped T-Shirt",
        description: "Vibrant striped patterns on premium cotton. Fresh and youthful.",
        regularPrice: 39,
        price: 27,
        images: [ASSETS.p13],
        category: "Teens",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-27T14:51:25Z"
    },
    {
        id: "prod_14",
        name: "Casual Sneakers White",
        description: "Clean white minimalist sneakers. Essential for any casual teen outfit.",
        regularPrice: 89,
        price: 64,
        images: [ASSETS.p14],
        category: "Teens",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-28T10:15:30Z"
    },
    {
        id: "prod_15",
        name: "Sweatpants Gray",
        description: "Relaxed fit gray joggers. Perfect for lounging or active weekends.",
        regularPrice: 54,
        price: 38,
        images: [ASSETS.p15],
        category: "Teens",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-29T12:40:10Z"
    },
    {
        id: "prod_16",
        name: "Colorful T-Shirt Kids",
        description: "Playful designs and soft fabric. Made for active play and easy washing.",
        regularPrice: 29,
        price: 19,
        images: [ASSETS.p16],
        category: "Kids",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-30T08:55:25Z"
    },
    {
        id: "prod_17",
        name: "Denim Shorts Kids",
        description: "Durable and flexible denim shorts. Ideal for summer fun and playground adventures.",
        regularPrice: 39,
        price: 27,
        images: [ASSETS.p17],
        category: "Kids",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-01-31T15:30:45Z"
    },
    {
        id: "prod_18",
        name: "Cozy Fleece Jacket Kids",
        description: "Super soft fleece to keep your little ones warm during chilly outdoor activities.",
        regularPrice: 59,
        price: 42,
        images: [ASSETS.p18],
        category: "Kids",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-02-01T11:20:15Z"
    },
    {
        id: "prod_19",
        name: "Printed Leggings Kids",
        description: "Fun printed patterns on stretchy cotton. Designed for maximum flexibility.",
        regularPrice: 34,
        price: 24,
        images: [ASSETS.p19],
        category: "Kids",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-02-02T13:45:30Z"
    },
    {
        id: "prod_20",
        name: "Comfortable Canvas Shoes Kids",
        description: "Easy-to-wear canvas shoes with non-slip soles. Trendy colors for kids.",
        regularPrice: 49,
        price: 34,
        images: [ASSETS.p20],
        category: "Kids",
        storeId: "store_01",
        rating: RATINGS_DATA,
        store: STORE_DATA,
        inStock: true,
        createdAt: "2025-02-03T09:10:50Z"
    }
];


// COUPONS DATA
export const COUPONS_DATA = [
    { code: "CWU20", description: "20% Off for New Users", discount: 20, forNewUser: true, forMember: true, expiresAt: "2026-12-31T00:00:00Z" },
    { code: "CWU10", description: "10% Off for All Users", discount: 10, forNewUser: false, forMember: false, expiresAt: "2026-12-31T00:00:00Z" }
];

// USER & ADDRESS
export const USER_DATA = {
    id: "user_31dQbH27",
    name: "Loomio User",
    email: "user@example.com",
    image: ASSETS.user_logo,
    cart: {}
};

export const ADDRESS_DATA = {
    id: "addr_01",
    userId: "user_31dQbH27",
    name: "John Doe",
    street: "123 Main St",
    city: "New York",
    zip: "10001",
    country: "USA",
    phone: "1234567890"
};

// ORDERS DATA (Linked to prod_ IDs and COUPONS_DATA)
export const ORDERS_DATA = [
    {
        id: "ord_01",
        total: 68,
        status: "DELIVERED",
        userId: "user_31dQbH27",
        paymentMethod: "COD",
        isCouponUsed: true,
        coupon: COUPONS_DATA[1],
        createdAt: "2025-08-22T09:15:00Z",
        OrderItems: [
            { productId: "prod_01", quantity: 1, price: 49, product: PRODUCTS_DATA[0] },
        ],
        address: ADDRESS_DATA,
        user: USER_DATA
    },
    {
        id: "ord_01",
        total: 68,
        status: "DELIVERED",
        userId: "user_31dQbH27",
        paymentMethod: "COD",
        isCouponUsed: true,
        coupon: COUPONS_DATA[1],
        createdAt: "2025-09-22T09:15:00Z",
        OrderItems: [
            { productId: "prod_01", quantity: 1, price: 49, product: PRODUCTS_DATA[0] },
            { productId: "prod_02", quantity: 1, price: 19, product: PRODUCTS_DATA[1] }
        ],
        address: ADDRESS_DATA,
        user: USER_DATA
    },
    {
        id: "ord_01",
        total: 68,
        status: "DELIVERED",
        userId: "user_31dQbH27",
        paymentMethod: "COD",
        isCouponUsed: true,
        coupon: COUPONS_DATA[1],
        createdAt: "2025-09-22T09:15:00Z",
        OrderItems: [
            { productId: "prod_01", quantity: 1, price: 49, product: PRODUCTS_DATA[0] },
            { productId: "prod_02", quantity: 1, price: 19, product: PRODUCTS_DATA[1] }
        ],
        address: ADDRESS_DATA,
        user: USER_DATA
    }
];

// ADMIN DATA
export const ADMIN_STORES_DATA = [
    { ...STORE_DATA, id: "store_01" },
    { ...STORE_DATA, id: "store_02", name: "Express Shop", logo: ASSETS.store_2_logo }
];

export const ADMIN_DASHBOARD_DATA = {
    orders: 6,
    stores: 2,
    products: 20,
    revenue: "959.10",
    allOrders: ORDERS_DATA
};

export const STORE_DASHBOARD_DATA = {
    "ratings": RATINGS_DATA,
    "totalOrders": 2,
    "totalEarnings": 636,
    "totalProducts": 5
}