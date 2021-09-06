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
import RecoverPass from '../pages/recoverPass/recoverPass';
import ResetPass from '../pages/resetPass/resetPass';
import VerifyPage from '../pages/verifyUserRegistered/verifyUserRegistered';

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
    path: '/register-validate/:verifyCode',
    Page: VerifyPage,
    label: 'VerifyUser',
  },
  {
    path: '/register-validate',
    Page: RegisterValidate,
    label: 'RegisterValidate',
  },
  {
    path: '/profile',
    Page: UserMenu,
    label: 'Profile',
    private: true,
  },
  {
    path: '/admin',
    Page: AdminMenu,
    label: 'Admin',
    private: true,
  },
  {
    path: '/shop',
    Page: Shop,
    label: 'Shop',
  },
  {
    path: '/recover-pass',
    Page: RecoverPass,
    label: 'RecoverPass',
  },
  {
    path: '/reset-pass',
    Page: ResetPass,
    label: 'ResetPass',
  },
  {
    path: '/',
    Page: Home,
    label: 'Home',
  },
];
export default routes;
