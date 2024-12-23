import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonMenuButton, IonButtons } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import './explicaciones.css'; 
import Breadcrumb from '../components/breadcrumb';
import { home } from 'ionicons/icons';

const Explicaciones: React.FC = () => {
  const location = useLocation();
  const state = location.state as { explicacion: string, recomendaciones: string } | undefined;

  const explicacion = state?.explicacion || 'No disponible';
  const recomendaciones = state?.recomendaciones || 'No disponibles';

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonIcon icon={home} slot="start" />
          <IonTitle>En qué consiste</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="centrar-texto">
        <Breadcrumb />
        <h2>En esta página se mostrará en qué consiste el ejercicio seleccionado</h2>
        
        {/* Mostrar explicaciones y recomendaciones */}
        <h3>Explicación:</h3>
        <p>{explicacion}</p>

        <h3>Recomendaciones:</h3>
        <p>{recomendaciones}</p>
      </IonContent>
    </IonPage>
  );
};

export default Explicaciones;
