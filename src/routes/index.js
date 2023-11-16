import HeaderOnly from '~/components/Layout/HeaderOnly';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following, layout: HeaderOnly },
    { path: '/profile', component: Profile, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
