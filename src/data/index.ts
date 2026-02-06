import { v4 as uuidv4 } from 'uuid';
import type { IFormInput, IProduct } from '../interface';

export const productList: IProduct[] = [
  {
    id: uuidv4(),
    title: 'Wireless Headphones',
    description:
      'Premium noise-cancelling over-ear headphones with industry-leading active noise cancellation technology. Features 30-hour battery life, premium sound quality with rich bass and crystal-clear treble, and comfortable ear cushions for all-day wear. Includes carrying case and 3.5mm audio cable.',
    imageURL: 'https://picsum.photos/400/400?random=1',
    price: 159.99,
    colors: ['#000000', '#FFFFFF', '#7B61FF', '#1F1F1F', '#FF6B6B'],
    category: {
      name: 'Electronics',
      imageURL: 'https://picsum.photos/400/400?random=2',
    },
  },
  {
    id: uuidv4(),
    title: 'Classic Leather Wallet',
    description:
      'Handcrafted from premium full-grain leather with exceptional durability and natural aging. Features multiple card slots, coin compartment, and a minimalist RFID-blocking design. Hand-stitched with genuine Italian leather, this wallet develops a unique patina over time and is built to last a lifetime.',
    imageURL: 'https://picsum.photos/400/400?random=3',
    price: 39.99,
    colors: ['#3B2F2F', '#C19A6B', '#2C1810', '#8B6914'],
    category: {
      name: 'Accessories',
      imageURL: 'https://picsum.photos/400/400?random=4',
    },
  },
  {
    id: uuidv4(),
    title: 'Ceramic Coffee Mug',
    description:
      'Beautifully handcrafted 12oz ceramic coffee mug featuring a smooth matte glaze finish and ergonomic handle design. Microwave and dishwasher safe, heat-resistant up to 250°C. Each mug is individually glazed, making every piece unique with subtle color variations.',
    imageURL: 'https://picsum.photos/400/400?random=5',
    price: 14.99,
    colors: ['#F4A261', '#264653', '#E9C46A', '#FFFFFF', '#8B7355'],
    category: {
      name: 'Home',
      imageURL: 'https://picsum.photos/400/400?random=6',
    },
  },
  {
    id: uuidv4(),
    title: 'Running Shoes',
    description:
      'High-performance lightweight running shoes engineered for daily training and long-distance running. Features responsive cushioning, breathable mesh upper, and durable rubber outsole for superior traction. Designed to reduce impact and provide exceptional comfort during intense workouts and everyday activities.',
    imageURL: 'https://picsum.photos/400/400?random=7',
    price: 119.99,
    colors: ['#1B3A4B', '#FF6B6B', '#FFFFFF', '#00A8E8', '#D4AF37'],
    category: {
      name: 'Footwear',
      imageURL: 'https://picsum.photos/400/400?random=8',
    },
  },
  {
    id: uuidv4(),
    title: 'Minimalist Desk Lamp',
    description:
      'Sleek and modern LED desk lamp with touch controls and adjustable brightness levels. Features warm to cool white color temperature adjustment with memory function. Energy-efficient with USB charging port built-in, perfect for workspace or bedside reading. Durable aluminum construction.',
    imageURL: 'https://picsum.photos/400/400?random=9',
    price: 49.99,
    colors: ['#000000', '#F2F2F2', '#1F1F1F', '#E0E0E0', '#D4AF37'],
    category: {
      name: 'Lighting',
      imageURL: 'https://picsum.photos/400/400?random=10',
    },
  },
  {
    id: uuidv4(),
    title: 'Organic Cotton T-Shirt',
    description:
      'Premium organic cotton t-shirt made from sustainable, pesticide-free cotton. Features a relaxed comfortable fit with reinforced stitching and fade-resistant dyes. Perfect for everyday wear, the soft fabric feels luxurious against skin while maintaining durability through multiple washes. Eco-friendly and ethically produced.',
    imageURL: 'https://picsum.photos/400/400?random=11',
    price: 19.99,
    colors: ['#FFFFFF', '#000000', '#7FB069', '#FF6B9D', '#FECA57'],
    category: {
      name: 'Apparel',
      imageURL: 'https://picsum.photos/400/400?random=12',
    },
  },
  {
    id: uuidv4(),
    title: 'Stainless Steel Water Bottle',
    description:
      'High-performance double-wall insulated stainless steel bottle keeps beverages cold for 24 hours or hot for 12 hours. Lightweight, durable, and BPA-free with a leak-proof cap. Wide mouth opening for easy filling and cleaning. Perfect for hiking, gym, office, or everyday hydration with eco-friendly design.',
    imageURL: 'https://picsum.photos/400/400?random=13',
    price: 28.99,
    colors: ['#2A9D8F', '#264653', '#FF6B6B', '#FFA500', '#FFFFFF'],
    category: {
      name: 'Outdoor',
      imageURL: 'https://picsum.photos/400/400?random=14',
    },
  },
  {
    id: uuidv4(),
    title: 'Wooden Cutting Board',
    description:
      'Premium acacia wood cutting board handcrafted from sustainably sourced timber. Features an elegant juice groove to contain liquids and is naturally antimicrobial. Large surface area perfect for meal prep, serving, or displaying charcuterie. Food-safe, easy to clean, and improves with age and use.',
    imageURL: 'https://picsum.photos/400/400?random=15',
    price: 29.99,
    colors: ['#8B5E3C', '#D2B48C', '#654321'],
    category: {
      name: 'Kitchen',
      imageURL: 'https://picsum.photos/400/400?random=16',
    },
  },
  {
    id: uuidv4(),
    title: 'Bluetooth Speaker',
    description:
      'Portable waterproof Bluetooth speaker with premium sound quality and deep bass. IPX7 water-resistant rating ideal for pools, beach, or outdoor adventures. 12-hour battery life, 360-degree sound field, and dual pairing capability. Built-in microphone for hands-free calling and voice assistant integration.',
    imageURL: 'https://picsum.photos/400/400?random=17',
    price: 69.99,
    colors: ['#000000', '#FFB703', '#1F1F1F', '#FF6B6B', '#00A8E8'],
    category: {
      name: 'Audio',
      imageURL: 'https://picsum.photos/400/400?random=18',
    },
  },
  {
    id: uuidv4(),
    title: 'Indoor Plant - Fiddle Leaf Fig',
    description:
      'Beautiful and low-maintenance fiddle leaf fig plant perfect for home or office spaces. Ships in an elegant ceramic pot with drainage hole. Thrives in bright, indirect light and needs minimal watering. Improves air quality and adds a lush tropical aesthetic to any interior. Approximately 24 inches tall.',
    imageURL: 'https://picsum.photos/400/400?random=19',
    price: 35.99,
    colors: ['#2F6F4E', '#90EE90', '#228B22', '#FFB6C1'],
    category: {
      name: 'Plants',
      imageURL: 'https://picsum.photos/400/400?random=20',
    },
  },
  {
    id: uuidv4(),
    title: 'Travel Backpack',
    description:
      'Spacious 30L capacity travel backpack with organized compartments and padded laptop sleeve for up to 17-inch laptops. Features multiple pockets, ergonomic shoulder straps, and breathable back panel for all-day comfort. Water-resistant material, TSA-friendly design, and durable construction perfect for business trips or leisure travel.',
    imageURL: 'https://picsum.photos/400/400?random=21',
    price: 89.99,
    colors: ['#283044', '#6C757D', '#000000', '#FF6B6B', '#00A8E8'],
    category: {
      name: 'Bags',
      imageURL: 'https://picsum.photos/400/400?random=22',
    },
  },
];

export const formInputList: IFormInput[] = [
  {
    id: 'title',
    name: 'title',
    label: 'Product Title',
    type: 'text',
  },
  {
    id: 'description',
    name: 'description',
    label: 'Product Description',
    type: 'text',
  },
  {
    id: 'image',
    name: 'imageURL',
    label: 'Product Image URL',
    type: 'text',
  },
  {
    id: 'price',
    name: 'price',
    label: 'Product Price',
    type: 'number',
  },
  {
    id: 'category',
    name: 'category',
    label: 'Product Category',
    type: 'text',
  },
];
