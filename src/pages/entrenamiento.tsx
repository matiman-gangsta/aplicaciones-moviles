import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonList, IonListHeader, IonButtons, IonIcon, IonMenuButton } from '@ionic/react';
import { home } from 'ionicons/icons';
import Breadcrumb from '../components/breadcrumb';

const Entrenamiento: React.FC = () => {
  const [ejercicio, setEjercicio] = useState('');
  const [repeticiones, setRepeticiones] = useState<number | null>(null);
  const [peso, setPeso] = useState<number | null>(null);
  const [resultados, setResultados] = useState<{ ejercicio: string; repeticiones: number; peso?: number }[]>([]);

  const onSubmit = () => {
    if (ejercicio && repeticiones !== null) {
      setResultados([...resultados, { ejercicio, repeticiones, peso: peso || 0 }]);
      setEjercicio('');
      setRepeticiones(null);
      setPeso(null);
    }
  };

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
      <IonButtons slot="start">
            <IonMenuButton />
            </IonButtons>
      <IonIcon icon={home} slot="start" />
        <IonTitle>Registrar Entrenamiento</IonTitle>
      </IonToolbar>
    </IonHeader>

      <IonContent>
      <Breadcrumb />
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
          <IonItem>
            <IonLabel position="floating">Ejercicio</IonLabel>
            <IonInput value={ejercicio} onIonChange={(e: CustomEvent) => setEjercicio(e.detail.value!)} required />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Repeticiones</IonLabel>
            <IonInput type="number" value={repeticiones || ''} onIonChange={(e: CustomEvent) => setRepeticiones(parseInt(e.detail.value!, 10))} required />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Peso (kg)</IonLabel>
            <IonInput type="number" value={peso || ''} onIonChange={(e: CustomEvent) => setPeso(parseInt(e.detail.value!, 10))} />
          </IonItem>

          <IonButton expand="full" type="submit">Registrar</IonButton>
        </form>

        <IonList>
          <IonListHeader>
            <h2>Resultados</h2>
          </IonListHeader>
          {resultados.map((resultado, index) => (
            <IonItem key={index}>
              <h2>{resultado.ejercicio}</h2>
              <p>Repeticiones: {resultado.repeticiones}</p>
              <p>Peso: {resultado.peso} kg</p>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Entrenamiento;
