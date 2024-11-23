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
  IonPage,
  IonToast
} from '@ionic/react';
import { useParams, useHistory } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb';
import { home } from 'ionicons/icons';
import axios from 'axios';

export interface Ejercicio {
  nombre: string;
  repeticiones: number;
  tipo: string;
  explicacion: string;
  recomendaciones: string;
}

export interface Prueba {
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
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const API_URL = 'https://api-fitapp-hmakejgwhgcqauhc.eastus2-01.azurewebsites.net/api/ejercicios'; // Cambia por el endpoint real

  const registrarEjercicio = async () => {
    if (!nombreEjercicio || !repeticiones || !tipoEjercicio) {
      setToastMessage('Por favor, completa todos los campos obligatorios.');
      setShowToast(true);
      return;
    }
  
    const ejercicio: Ejercicio = {
      nombre: nombreEjercicio,
      repeticiones: Number(repeticiones),
      tipo: tipoEjercicio,
      explicacion,
      recomendaciones,
    };
  
    try {
      const response = await axios.post(`${API_URL}`, {
        ...ejercicio,
        pruebaId: Number(idPrueba), // Relacionar con la prueba física
      });
  
      if (response.status === 201) {
        // Actualiza el estado local con los datos del backend
        const nuevasPruebas = pruebas.map((prueba) =>
          prueba.id === Number(idPrueba)
            ? { ...prueba, ejercicios: [...prueba.ejercicios, response.data] }
            : prueba
        );
  
        setPruebas(nuevasPruebas);
        setToastMessage('Ejercicio registrado exitosamente.');
        setShowToast(true);
        history.push('/listadopruebas');
      }
    } catch (error) {
      console.error('Error al registrar el ejercicio:', error);
      setToastMessage('Error al registrar el ejercicio.');
      setShowToast(true);
    }
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
          <Breadcrumb />
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

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message={toastMessage}
            duration={2000}
          />
        </IonContent>
      </IonPage>
    </>
  );
};

export default RegistroEjercicios;
