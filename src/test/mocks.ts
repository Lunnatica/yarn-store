import { Elements } from 'prismic-reactjs';

import { Product } from '../types/types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Table cloth',
    size: 'Large',
    stock: 5,
    new: false,
    image: {
      src: '/products/rocknwool-96oddxihsfA-unsplash.jpg',
      width: 2341,
      height: 2349,
      alt: 'Chair with clothing items',
    },
    description: [
      {
        type: Elements.paragraph,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut leo aliquet, euismod nibh non, tristique leo.',
        spans: [],
      },
      {
        type: Elements.listItem,
        text: 'Nulla faucibus felis nec mi venenatis eleifend.',
        spans: [],
      },
      {
        type: Elements.listItem,
        text: 'Fusce posuere ligula sit amet nisl scelerisque mattis.',
        spans: [],
      },
      {
        type: Elements.paragraph,
        text: 'Vestibulum nec odio non enim posuere lobortis. In lobortis congue luctus. Quisque ac pulvinar mi, at interdum nisl. Aliquam erat volutpat. Sed vitae sagittis magna.',
        spans: [],
      },
    ],
  },
  {
    id: 2,
    name: 'Long-sleeve sweater',
    size: 'Medium',
    stock: 3,
    new: true,
    image: {
      src: '/products/rocknwool-GUzkgot7LN8-unsplash.jpg',
      width: 3024,
      height: 3024,
      alt: 'Bottom part of long-sleeved sweater',
    },
    description: [
      {
        type: Elements.paragraph,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut leo aliquet, euismod nibh non, tristique leo.',
        spans: [],
      },
    ],
  },
  {
    id: 3,
    name: 'Organic yarn',
    size: '10 meters',
    stock: 12,
    new: false,
    image: {
      src: '/products/rocknwool-QmRKhfH9pag-unsplash.jpg',
      width: 3024,
      height: 3024,
      alt: 'Four green yarn spools',
    },
    description: [
      {
        type: Elements.paragraph,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut leo aliquet, euismod nibh non, tristique leo.',
        spans: [],
      },
      {
        type: Elements.listItem,
        text: 'Nulla faucibus felis nec mi venenatis eleifend.',
        spans: [],
      },
      {
        type: Elements.listItem,
        text: 'Fusce posuere ligula sit amet nisl scelerisque mattis.',
        spans: [],
      },
      {
        type: Elements.paragraph,
        text: 'Vestibulum nec odio non enim posuere lobortis. In lobortis congue luctus. Quisque ac pulvinar mi, at interdum nisl. Aliquam erat volutpat. Sed vitae sagittis magna.',
        spans: [],
      },
      {
        type: Elements.paragraph,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut leo aliquet, euismod nibh non, tristique leo.',
        spans: [],
      },
    ],
  },
  {
    id: 4,
    name: 'Small rectangular pillow in ivory and brown tones',
    size: '20cm x 50cm',
    stock: 5,
    new: false,
    image: {
      src: '/products/rocknwool-LIMwGxNw0Qo-unsplash.jpg',
      width: 2448,
      height: 2448,
      alt: 'Corner of brown pillow',
    },
    description: [
      {
        type: Elements.listItem,
        text: 'Nulla faucibus felis nec mi venenatis eleifend.',
        spans: [],
      },
      {
        type: Elements.listItem,
        text: 'Fusce posuere ligula sit amet nisl scelerisque mattis.',
        spans: [],
      },
    ],
  },
];
