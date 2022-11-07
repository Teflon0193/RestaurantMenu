/* eslint-disable import/no-anonymous-default-export */
import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'R959',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: 'R959',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: 'R759',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'R449',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'R369',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'R86',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'R87',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'R67',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'R80',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'R54',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const starters = [
  {
    title: 'Bacon and cheese croquettes',
    price: 'R44',

  },
  {
    title: 'Classic canape trio',
    price: 'R47',

  },
  {
    title: 'Butter chicken vol-au-vents',
    price: 'R67',

  },
  {
    title: 'mushrooms pies',
    price: 'R36',

  },
  {
    title: 'Cheese cake',
    price: 'R54',

  },
];

const dinner = [
  {
    title: 'Buffalo Shrimp Skewers',
    price: 'R113',

  },
  {
    title: 'Sweet Potato Fries',
    price: 'R68',

  },
  {
    title: 'Smoked Nacho Grande',
    price: 'R120',

  },
  {
    title: 'Whiskey Beef Ribs',
    price: 'R180',

  },
  {
    title: 'Chicken Fried Steak',
    price: 'R154',

  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmand',
    subtitle: 'Good Quality and Good Value Cooking.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Fresh, Delicious, Healthy Catering services to Individual customers, corporate events and social events.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Award, which recognises a clear commitment to sustainability, demonstrated through good practice and policy.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'One of the best in CapeTown.',
  },
];

export default { wines, cocktails, starters, dinner, awards };
