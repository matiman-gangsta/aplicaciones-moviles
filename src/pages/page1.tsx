import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonSplitPane, IonMenu, IonButtons, IonMenuButton, IonIcon, IonLabel } from '@ionic/react';
import Example from '../components/Menu';
import { star } from 'ionicons/icons';
const Page1: React.FC = () => {
  const items = [
    { name: "Item 1", description: "This is the first item", route: "/page1/item1" },
    { name: "Item 2", description: "This is the second item", route: "/page1/item2" },
    { name: "Item 3", description: "This is the third item", route: "/page1/item3" },
    { name: "Item 4", description: "This is the fourth item", route: "/page1/item4" },
  ];
  return (
    <IonSplitPane contentId="main-content">
    {/* Aquí renderizamos el menú */}
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
      </IonContent>
    </IonPage>
    </IonSplitPane>
  );
};

export default Page1;
