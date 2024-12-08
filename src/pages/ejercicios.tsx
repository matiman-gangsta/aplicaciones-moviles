import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonLabel
} from '@ionic/react';
import { home, star } from 'ionicons/icons';
import axios from 'axios';

const EjerciciosPrueba: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [ejercicios, setEjercicios] = useState<{ id: number; nombre: string; repeticiones: number; tipo: string; explicacion: string; recomendaciones: string; }[]>([]);
  const history = useHistory(); // Hook para navegación

  const fetchEjercicios = async () => {
    try {
      const response = await axios.get(`https://api-fitapp-hmakejgwhgcqauhc.eastus2-01.azurewebsites.net/api/pruebas/${id}`);
      setEjercicios(response.data);
    } catch (error) {
      console.error('Error al obtener los ejercicios:', error);
    }
  };

  useEffect(() => {
    fetchEjercicios();
  }, [id]);

  const handleEjercicioClick = (ejercicio: { explicacion: string, recomendaciones: string }) => {
    // Navegar a la página de Explicaciones, pasando los parámetros como estado
    history.push({
      pathname: `/explicaciones`,
      state: {
        explicacion: ejercicio.explicacion,
        recomendaciones: ejercicio.recomendaciones
      }
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonIcon icon={home} slot="start" />
          <IonTitle>Ejercicios de la Prueba</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {ejercicios.map((ejercicio) => (
            <IonItem key={ejercicio.id} button onClick={() => handleEjercicioClick(ejercicio)}>
              <IonIcon icon={star} slot="start" />
              <IonLabel>
                <h2>{ejercicio.nombre}</h2>
                <p><strong>Repeticiones:</strong> {ejercicio.repeticiones || 'N/A'}</p>
                <p><strong>Tipo:</strong> {ejercicio.tipo || 'N/A'}</p>

              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default EjerciciosPrueba;
