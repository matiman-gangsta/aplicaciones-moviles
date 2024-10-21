import React, { useEffect, useState } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton, 
  IonIcon 
} from '@ionic/react';
import Breadcrumb from '../components/breadcrumb'; 
import { home } from 'ionicons/icons'; 
import axios from 'axios';

import './Tab1.css';

interface Nombre {
  id: number;
  nombre: string;
}

const Tab2: React.FC = () => {
  const [nombres, setNombres] = useState<Nombre[]>([]); // Estado inicial como array vacío

  useEffect(() => {
    const fetchNombres = async () => {
      try {
        const response = await axios.get('https://api-fitapp-hmakejgwhgcqauhc.eastus2-01.azurewebsites.net/test'); // Asegúrate de que la URL sea correcta y tenga prefijo https
        console.log('Datos recibidos:', response.data);

        // Validamos si la respuesta es un array
        if (Array.isArray(response.data)) {
          setNombres(response.data); // Almacena la lista de nombres
        } else {
          console.error('La respuesta no es un array:', response.data);
        }
      } catch (error) {
        console.error('Error al obtener los nombres:', error);
      }
    };

    fetchNombres(); // Llamada a la API
  }, []);

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
          <IonIcon icon={home} slot="start" />
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <Breadcrumb />
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="center-content">
          <img 
            src="https://escsalud.wordpress.com/wp-content/uploads/2012/03/head_esc.jpg" 
            alt="Imagen de bienvenida" 
          />
          <h1 className="centrar-texto">¡Bienvenido a todos!</h1>

          <ul>
            {nombres.length > 0 ? (
              nombres.map((nombre) => (
                <li key={nombre.id}>{nombre.nombre}</li> // Muestra cada nombre
              ))
            ) : (
              <p>No hay nombres disponibles</p>
            )}
          </ul>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;


