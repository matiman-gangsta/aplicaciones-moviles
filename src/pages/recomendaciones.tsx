import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './recomendaciones.css'; 

const Recomendaciones: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recomendaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="centrar-texto">
        <h2>En esta página se mostrarán las recomendaciones para el ejercicio seleccionado</h2>
      </IonContent>
    </IonPage>
  );
};

export default Recomendaciones;

