import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import './feedback.css'; 
import Breadcrumb from '../components/breadcrumb';
import { home } from 'ionicons/icons'; 



const Feedback: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonIcon icon={home} slot="start" />
          <IonTitle>Feedback del Entrenamiento</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="centrar-texto">
      <Breadcrumb/> 
        <h2>En esta página se mostrará el feedback del entrenamiento realizado</h2>
        <h2>Aspectos que se pueden mejorar, repeticiones faltantes, porcentaje de exito.</h2>
      </IonContent>
    </IonPage>
  );
};

export default Feedback;
