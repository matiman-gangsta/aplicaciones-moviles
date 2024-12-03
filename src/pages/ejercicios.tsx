import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  const {nombre} = useParams<{ nombre: string }>();
  const [ejercicios, setEjercicios] = useState<{ nombre: string; descripcion: string; }[]>([]);

  const fetchEjercicios = async () => {
    try {
      const response = await axios.get(`https://api-fitapp-hmakejgwhgcqauhc.eastus2-01.azurewebsites.net/api/ejercicios/${nombre}`);
      setEjercicios(response.data);
    } catch (error) {
      console.error('Error al obtener los ejercicios:', error);
    }
  };

  useEffect(() => {
    fetchEjercicios();
  }, [nombre]);

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
          {ejercicios.map((ejercicio, index) => (
            <IonItem key={index}>
              <IonIcon icon={star} slot="start" />
              <IonLabel>
                <h2>{ejercicio.nombre}</h2>
                <p>{ejercicio.descripcion}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default EjerciciosPrueba;
