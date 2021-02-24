import Welcome from './pages/welcome';
import Typer from './pages/typer';
import BackgroundClipPage from './pages/background-clip';
import AnimationDemoPage from './pages/animation-demo';
import TransitionDemo from './pages/transition-demo';
import GridSystem from './pages/grid-system';


const routes = [
    {
        name: 'welcome',
        path: "/welcome",
        component: Welcome
    },
    {
        name: 'typer',
        path: '/Typer',
        component: Typer    
    },
    {
        name: 'background-clip',
        path: '/background-clip',
        component: BackgroundClipPage
    },
    {
        name: 'animation-demo',
        path: '/animation-demo',
        component: AnimationDemoPage
    },
    {
        name: 'transition-demo',
        path: '/transition-demo',
        component: TransitionDemo
    },
    {
        name: 'grid-system',
        path: '/grid-system',
        component: GridSystem
    }
];





export default routes;