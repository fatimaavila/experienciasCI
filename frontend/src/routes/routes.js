import Vuelo from '../pages/vuelo/Vuelo';
import Aventuras from '../pages/aventuras/Aventuras';
import Spa from '../pages/spa/Spa';
import Gastronomia from '../pages/gastronomia/Gastronomia';
import Acuaticas from '../pages/acuaticas/Acuaticas';
import Motor from '../pages/motor/Motor';
import Home from '../pages/home/Home';
import Parejas from '../pages/parejas/Parejas';
import UniqueExperiece from '../pages/uniqueExperience/UniqueExperience';
import Experiences from '../pages/experiences/Experiences';
import RegisterValidate from '../pages/registervalidate/RegisterValidate';
import UserMenu from '../pages/userMenu/UserMenu';
import AdminMenu from '../pages/adminMenu/AdminMenu';
import Shop from '../components/shop/Shop';

const routes = [
  {
    path: '/vuelo',
    Page: Vuelo,
    label: 'Vuelo',
  },
  {
    path: '/aventuras',
    Page: Aventuras,
    label: 'Aventuras',
  },
  {
    path: '/motor',
    Page: Motor,
    label: 'Motor',
  },
  {
    path: '/relax',
    Page: Spa,
    label: 'Relax',
  },
  {
    path: '/gastronomia',
    Page: Gastronomia,
    label: 'Gastronomía',
  },
  {
    path: '/acuaticas',
    Page: Acuaticas,
    label: 'Acuáticas',
  },
  {
    path: '/pareja',
    Page: Parejas,
    label: 'Parejas',
  },
  {
    path: '/experiences',
    Page: Experiences,
    label: 'Experiences',
  },
  {
    path: '/experience/:idExp',
    Page: UniqueExperiece,
    label: 'UniqueExperiece',
  },
  {
    path: '/registervalidate',
    Page: RegisterValidate,
    label: 'RegisterValidate',
  },
  {
    path: '/usermenu',
    Page: UserMenu,
    label: 'UserMenu',
  },
  {
    path: '/adminmenu',
    Page: AdminMenu,
    label: 'AdminMenu',
  },
  {
    path: '/shop',
    Page: Shop,
    label: 'Shop',
  },
  {
    path: '/',
    Page: Home,
    label: 'Home',
  },
];
export default routes;
