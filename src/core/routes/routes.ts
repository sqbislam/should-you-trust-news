
import Counter from "../../features/counter/Counter";
import Dashboard from "../../features/dashboard/Dashboard";
import LandingPage from "../../features/landing/Landing";

interface IAppRoute {
    path: string;
    isPublic: boolean;
    component: React.FunctionComponent<any>;
}
export const AppRoutes:{[key:string]:IAppRoute} = {
    // Each route has its own set of config params.
    landing: {
        path: "/",
        isPublic:true,
        component:LandingPage
    },
    dashboard: {
        path: "/dashboard",
        isPublic:true,
        component:Dashboard
    },
    counter:{
        path:"/counter",
        isPublic:true,
        component:Counter
    }
}