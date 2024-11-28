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
  IonTextarea,
  IonIcon,
  IonMenuButton,
  IonButtons,
  IonPage
} from '@ionic/react';
import Breadcrumb from '../components/breadcrumb';
import { home } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';

const RegistroPersonal: React.FC = () => {
  const [alias, setAlias] = useState<string>('Felipe'); 
  const [antropometricos, setAntropometricos] = useState<string>('');

  const handleSave = () => {
    console.log('Alias:', alias);
    console.log('Indicadores Antropométricos:', antropometricos);
  };

  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonIcon icon={home} slot="start" />
          <IonTitle>Registro personal</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <Breadcrumb />
        <IonItem>
          <IonLabel position="stacked">Alias:</IonLabel>
          <IonInput
            type="text"
            value={alias}
            onIonInput={(e: CustomEvent) => setAlias(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Indicadores antropométricos:</IonLabel>
          <IonTextarea
            value={antropometricos}
            placeholder="(si es válido y necesario)"
            onIonInput={(e: CustomEvent) => setAntropometricos(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="full" onClick={handleSave}>
          Guardar
        </IonButton>
        <br />
        <ExploreContainer alias={alias} />
      </IonContent>
      </IonPage>
    </>
  );
};

export default RegistroPersonal;
