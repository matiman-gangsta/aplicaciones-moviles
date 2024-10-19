import React, { useState } from 'react';
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
import Breadcrumb from '../components/breadcrumb';

const Page1: React.FC = () => {
  const history = useHistory(); 
  const [items, setItems] = useState([
    { name: "Prueba 1", description: "Descripción de la prueba", route: "/listadopruebas/prueba-1" },
    { name: "Prueba 2", description: "Descripción de la prueba", route: "/listadopruebas/prueba-2" },
    { name: "Prueba 3", description: "Descripción de la prueba", route: "/listadopruebas/prueba-3" },
    { name: "Prueba 4", description: "Descripción de la prueba", route: "/listadopruebas/prueba-4" },
  ]);
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemDescription, setNewItemDescription] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleAddItem = () => {
    if (newItemName && newItemDescription) {
      const newItemIndex = items.length + 1; 
      const route = `/listadopruebas/prueba-${newItemIndex}`; 

      const newItem = { 
        name: newItemName,  
        description: newItemDescription, 
        route 
      };

      setItems([...items, newItem]); 
      setNewItemName('');
      setNewItemDescription('');
      setShowToast(true);
    }
  };

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
              <IonItem key={index} button onClick={() => handleNavigate(item.route)}>
                <IonIcon icon={star} slot="start" />
                <IonLabel>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
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
