import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
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

const ejerciciosDisponibles = [
  { value: 'Flexiones', label: 'Flexiones' },
  { value: 'Sentadillas', label: 'Sentadillas' },
  { value: 'Peso Muerto', label: 'Peso Muerto' },
  { value: 'Press de Banca', label: 'Press de Banca' },
  // Agrega más ejercicios según sea necesario
];

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
            <IonLabel>Ejercicio</IonLabel>
            <IonSelect
              value={ejercicio}
              onIonChange={(e: CustomEvent) => setEjercicio(e.detail.value)}
              
            >
              {ejerciciosDisponibles.map((ejercicio) => (
                <IonSelectOption key={ejercicio.value} value={ejercicio.value}>
                  {ejercicio.label}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Repeticiones Realizadas</IonLabel>
            <IonInput
              type="number"
              value={repeticiones || ''}
              onIonInput={(e: CustomEvent) => setRepeticiones(parseInt(e.detail.value!, 10))}
              required
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Objetivo de Repeticiones</IonLabel>
            <IonInput
              type="number"
              value={objetivoRepeticiones || ''}
              onIonInput={(e: CustomEvent) => setObjetivoRepeticiones(parseInt(e.detail.value!, 10))}
              required
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Peso (kg)</IonLabel>
            <IonInput
              type="number"
              value={peso || ''}
              onIonInput={(e: CustomEvent) => setPeso(parseInt(e.detail.value!, 10))}
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
