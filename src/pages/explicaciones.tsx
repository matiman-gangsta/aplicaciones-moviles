import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import './explicaciones.css'; 
import Breadcrumb from '../components/breadcrumb';
import { home } from 'ionicons/icons'; 


const Explicaciones: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonIcon icon={home} slot="start" />
          <IonTitle>En que consiste</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="centrar-texto">
      <Breadcrumb/>
        <h2>En esta pagina se mostrara en que consiste el ejercicio seleccionado</h2>
      </IonContent>
    </IonPage>
  );
};

export default Explicaciones;
