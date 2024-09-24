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
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonLabel,
  IonInput,
  IonButton,
  IonToast
} from '@ionic/react';
import Example from '../components/Menu';
import { star,home } from 'ionicons/icons';
import Breadcrumb from '../components/breadcrumb';


  const Page1: React.FC = () => {
  const [items, setItems] = useState([
    { name: "Prueba 1", description: "Descripcion de la prueba", route: "/page1_item1" },
    { name: "Prueba 2", description: "Descripcion de la prueba", route: "/page1/item2" },
    { name: "Prueba 3", description: "Descripcion de la prueba", route: "/page1/item3" },
    { name: "Prueba 4", description: "Descripcion de la prueba", route: "/page1/item4" },
  ]);
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemDescription, setNewItemDescription] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleAddItem = () => {
    if (newItemName && newItemDescription) {
      const newItem = {
        name: newItemName,
        description: newItemDescription,
        route: `/page1/${newItemName.toLowerCase().replace(/\s+/g, '-')}`,
      };
      setItems([...items, newItem]);
      setNewItemName('');
      setNewItemDescription('');
      setShowToast(true);
    }
  }; 

  return (
    <IonSplitPane contentId="main-content">
      <IonMenu contentId="main-content">
        <Example />
      </IonMenu>
      <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonIcon icon={home} slot="start" />
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Pruebas fisicas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <Breadcrumb />
          <IonList>
            {items.map((item, index) => (
              <IonItem key={index} routerLink={item.route}>
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
            Agregar Item
          </IonButton>

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Item agregado exitosamente."
            duration={2000}
          />
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default Page1;

