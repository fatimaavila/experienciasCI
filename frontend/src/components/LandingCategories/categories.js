import gastro from '../../assets/gastroCategory.jpg';
import aqua from '../../assets/aquaCategory.jpeg';
import relax from '../../assets/spaCategory.jpg';
import couple from '../../assets/parejaCategory.jpg';
import motor from '../../assets/motorCategory.jpg';
import adventure from '../../assets/routesCategory.jpeg';
import fly from '../../assets/globoCategory.jpg';

const allCategoriesObject = [
    {
        path: '/vuelo',
        label: 'Vuelo',
        img: fly,
    },
    {
        path: '/aventuras',
        label: 'Aventuras',
        img: adventure,
    },
    {
        path: '/motor',
        label: 'Motor',
        img: motor,
    },
    {
        path: '/relax',
        label: 'Relax',
        img: relax,
    },
    {
        path: '/gastronomia',
        label: 'Gastronomía',
        img: gastro,
    },
    {
        path: '/acuaticas',
        label: 'Acuáticas',
        img: aqua,
    },
    {
        path: '/pareja',
        label: 'Pareja',
        img: couple,
    },
];

export default allCategoriesObject;