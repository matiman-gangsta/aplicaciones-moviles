import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonList,
  IonListHeader,
  IonButtons,
  IonIcon,
  IonMenuButton
} from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Importar useHistory para navegación
import { home } from 'ionicons/icons';
import Breadcrumb from '../components/breadcrumb';

interface Resultado {
  ejercicio: string;
  repeticiones: number;
  peso?: number;
  objetivoRepeticiones: number;
}

const Entrenamiento: React.FC = () => {
  const [ejercicio, setEjercicio] = useState('');
  const [repeticiones, setRepeticiones] = useState<number | null>(null);
  const [peso, setPeso] = useState<number | null>(null);
  const [objetivoRepeticiones, setObjetivoRepeticiones] = useState<number | null>(null);
  const [resultados, setResultados] = useState<Resultado[]>([]);
  const history = useHistory(); // Hook para manejar navegación

  const onSubmit = () => {
    if (ejercicio && repeticiones !== null && objetivoRepeticiones !== null) {
      const nuevoResultado: Resultado = {
        ejercicio,
        repeticiones,
        peso: peso || 0,
        objetivoRepeticiones
      };

      setResultados([...resultados, nuevoResultado]);
      setEjercicio('');
      setRepeticiones(null);
      setPeso(null);
      setObjetivoRepeticiones(null);

      // Navegar a la página de Feedback pasando los datos como estado
      history.push('/feedback', { resultados: [...resultados, nuevoResultado] });
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
            <IonInput
              value={ejercicio}
              onIonChange={(e: CustomEvent) => setEjercicio(e.detail.value!)}
              required
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Repeticiones Realizadas</IonLabel>
            <IonInput
              type="number"
              value={repeticiones || ''}
              onIonChange={(e: CustomEvent) => setRepeticiones(parseInt(e.detail.value!, 10))}
              required
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Objetivo de Repeticiones</IonLabel>
            <IonInput
              type="number"
              value={objetivoRepeticiones || ''}
              onIonChange={(e: CustomEvent) => setObjetivoRepeticiones(parseInt(e.detail.value!, 10))}
              required
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Peso (kg)</IonLabel>
            <IonInput
              type="number"
              value={peso || ''}
              onIonChange={(e: CustomEvent) => setPeso(parseInt(e.detail.value!, 10))}
            />
          </IonItem>

          <IonButton expand="full" type="submit">Registrar y Ver Feedback</IonButton>
        </form>

        <IonList>
          <IonListHeader>
            <h2>Resultados Anteriores</h2>
          </IonListHeader>
          {resultados.map((resultado, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h3>{resultado.ejercicio}</h3>
                <p>Repeticiones Realizadas: {resultado.repeticiones}</p>
                <p>Objetivo de Repeticiones: {resultado.objetivoRepeticiones}</p>
                <p>Peso: {resultado.peso} kg</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Entrenamiento;
