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
  const [items, setItems] = useState<{ id: number; nombre: string; descripcion: string; }[]>([]);
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemDescription, setNewItemDescription] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  // URL de tu API en Azure
  const API_URL = 'https://api-fitapp-hmakejgwhgcqauhc.eastus2-01.azurewebsites.net/api'; 

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${API_URL}/pruebas`);
      setItems(response.data);
    } catch (error) {
      console.error("Error al obtener las pruebas:", error);
    }
  };

  const saveItem = async (newItem: { nombre: string; descripcion: string; }) => {
    try {
      await axios.post(`${API_URL}/pruebas`, newItem);
      setItems([...items, newItem]);
      setShowToast(true);
    } catch (error) {
      console.error("Error al guardar la prueba:", error);
    }
  };

  const handleAddItem = () => {
    if (newItemName && newItemDescription) {
      const newItem = { nombre: newItemName, descripcion: newItemDescription };
      saveItem(newItem);
      setNewItemName('');
      setNewItemDescription('');
    }
  };

  const handleNavigate = (idPrueba: number) => {
    history.push(`/listadopruebas/${idPrueba}`);
  };

  useEffect(() => {
    fetchItems();
  }, []);

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
            {items.map((item) => (
              <IonItem key={item.id} onClick={() => handleNavigate(item.id)}>
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
              onIonInput={(e: CustomEvent) => setNewItemName(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              placeholder="Descripción de la prueba"
              value={newItemDescription}
              onIonInput={(e: CustomEvent) => setNewItemDescription(e.detail.value!)}
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
