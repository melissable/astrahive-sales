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

export const userList = [
    {
      id: uuid(),
      name: 'Ekaterina Tankova',
      address: {
        country: 'USA',
        state: 'West Virginia',
        city: 'Parkersburg',
        street: '2849 Fulton Street'
      },
      email: 'ekaterina.tankova@devias.io',
      phone: '304-428-3097',
      avatarUrl: '/images/avatars/avatar_3.png',
      createdAt: 1555016400000
    },
    {
      id: uuid(),
      name: 'Cao Yu',
      address: {
        country: 'USA',
        state: 'Bristow',
        city: 'Iowa',
        street: '1865  Pleasant Hill Road'
      },
      email: 'cao.yu@devias.io',
      avatarUrl: '/images/avatars/avatar_4.png',
      phone: '712-351-5711',
      createdAt: 1555016400000
    },
    {
      id: uuid(),
      name: 'Alexa Richardson',
      address: {
        country: 'USA',
        state: 'Georgia',
        city: 'Atlanta',
        street: '4894  Lakeland Park Drive'
      },
      email: 'alexa.richardson@devias.io',
      phone: '770-635-2682',
      avatarUrl: '/images/avatars/avatar_2.png',
      createdAt: 1555016400000
    },
    {
      id: uuid(),
      name: 'Anje Keizer',
      address: {
        country: 'USA',
        state: 'Ohio',
        city: 'Dover',
        street: '4158  Hedge Street'
      },
      email: 'anje.keizer@devias.io',
      avatarUrl: '/images/avatars/avatar_5.png',
      phone: '908-691-3242',
      createdAt: 1554930000000
    },
    {
      id: uuid(),
      name: 'Clarke Gillebert',
      address: {
        country: 'USA',
        state: 'Texas',
        city: 'Dallas',
        street: '75247'
      },
      email: 'clarke.gillebert@devias.io',
      phone: '972-333-4106',
      avatarUrl: '/images/avatars/avatar_6.png',
      createdAt: 1554757200000
    },
    {
      id: uuid(),
      name: 'Adam Denisov',
      address: {
        country: 'USA',
        state: 'California',
        city: 'Bakerfield',
        street: '317 Angus Road'
      },
      email: 'adam.denisov@devias.io',
      phone: '858-602-3409',
      avatarUrl: '/images/avatars/avatar_1.png',
      createdAt: 1554670800000
    },
    {
      id: uuid(),
      name: 'Ava Gregoraci',
      address: {
        country: 'USA',
        state: 'California',
        city: 'Redondo Beach',
        street: '2188  Armbrester Drive'
      },
      email: 'ava.gregoraci@devias.io',
      avatarUrl: '/images/avatars/avatar_7.png',
      phone: '415-907-2647',
      createdAt: 1554325200000
    },
    {
      id: uuid(),
      name: 'Emilee Simchenko',
      address: {
        country: 'USA',
        state: 'Nevada',
        city: 'Las Vegas',
        street: '1798  Hickory Ridge Drive'
      },
      email: 'emilee.simchenko@devias.io',
      phone: '702-661-1654',
      avatarUrl: '/images/avatars/avatar_8.png',
      createdAt: 1523048400000
    },
    {
      id: uuid(),
      name: 'Kwak Seong-Min',
      address: {
        country: 'USA',
        state: 'Michigan',
        city: 'Detroit',
        street: '3934  Wildrose Lane'
      },
      email: 'kwak.seong.min@devias.io',
      avatarUrl: '/images/avatars/avatar_9.png',
      phone: '313-812-8947'
    },
    {
      id: uuid(),
      name: 'Merrile Burgett',
      address: {
        country: 'USA',
        state: 'Utah',
        city: 'Salt Lake City',
        street: '368 Lamberts Branch Road'
      },
      email: 'merrile.burgett@devias.io',
      phone: '801-301-7894',
      avatarUrl: '/images/avatars/avatar_10.png',
      createdAt: 1522702800000
    }
];

const data = {
  latestOrdersData,
  latestProductsData,
  userList
};

export default data;
