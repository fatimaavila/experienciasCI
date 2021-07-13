import Vuelo from '../pages/vuelo/Vuelo';
import Aventuras from '../pages/aventuras/Aventuras';
import Spa from '../pages/spa/Spa';
import Gastronomia from '../pages/gastronomia/Gastronomia';
import Acuaticas from '../pages/acuaticas/Acuaticas';
import Motor from '../pages/motor/Motor';
import Home from '../pages/home/Home';

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
        path: '/spa',
        Page: Spa,
        label: 'Spa',
    },
    {
        path: '/gastronomia',
        Page: Gastronomia,
        label: 'Gastronomia',
    },
    {
        path: '/acuaticas',
        Page: Acuaticas,
        label: 'Acuaticas',
    },
    {
        path: '/',
        Page: Home,
        label: 'Home',
    },
];
export default routes;
