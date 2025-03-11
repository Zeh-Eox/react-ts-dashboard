import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import routes from '../routers/router';

interface RouteType {
    path: string,
    title: string
}

const TitleUpdater: React.FC = () => {

    const location = useLocation();

    useEffect(() => {
        const currentRoute: RouteType | undefined = routes.find(
            route => route.path === location.pathname
        ) 

        if(currentRoute)
        {
            document.title = `${currentRoute.title} | Dashboard - Ts`
        }
    }, [location])

    return null
}

export default TitleUpdater