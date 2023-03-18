// import images
import LogoImg from '../src/assets/img/header/logo.png';
import HeroImg from '../src/assets/img/hero/image.png';
import OverviewProductImg from '../src/assets/img/overview/product.jpg';
import AmaImg from '../src/assets/img/overview/brands/ama.png';
import AraImg from '../src/assets/img/overview/brands/ara.png';
import FabImg from '../src/assets/img/overview/brands/fab.png';
import LatejImg from '../src/assets/img/overview/brands/latej.png';
import LawImg from '../src/assets/img/overview/brands/law.png';
import LushImg from '../src/assets/img/overview/brands/lush.png';
import Feature1Img from '../src/assets/img/features/feature1-img.jpg';
import Feature2Img from '../src/assets/img/features/feature2-img.jpg';
import Feature3Img from '../src/assets/img/features/feature3-img.jpg';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import CardIconImg1 from '../src/assets/img/product/cards/icon1.svg';
import CardIconImg2 from '../src/assets/img/product/cards/icon2.svg';
import CardIconImg3 from '../src/assets/img/product/cards/icon3.svg';
import PricingIcon1 from '../src/assets/img/pricing/icon1.svg';
import PricingIcon2 from '../src/assets/img/pricing/icon2.svg';
import PricingIcon3 from '../src/assets/img/pricing/icon3.svg';
import AvatarImg1 from '../src/assets/img/testimonial/avatar1.jpg';
import AvatarImg2 from '../src/assets/img/testimonial/avatar2.jpg';
import AvatarImg3 from '../src/assets/img/testimonial/avatar3.jpg';
import AvatarImg4 from '../src/assets/img/testimonial/avatar4.jpg';
import AvatarImg5 from '../src/assets/img/testimonial/avatar5.jpg';
import AvatarImg6 from '../src/assets/img/testimonial/avatar6.jpg';
import AvatarImg7 from '../src/assets/img/testimonial/avatar7.jpg';
import CtaImg1 from '../src/assets/img/cta/image1.svg';
import CtaImg2 from '../src/assets/img/cta/image2.svg';
import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
import TwitterIcon from '../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../src/assets/img/copyright/linkedin.svg';
//product section
import product1 from '../src/assets/img/product/merches/product (1).jpeg';
import product2 from '../src/assets/img/product/merches/product (1).jpg';
import product3 from '../src/assets/img/product/merches/product (2).jpg';
import product4 from '../src/assets/img/product/merches/product (3).jpg';
import product5 from '../src/assets/img/product/merches/product (4).jpg';
import product6 from '../src/assets/img/product/merches/product (5).jpg';
import product7 from '../src/assets/img/product/merches/product (6).jpg';
import product8 from '../src/assets/img/product/merches/product (7).jpg';
import product9 from '../src/assets/img/product/merches/product (8).jpg';
import product10 from '../src/assets/img/product/merches/product (9).jpg';
import product11 from '../src/assets/img/product/merches/product (10).jpg';

export const header = {
  logo: LogoImg,
  btnText: 'Call us today',
};

export const nav = [
  { name: '', href: '/' },
  { name: 'About', href: '/' },
  { name: 'Services', href: '/' },
  { name: 'Contact', href: '/' },
  { name: 'Shop', href: '/' },
];

export const hero = {
  title: 'Get the Best Printing Experience',
  subtitle: 'Enjoy top quality prints, with hassle free delivery',
  btnText: 'Call Us',
  compText: '— 24hrs / 7 Days — 9am to 5pm',
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brandText: 'TRUSTED BY SOME OF THE FASTEST GROWING BRANDS AS THE NO.1 PRINT SHOP IN LAGOS, NIGERIA',
  brands: [
    {
      image: AmaImg,
      delay: 300,
    },
    {
      image: AraImg,
      delay: 400,
    },
    {
      image: FabImg,
      delay: 500,
    },
    {
      image: LatejImg,
      delay: 600,
    },
    {
      image: LawImg,
      delay: 700,
    },
    {
      image: LushImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: 'About Us',
    title: 'Your needs, our hands',
    subtitle:
      'We are the landmark of sustainable printing service, using topclass and advance contemporary digital printing technology to produce high quality print marketing materials tailored to help Entreprenuers promote their brand, products and services to a wider audience. These print items are unique because they serve as branding and packaging materials, conveys the brand message to our target audience, provoke buying decision and create a positive impression.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Vision and Mission',
    title: 'Lead by excellence',
    subtitle:
      'Our vision is to be recognized as the leading printing agency for entreprenuers in Nigeria. We also nurture a strong mission of delighting our clients with quality service delivery, using carefully sourced quality materials and contemporary digital printing technology executed by highly trained professionals.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'The Mel-Imprints Mantra',
    title: 'We breathe expertise',
    subtitle:
      'For brands seeking to grow and sustain their visibility, create awareness, increase sales and build a larger customer base, Mel-Imprints offers a wide range of print marketing materials tailored to help promote and market their brand, product and services to a wider audience thereby gaining a competitive edge.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'The Products we have delivered.',
  subtitle:
    'A visual journey of our excellence: Browse our impressive collection of printed works that showcases our expertise and creativity.',
  cards: [
    {
      icon: CardIconImg1,
      title: 'Cross platform',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Cloud server',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Pure Javascript',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
  ],
  productImages : [
    {
      image: product1,
    },
    {
      image: product2,
    },
    {
      image: product3,
    },
    {
      image: product4,
    },
    {
      image: product5,
    },
    {
      image: product6,
    },
    {
      image: product7,
    },
    {
      image: product8,
    },
    {
      image: product9,
    },
    {
      image: product10,
    },
    {
      image: product11,
    },
  ]
};

export const pricing = {
  title: 'Choose your flexible plan.',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Starter Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$9.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Silver Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$19.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Diamond Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$29.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: 'What our clients are saying about us',
  clients: [
    {
      message:
        'This brand is highly trusted and keep delivering value and because of this, I keep referring my friends and anyone who needs a reliable print service. They are so quality centric and very customer friendly.',
      image: AvatarImg1,
      name: 'Olufunmi Oguniran',
      position: 'MD, Arabirin Fashion Store',
      borderColor: '#FF7235',
    },
    {
      message:
        'Mel-Imprints is Credible and reliable.',
      image: AvatarImg2,
      name: 'Adedoyin Fakorede',
      position: 'CEO, Essential Surveys Ltd',
      borderColor: '#FFBE21',
    },
    {
      message:
        'All the way from Abuja I ordered for all my printing needs from this brand, and I am pleased with their service. They give 100% attention to their customer needs and work towards meeting every specifications. This brand is reliable, customer friendly and deliver value!',
      image: AvatarImg3,
      name: 'Olajide Kazeem',
      position: 'CEO Lawkaz CoffeeWorld',
      borderColor: '#4756DF',
    },
    {
      message:
        'We loved the Tshirts they delivered. The quality is superb.',
      image: AvatarImg4,
      name: 'Fatima Akinlesi',
      position: 'MD, Your Market Woman',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'I have been using their service for a year now. They are swift, customer friendly and maintain quality service delivery.',
      image: AvatarImg5,
      name: 'Sunday Olowolafe Esq.',
      position: 'Legal practitioner, Olowolafe Chambers',
      borderColor: '#BB7259',
    },
    {
      message:
        'Patronizing this brand was one of the best business decision I took in 2022. I love the fact that they delivered to us exactly what we wanted. Thank you Mel-Imprints for such a good service',
      image: AvatarImg6,
      name: 'Miss Happiness',
      position: 'CEO, De Food Hauz',
      borderColor: '#BB7259',
    },
    {
      message:
        'Branding my products has transformed the look of my business and made it more appealing to my customers. Thank you for a job well done and thanks for always keeping to deadlines.',
      image: AvatarImg7,
      name: 'Jennifer Chukwufunanya',
      position: 'CEO, Jenny Cakes',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: 'Patronized by more than 500 businesses across Nigeria',
  subtitle: 'Get in touch with us today',
  btnText: 'Call us',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/' },
    { name: 'Careers', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Blog', href: '/' },
  ],
  legal: [
    { name: 'Terms of use', href: '/' },
    { name: 'Terms of conditions', href: '/' },
    { name: 'Privacy policy', href: '/' },
    { name: 'Cookie policy', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Over 25000 people have subscribed',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Subscribe',
    smallText: 'We don’t sell your email and spam',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy & Terms',
    href: '/',
  },
  link2: {
    name: 'Contact us',
    href: '/',
  },
  copyText: 'Copyright @ 2022 xpence',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};
