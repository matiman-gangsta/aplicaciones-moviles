import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

interface Recomendaciones {
  recomendaciones: string;
}

const Recomendaciones: React.FC<Recomendaciones> = ({ recomendaciones }) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recomendaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>{recomendaciones}</p>
      </IonContent>
    </>
  );
};

export default Recomendaciones;
