import React, { useState } from 'react';
import './registroejercicios.css';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/react';

const RegistroEjercicios: React.FC = () => {
  const [nombreEjercicio, setNombreEjercicio] = useState<string>('');
  const [repeticiones, setRepeticiones] = useState<number | ''>(0);
  const [tipoEjercicio, setTipoEjercicio] = useState<string>('');

  const registrarEjercicio = () => {
    console.log('Ejercicio registrado:', {
      nombre: nombreEjercicio,
      repeticiones: repeticiones,
      tipo: tipoEjercicio,
    });
    // Aquí puedes agregar la lógica para guardar el ejercicio
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro Ejercicios</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem>
          <IonLabel position="floating">Nombre del Ejercicio</IonLabel>
          <IonInput
            type="text"
            value={nombreEjercicio}
            onIonChange={(e: CustomEvent) => setNombreEjercicio(e.detail.value || '')}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Repeticiones</IonLabel>
          <IonInput
            type="number"
            value={repeticiones}
            onIonChange={(e: CustomEvent) => setRepeticiones(e.detail.value ? Number(e.detail.value) : '')}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Tipo de Ejercicio</IonLabel>
          <IonInput
            type="text"
            value={tipoEjercicio}
            onIonChange={(e: CustomEvent) => setTipoEjercicio(e.detail.value || '')}
          />
        </IonItem>

        <IonButton expand="full" onClick={registrarEjercicio}>
          Registrar
        </IonButton>
      </IonContent>
    </>
  );
};

export default RegistroEjercicios;

