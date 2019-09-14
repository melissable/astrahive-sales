import uuid from 'uuid/v1';
import moment from 'moment';

export const latestOrdersData = [
    {
      id: uuid(),
      ref: 'CDD1049',
      amount: 30.5,
      customer: {
        name: 'Ekaterina Tankova'
      },
      createdAt: 1555016400000,
      status: 'pending'
    },
    {
      id: uuid(),
      ref: 'CDD1048',
      amount: 25.1,
      customer: {
        name: 'Cao Yu'
      },
      createdAt: 1555016400000,
      status: 'delivered'
    },
    {
      id: uuid(),
      ref: 'CDD1047',
      amount: 10.99,
      customer: {
        name: 'Alexa Richardson'
      },
      createdAt: 1554930000000,
      status: 'refunded'
    },
    {
      id: uuid(),
      ref: 'CDD1046',
      amount: 96.43,
      customer: {
        name: 'Anje Keizer'
      },
      createdAt: 1554757200000,
      status: 'pending'
    },
    {
      id: uuid(),
      ref: 'CDD1045',
      amount: 32.54,
      customer: {
        name: 'Clarke Gillebert'
      },
      createdAt: 1554670800000,
      status: 'delivered'
    },
    {
      id: uuid(),
      ref: 'CDD1044',
      amount: 16.76,
      customer: {
        name: 'Adam Denisov'
      },
      createdAt: 1554670800000,
      status: 'delivered'
    }
  ];

export const latestProductsData = [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: '/assets/images/products/product_1.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: '/assets/images/products/product_2.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: '/assets/images/products/product_3.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: '/assets/images/products/product_4.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: '/assets/images/products/product_5.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];

export const productListData = [
  {
    id: uuid(),
    title: 'Dropbox',
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    imageUrl: '/images/products/product_1.png',
    totalDownloads: '594',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'Medium Corporation',
    description:
      'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    imageUrl: '/images/products/product_2.png',
    totalDownloads: '625',
    createdAt: '31/03/2019'
  },
  {
    id: uuid(),
    title: 'Slack',
    description:
      'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    imageUrl: '/images/products/product_3.png',
    totalDownloads: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Lyft',
    description:
      'Lyft is an on-demand transportation company based in San Francisco, California.',
    imageUrl: '/images/products/product_4.png',
    totalDownloads: '406',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: 'GitHub',
    description:
      'GitHub is a web-based hosting service for version control of code using Git.',
    imageUrl: '/images/products/product_5.png',
    totalDownloads: '835',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: 'Squarespace',
    description:
      'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    imageUrl: '/images/products/product_6.png',
    totalDownloads: '835',
    createdAt: '04/04/2019'
  }
];

const data = {
  latestOrdersData,
  latestProductsData,
  productListData,
};

export default data;
