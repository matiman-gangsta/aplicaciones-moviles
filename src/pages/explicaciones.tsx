import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

interface Explicaciones {
  explicacion: string;
}

const Explicaciones: React.FC<Explicaciones> = ({ explicacion }) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Explicaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>{explicacion}</p>
      </IonContent>
    </>
  );
};

export default Explicaciones;
