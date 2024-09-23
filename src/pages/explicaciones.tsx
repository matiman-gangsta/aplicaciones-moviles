import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './explicaciones.css'; 
import Breadcrumb from '../components/breadcrumb';


const Explicaciones: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
