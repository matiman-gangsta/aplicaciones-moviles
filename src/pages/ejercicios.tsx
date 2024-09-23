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
  IonLabel
} from '@ionic/react';
import Example from '../components/Menu';
import { star,home } from 'ionicons/icons';
import Breadcrumb from '../components/breadcrumb';


const Ejercicios: React.FC = () => {
  const [items, setItems] = useState([
    { name: "Ejercicio 1", description: "Descripción del ejercicio 1", route: "/ejercicios/item1" },
    { name: "Ejercicio 2", description: "Descripción del ejercicio 2", route: "/ejercicios/item2" },
    { name: "Ejercicio 3", description: "Descripción del ejercicio 3", route: "/ejercicios/item3" },
    { name: "Ejercicio 4", description: "Descripción del ejercicio 4", route: "/ejercicios/item4" },
  ]);
  
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
            <IonTitle>Ejercicios</IonTitle>
            <IonIcon icon={home} slot="start" />
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <Breadcrumb/>
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

export default Ejercicios;
