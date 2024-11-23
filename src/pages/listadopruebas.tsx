import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonSplitPane,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonLabel,
  IonInput,
  IonButton,
  IonToast
} from '@ionic/react';
import { useHistory } from 'react-router-dom'; 
import { star, home } from 'ionicons/icons';
import axios from 'axios';
import Breadcrumb from '../components/breadcrumb';

const Page1: React.FC = () => {
  const history = useHistory();
  const [items, setItems] = useState<{ nombre: string; descripcion: string;}[]>([]);
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemDescription, setNewItemDescription] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  // URL de tu API en Azure
  const API_URL = 'https://api-fitapp-hmakejgwhgcqauhc.eastus2-01.azurewebsites.net/api'; 

  // Función para obtener las pruebas desde la base de datos en Azure
  const fetchItems = async () => {
    try {
      const response = await axios.get("https://api-fitapp-hmakejgwhgcqauhc.eastus2-01.azurewebsites.net/api/pruebas");
      setItems(response.data); // Asume que la API devuelve un array de pruebas
    } catch (error) {
      console.error("Error al obtener las pruebas:", error);
    }
  };

  // Función para guardar una nueva prueba en la base de datos en Azure
  const saveItem = async (newItem: { nombre: string; descripcion: string;}) => {
    try {
      await axios.post('https://api-fitapp-hmakejgwhgcqauhc.eastus2-01.azurewebsites.net/api/pruebas', newItem); // Envía el nuevo elemento a la base de datos
      setItems([...items, newItem]); // Actualiza el estado local para mostrar la nueva prueba
      setShowToast(true);
    } catch (error) {
      console.error("Error al guardar la prueba:", error);
    }
  };

  // Modificación de handleAddItem para utilizar saveItem y guardar en la base de datos
  const handleAddItem = () => {
    if (newItemName && newItemDescription) {
      const newItemIndex = items.length + 1; 
      const route = `/listadopruebas/prueba-${newItemIndex}`;
      const newItem = { nombre: newItemName, descripcion: newItemDescription, route };

      saveItem(newItem); // Llama a la función de guardado en la base de datos
      setNewItemName('');
      setNewItemDescription('');
    }
  };

  // Cargar las pruebas al iniciar el componente
  useEffect(() => {
    fetchItems();
  }, []);

  const handleNavigate = (route: string) => {
    history.push(route);
  };

  return (
    <IonSplitPane contentId="main-content">
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonIcon icon={home} slot="start" />
            <IonTitle>Pruebas Físicas</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <Breadcrumb />

          <IonList>
            {items.map((item, index) => (
              <IonItem key={index} >
                <IonIcon icon={star} slot="start" />
                <IonLabel>
                  <h2>{item.nombre}</h2>
                  <p>{item.descripcion}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>

          <IonItem>
            <IonInput
              placeholder="Nombre de la prueba"
              value={newItemName}
              onIonChange={(e: CustomEvent) => setNewItemName(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              placeholder="Descripción de la prueba"
              value={newItemDescription}
              onIonChange={(e: CustomEvent) => setNewItemDescription(e.detail.value!)}
            />
          </IonItem>

          <IonButton expand="full" onClick={handleAddItem}>
            Agregar Prueba
          </IonButton>

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Prueba agregada exitosamente."
            duration={2000}
          />
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default Page1;
