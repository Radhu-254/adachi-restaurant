
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import MenuImg1 from '../src/assets/img/menu/3.png';
import MenuImg2 from '../src/assets/img/menu/1.png';
import MenuImg3 from '../src/assets/img/menu/2.png';
import MenuImg4 from '../src/assets/img/menu/p2.jpg';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.jpg';
import Avatar1 from '../src/assets/img/testimonial/test1.png';
import Avatar2 from '../src/assets/img/testimonial/test2.png';
import Avatar3 from '../src/assets/img/testimonial/test3.png';



export const navData = [
  { href: '/', name: 'home' },
  { href: '/about', name: 'about' },
  { href: '/menu', name: 'menu' },
  { href: '/testimonials', name: 'Reviews' },
  { href: '/reservation', name: 'Reservation' },
  { href: '/team', name: 'Chef' },
  { href: '/contact', name: 'contact' },
];

export const heroData = {
  pretitle: 'Japanese Inspired Cuisine',
  title: 'Adachi',
  subtitle:
    'FRESH INGRIDIENTS SOURCED GLOBALLY ',
  btnText: 'Explore more',
};

export const aboutData = {
  pretitle: 'our Mission',
  title: 'stylish and flavourful components',
  subtitle:
    'Adachi restaurant is a globally influenced Japanese-inspired restaurant nestled in the heart of Birmingham, Michigan in the Victorian Peabody Mansion. Executive Chef Lloyd Roberts brings with him years of experience and leads the kitchen team with innovation and superb technique. Adachi offers an array of gastronomic adventures with many small and large plates, specialty craft cocktails and a full sushi bar equipped with sashimi and nigiri options flown fresh from Japan.',
  image: AboutImg,
  btnText:'Explore the menu'
};

export const menuData = {
  title: 'delicious flavours from japan',
  subtitle: 'Enjoy your meal !',
  btnText: 'View Adachi Specials',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Alaska Burger',
      price: ' $ 39',
      description: '700 Calories',
    },
    {
      image: MenuImg2,
      name: 'Almond Cake',
      price: ' $ 47',
      description: '800 Calories',
    },
    {
      image: MenuImg3,
      name: 'King Burger',
      price: ' $ 36',
      description: '900 Calories',
    },
    {
      image: MenuImg4,
      name: 'Sushi Burger',
      price: ' $ 45',
      description: '500 Calories',
    },
  ],
};

export const teamData = {
  pretitle: 'our team',
  name:'Llyod Roberts',
  title: 'meet our chef',
  sub1: ' Lloyd Roberts, Executive Chef of Adachi Restaurant in Birmingham Michigan. Prior to working at Adachi, Chef Lloyd worked and learned from master chefs Jean-Georges Vongerichten, Nobu Matsuhisa and others at Vong, Nobu Moscow and Nobu Budapest. ',
  sub2: 'His training reflects his experiences in French, Japanese and other Asian cuisines. Chef Lloyd was born on the island of Jamaica and has lived in New York, Moscow and Budapest – bringing with him a broad range of traditions and local cuisines.',
  occupation: 'executive chef',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "Client Reviews  ",
  subtitle: '50+ regular customers',
  slider: [
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar1,
      name: 'Ross Geller',
      occupation: 'Paleontologist',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar2,
      name: 'Joey Tribbiani',
      occupation: 'Actor',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar3,
      name: 'Monica Geller',
      occupation: 'Head Chef at Odan',
    },
  ],
};

export const reservationData = {
  title: 'Make a Reservation',
  subtitle:
    'Call +91 9925731479 from 5AM - 11PM',
  btnText: 'Book now',
};

export const newsletterData = {
  title: 'Subscribe to our news letter',
  subtitle: 'Get latest updates in your inbox.',
  placeholder: 'Enter your Email',
  btnText: 'subscribe',
};

export const footerData = {
  contact: {
    title: 'Location',
    address: ' 325 Old Woodward Birmingham, MI',
    phone: 'info@adachirestaurant.com',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  }
};
