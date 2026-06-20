import cake1 from '../assets/cake1.jpeg';
import cake2 from '../assets/cake2.jpeg';
import cake3 from '../assets/cake3.jpeg';
import cake4 from '../assets/cake4.jpeg';
import cake5 from '../assets/cake5.jpeg';
import cake6 from '../assets/cake6.jpeg';
import cake7 from '../assets/cake7.jpeg';
import cake8 from '../assets/cake8.jpeg';
import cake9 from '../assets/cake9.jpeg';
import cupcake1 from '../assets/cupcake1.jpeg';
import cupcake2 from '../assets/cupcake2.jpeg';
import cupcake3 from '../assets/cupcake3.jpeg';
import cupcake4 from '../assets/cupcake4.jpeg';
import cupcake5 from '../assets/cupcake5.jpeg';
import cupcake6 from '../assets/cupcake6.jpeg';
import cupcake7 from '../assets/cupcake7.jpeg';
import cupcake8 from '../assets/cupcake8.jpeg';
import cookie1 from '../assets/cookie1.jpeg';
import cookie2 from '../assets/cookie2.jpeg';
import cookie3 from '../assets/cookie3.jpeg';
import cookie4 from '../assets/cookie4.jpeg';
import cookie5 from '../assets/cookie5.jpeg';
import cookie6 from '../assets/cookie6.jpeg';
import cookie7 from '../assets/cookie7.jpeg';
import cookie8 from '../assets/cookie8.jpeg';
import cookie9 from '../assets/cookie9.jpeg';
import cookie10 from '../assets/cookie10.jpeg';
import d2 from '../assets/d2.jpeg';
import d3 from '../assets/d3.jpeg';
import d4 from '../assets/d4.jpeg';
import d5 from '../assets/d5.jpeg';
import d6 from '../assets/d6.jpeg';


export const navItems = ['Home', 'About Us', 'Special Recepie', 'Menu', 'Gallery', 'Location', 'Contact'];

const images = {
  cake: [
    cake1,
    cake2,
    cake3,
    cake4,
    cake5,
    cake6,
    cake7,
    cake8,
    cake9,
  ],
  cupcake: [
    cupcake1,
    cupcake2,
    cupcake3,
    cupcake4,
    cupcake5,
    cupcake6,
    cupcake7,
    cupcake8,
  ],
  cookie: [
    cookie1,
    cookie2,
    cookie3,
    cookie4,
    cookie5,
    cookie6,
    cookie7,
    cookie8,
    cookie9,
    cookie10
  ],
  dessert: [
    d2,
    d3,
    d4,
    d5,
    d6,
  ],
};

const makeProducts = (products, imageSet) =>
  products.map(([name, description], index) => ({
    name,
    description,
    image: imageSet[index % imageSet.length],
  }));

export const productCategories = [
  {
    id: 'premium-cakes',
    label: 'Premium Cakes',
    products: makeProducts(
      [
        ['Chocolate Almond Crunch Cake', 'Chocolate sponge, roasted almond crunch and silky dark chocolate ganache.'],
        ['Dark Chocolate & Salted Caramel Entremet', 'Layered mousse, salted caramel and a delicate cocoa glaze.'],
        ['Tiramisu Cake', 'Coffee-soaked sponge with mascarpone cream and a fine cocoa finish.'],
        ['Chocolate Strawberry Cake', 'Rich chocolate layers brightened with fresh strawberry compote.'],
        ['Cheesecake', 'Creamy baked cheesecake with a buttery biscuit base and seasonal topping.'],
        ['Dark Choco Basque Cheesecake', 'Caramelized exterior with an intensely creamy dark chocolate centre.'],
        ['Rose Pistachio Cake', 'Fragrant rose cream, pistachio praline and tender vanilla sponge.'],
        ['Raspberry Chocolate Cake', 'Dark chocolate balanced with tart raspberry and smooth ganache.'],
        ['Japanese Soufflé Cheesecake', 'Light, airy and delicately creamy cheesecake with a melt-in-your-mouth texture and subtle sweetness.'],
      ],
      images.cake,
    ),
  },
  {
    id: 'cupcakes',
    label: 'Cupcakes',
    products: makeProducts(
      [
        ['Red Velvet Cream Cheese Cupcake', 'Velvety cocoa sponge crowned with tangy cream cheese frosting.'],
        ['Butterscotch Cupcake', 'Caramel sponge, butterscotch sauce and a delicate praline crunch.'],
        ['Oreo Cupcake', 'Chocolate cupcake with cookies-and-cream frosting and Oreo crumble.'],
        ['Chocolate Fudge Cupcake', 'Deep chocolate sponge finished with glossy fudge frosting.'],
        ['Pandan Coconut Cupcake', 'Aromatic pandan sponge with light coconut cream.'],
        ['Lotus Biscoff Cupcake', 'Spiced caramel sponge with Biscoff cream and biscuit crumb.'],
        ['Nutella Cupcake', 'Soft chocolate sponge filled and topped with hazelnut cocoa cream.'],
        ['Black Forest Cupcake', 'Chocolate sponge, cherry filling and softly whipped cream.'],
      ],
      images.cupcake,
    ),
  },
  {
    id: 'premium-cookies',
    label: 'Premium Cookies',
    products: makeProducts(
      [
        ['Classic Choco Chip Cookie', 'Golden-edged, soft-centred and generously loaded with chocolate chips.'],
        ['Choco Marshmallow Cookie', 'Rich cocoa cookie with a soft toasted marshmallow centre.'],
        ['White Macadamia Cookie', 'Buttery cookie with white chocolate and roasted macadamia.'],
        ['Triple Choco Chip Cookie', 'Cocoa cookie packed with dark, milk and white chocolate.'],
        ['Snickerdoodle Cookie', 'Soft cinnamon sugar cookie with a comforting buttery crumb.'],
        ['Dubai Pistachio Cookie', 'Pistachio cream, chocolate and crisp kunafa-inspired texture.'],
        ['Rainbow Choco Cookie', 'Chewy vanilla cookie dotted with colourful chocolate pieces.'],
        ['Oats Choco Chip Cookie', 'Hearty rolled oats with brown sugar and dark chocolate chips.'],
        ['Chewy Dubai Cookie', 'A soft chocolate cookie with pistachio and toasted pastry crunch.'],
        ['Crunchy Nuts Cookie', 'A crisp butter cookie filled with roasted premium nuts.'],
      ],
      images.cookie,
    ),
  },
  {
    id: 'desserts',
    label: 'Desserts',
    products: makeProducts(
      [
        ['Japanese Souffle Cheesecake', 'Cloud-light cheesecake with a delicate jiggle and subtle sweetness.'],
        ['Fudge Brownie', 'Dense Belgian chocolate brownie with a signature crackled top.'],
        ['Saffron Tres Leches', 'Milk-soaked sponge perfumed with saffron and finished with cream.'],
        ['Dates Cake Pudding', 'Warm date cake with a luscious caramel-style sauce.'],
        ['Korean Garlic Bun', 'Fluffy bun filled with cream cheese and aromatic garlic butter.'],
        ['Cinnamon Rolls', 'Soft spiral rolls with cinnamon sugar and a smooth cream glaze.'],
      ],
      images.dessert,
    ),
  },
];

export const galleryGroups = [
  { label: 'Cakes', image: images.cake[6], className: 'md:col-span-2 md:row-span-2' },
  { label: 'Cupcakes', image: images.cupcake[0], className: '' },
  { label: 'Cookies', image: images.cookie[0], className: '' },
  { label: 'Desserts', image: images.dessert[0], className: 'md:col-span-2' },
  { label: 'Signature Tira-Mysore', image: images.cake[2], className: '' },
];

export const testimonials = [
  {
    name: 'Ananya Rao',
    role: 'Birthday Celebration',
    text: 'The cake felt made for our family. It was elegant, balanced and became the most photographed part of the evening.',
  },
  {
    name: 'Rohit Shetty',
    role: 'Dessert Box',
    text: 'Beautifully packed, fresh and never overly sweet. Elephique makes gifting feel genuinely special.',
  },
  {
    name: 'Meera Krishnan',
    role: 'Custom Wedding Order',
    text: 'Every detail was thoughtful, from the flavour consultation to the final finish. Our guests loved it.',
  },
];
