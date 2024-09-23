import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

const Breadcrumb: React.FC = () => {
    const location = useLocation();
    const getPathSegments = () => {
        return location.pathname.split('/').filter((segment) => segment);
    };

    const pathSegments = getPathSegments();
    
    return (
        <IonBreadcrumbs>
            <IonBreadcrumb>
                <Link to="/">Inicio</Link>
            </IonBreadcrumb>
            {pathSegments.map((segment, index) => {
                const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
                return (
                    <IonBreadcrumb key={path}>
                        <Link to={path}>{segment.charAt(0).toUpperCase() + segment.slice(1)}</Link>
                    </IonBreadcrumb>
                );
            })}
        </IonBreadcrumbs>
    );
};

export default Breadcrumb;
