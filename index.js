
// contact form functions 

function validateForm(event) {
    event.preventDefault(); 
    const name = document.getElementById("name");
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const comments = document.getElementById("comments");
    let errorsDiv = document.getElementById('errorsDiv'); 
    let thankYouDiv = document.getElementById('thankYouDiv');
    let validated = true; 

}

//menu buttons arrays / functions

const appetizers = [ {
    name: 'Thai Spring Roll (6)',
    price: '$4.00',
    description: 'Tofu, cucumber, carrot, bean sprouts wrapped in spring roll skin, with plum sauce'
  },
  {
    name: 'Crispy Tofu',
    price: '$6.00',
    description: 'Deep fried tofu served with sweet and sour sauce and ground peanut'
  },
  {
    name: 'Gyoza (5)',
    price: '$6.50',
    description: 'Pan-fried pot stickers served with homemade sesame sauce' 
  },
  {
    name: 'Crab Rangoon (5)',
    price: '$7.50',
    description: 'Crispy pastries filled with imitation crab meat, celery, carrot and cream cheese served with sweet and sour sauce'
  }];
const noodles = [ {
    name: 'Pad See-Ew',
    price: '$12.50',
    description: 'Wide rice noodle stir-fried with egg, Chinese broccoli, and American broccoli in an oriental sauce'
  },
  {
    name: 'Curry Fried Rice',
    price: '$12.50',
    description: 'Thai styled fried rice with egg, onions and curry powder' 
  },
  {
    name: 'Basil Fried Rice', 
    price: '$12.50', 
    description: 'Thai styled fried rice with basil leaves, chili peppers, bell pepper and onion'
  {
    name: 'Pad Kee-Mow',
    price: '$12.50',
    description: 'Wide rice noodle stir-fried with tomatoes, onions, bean sprouts, jalapeno, bell pepper and basil leaves in brown sauce'
  }]; 
const curry = [{
    name: 'Yellow Curry',
    price: '$13.00',
    description: 'Choice of meat, bamboo shoots, and fresh basil simmered with yellow curry paste and coconut milk'
  },
  {
    name: 'Mussaman Curry',
    price: '$13.00',
    description: 'Choice of meat, potatoes, onions, bell peppers, peanuts simmered with mussaman curry paste and coconut milk'
  },
  {
    name: 'Red Curry',
    price: '$13.00',
    description: 'Choice of meat, bamboo shoots, bell peppers and fresh basil simmered with red curry paste and coconut milk'
  },
  {
    name: 'Tamarind Curry',
    price: '$13.00',
    description: 'Choice of meat, tamarind and fresh spinach simmered with red curry paste and coconut milk'
  },
  {
    name: 'Green Curry',
    price: '$13.00',
    description: 'Choice of meat, bamboo shoots, Thai eggplant, green bean, bell peppers and fresh basil simmered with green curry paste and coconut milk'
  }] 
const entrees = [{
    name: 'Lemongrass',
    price: '$12.50',
    description: 'Choice of meat sautéed with green beans and minced fresh lemongrass'
  },
  {
    name: 'Spicy Basil',
    price: '$12.50',
    description: 'Choice of meat sautéed with bell peppers, onions, bamboo shoots and fresh basil'
  },
  {
    name: 'Ginger',
    price: '$12.50',
    description: 'Choice of meat sautéed with straw mushrooms, baby corn, carrot, onions and ginger'
  },
  {
    name: 'Cashew',
    price: '$12.50',
    description: 'Choice of meat sautéed with bell pepper, onion and cashew in a tangy-sweet sauce'
  },
  {
    name: 'Rama',
    price: '$12.50',
    description: 'Choice of meat sautéed with peanut sauce, served with broccoli and bell pepper'
  },]; 
const drinks = [ {
    name: 'Soft Drink (can)',
    price: '$2.00',
    description: ''
  },
  {
    name: 'Thai Iced Tea',
    price: '$4.00',
    description: ''
  },
  {
    name: 'Thai Iced Coffee',
    price: '$4.00',
    description: ''
  },
  {
    name: 'Root Beer',
    price: '$4.00',
    description: ''
  }]; 

function menuOptions(category){
    console.log(category); 
} 