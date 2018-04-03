import Index from './pages/index';
import ProfileDetails from './pages/profile';
import AddressBook from './pages/address-book';
import Groups from './pages/groups';

export default [
  {
    path: '/',
    exact: true,
    component: Index  
  },
  {
    path: '/profile/details',
    exact: true,
    component: ProfileDetails  
  },
  {
    path: '/profile/address-book',
    exact: true,
    component: AddressBook
  },
  {
    path: '/groups',
    exact: true,
    component: Groups
  }
];
