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
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonPage
} from '@ionic/react';
import { useParams, useHistory } from 'react-router-dom'; 
import Breadcrumb from '../components/breadcrumb';
import { home } from 'ionicons/icons';


interface Ejercicio {
  nombre: string;
  repeticiones: number;
  tipo: string;
  explicacion: string; 
  recomendaciones: string; 
}

interface Prueba {
  id: number;
  nombre: string;
  ejercicios: Ejercicio[];
}

interface RegistroEjerciciosProps {
  pruebas: Prueba[];
  setPruebas: React.Dispatch<React.SetStateAction<Prueba[]>>;
}

const RegistroEjercicios: React.FC<RegistroEjerciciosProps> = ({ pruebas, setPruebas }) => {
  const { idPrueba } = useParams<{ idPrueba: string }>(); 
  const history = useHistory();
  
  const [nombreEjercicio, setNombreEjercicio] = useState<string>('');
  const [repeticiones, setRepeticiones] = useState<number | ''>(0);
  const [tipoEjercicio, setTipoEjercicio] = useState<string>('');
  const [explicacion, setExplicacion] = useState<string>(''); 
  const [recomendaciones, setRecomendaciones] = useState<string>(''); 

  const registrarEjercicio = () => {
    const ejercicio: Ejercicio = {
      nombre: nombreEjercicio,
      repeticiones: Number(repeticiones),
      tipo: tipoEjercicio,
      explicacion, 
      recomendaciones, 
    };

    const nuevasPruebas = pruebas.map(prueba => {
      if (prueba.id === Number(idPrueba)) {
        return { ...prueba, ejercicios: [...prueba.ejercicios, ejercicio] };
      }
      return prueba;
    });

    setPruebas(nuevasPruebas);
    history.push('/page1'); 
  };

  const irARecomendaciones = () => {
    history.push(`/recomendaciones/${recomendaciones}`);
  };

  const irAExplicaciones = () => {
    history.push(`/explicaciones/${explicacion}`);
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
          <IonTitle>Registrar Ejercicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      <Breadcrumb/> 
        <IonItem>
          <IonLabel position="stacked">Nombre del Ejercicio</IonLabel>
          <IonInput
            type="text"
            value={nombreEjercicio}
            onIonChange={(e: CustomEvent) => setNombreEjercicio(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Repeticiones</IonLabel>
          <IonInput
            type="number"
            value={repeticiones}
            onIonChange={(e: CustomEvent) => setRepeticiones(Number(e.detail.value!))}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Tipo de Ejercicio</IonLabel>
          <IonInput
            type="text"
            value={tipoEjercicio}
            onIonChange={(e: CustomEvent) => setTipoEjercicio(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Explicación</IonLabel>
          <IonInput
            type="text"
            value={explicacion}
            onIonChange={(e: CustomEvent) => setExplicacion(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Recomendaciones</IonLabel>
          <IonInput
            type="text"
            value={recomendaciones}
            onIonChange={(e: CustomEvent) => setRecomendaciones(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="full" onClick={registrarEjercicio}>
          Registrar Ejercicio
        </IonButton>

        <IonButton expand="full" onClick={irARecomendaciones}>
          Ver Recomendaciones
        </IonButton>

        <IonButton expand="full" onClick={irAExplicaciones}>
          Ver Explicaciones
        </IonButton>
      </IonContent>
      </IonPage>
    </>
  );
};

export default RegistroEjercicios;
