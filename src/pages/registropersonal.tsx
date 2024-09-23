import React, { useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonTextarea
} from '@ionic/react';

const RegistroPersonal: React.FC = () => {
  const [alias, setAlias] = useState<string>('Felipe'); // Cambiado aquí
  const [antropometricos, setAntropometricos] = useState<string>('');

  const handleSave = () => {
    console.log('Alias:', alias);
    console.log('Indicadores Antropométricos:', antropometricos);
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Registro personal
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Alias:</IonLabel>
          <IonInput
            type="text"
            value={alias}
            onIonChange={(e: CustomEvent) => setAlias(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Indicadores antropométricos:</IonLabel>
          <IonTextarea
            value={antropometricos}
            placeholder="(si es válido y necesario)"
            onIonChange={(e: CustomEvent) => setAntropometricos(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="full" onClick={handleSave}>
          Guardar
        </IonButton>
      </IonContent>
    </>
  );
};

export default RegistroPersonal;