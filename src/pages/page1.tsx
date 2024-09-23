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
import { star } from 'ionicons/icons';

  const Page1: React.FC = () => {
  const [items, setItems] = useState([
    { name: "Item 1", description: "This is the first item", route: "/page1/item1" },
    { name: "Item 2", description: "This is the second item", route: "/page1/item2" },
    { name: "Item 3", description: "This is the third item", route: "/page1/item3" },
    { name: "Item 4", description: "This is the fourth item", route: "/page1/item4" },
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
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Page 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
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
              placeholder="Nombre del nuevo item"
              value={newItemName}
              onIonChange={(e: CustomEvent) => setNewItemName(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              placeholder="Descripción del nuevo item"
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

