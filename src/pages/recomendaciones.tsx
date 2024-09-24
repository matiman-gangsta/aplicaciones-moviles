import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButtons, IonMenuButton } from '@ionic/react';
import './recomendaciones.css'; 
import Breadcrumb from '../components/breadcrumb';
import { home } from 'ionicons/icons';



const Recomendaciones: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
              <IonMenuButton />
              </IonButtons>
        <IonIcon icon={home} slot="start" />
          <IonTitle>Recomendaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="centrar-texto">
      <Breadcrumb/> 
        <h2>En esta página se mostrarán las recomendaciones para el ejercicio seleccionado</h2>
      </IonContent>
    </IonPage>
  );
};

export default Recomendaciones;

