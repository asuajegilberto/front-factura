import mock from '../utils/mock'

mock.onGet('/api/account/profile').reply(200, {
  profile: {
    avatar: '/images/avatars/avatar_11.png',
    canHire: false,
    country: 'USA',
    email: 'shen.zhi@devias.io',
    firstName: 'Shen',
    isPublic: true,
    lastName: 'Zhi',
    phone: '+40 777666555',
    state: 'Alabama',
    timezone: '4:32PM (GMT-4)'
  }
})
