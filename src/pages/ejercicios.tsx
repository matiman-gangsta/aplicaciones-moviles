import React, { useState } from 'react';
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
  IonLabel,
  IonChip
} from '@ionic/react';
import { star, home } from 'ionicons/icons';
import Breadcrumb from '../components/breadcrumb';

const Ejercicios: React.FC = () => {
  const [items, setItems] = useState([
    { name: "Ejercicio 1", description: "Descripción del ejercicio 1", route: "/ejercicios/item1" },
    { name: "Ejercicio 2", description: "Descripción del ejercicio 2", route: "/ejercicios/item2" },
    { name: "Ejercicio 3", description: "Descripción del ejercicio 3", route: "/ejercicios/item3" },
    { name: "Ejercicio 4", description: "Descripción del ejercicio 4", route: "/ejercicios/item4" },
  ]);

  return (
    <IonPage id="main-content">
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
        <Breadcrumb />

        <div style={{ marginBottom: '16px' }}>
          <IonChip style={{ backgroundColor: 'rgba(255, 0, 0, 0.7)', color: 'white' }}>
            <IonLabel>Fuerza</IonLabel>
          </IonChip>
          <IonChip style={{ backgroundColor: 'rgba(0, 0, 255, 0.7)', color: 'white' }}>
            <IonLabel>Velocidad</IonLabel>
          </IonChip>
          <IonChip style={{ backgroundColor: 'rgba(0, 128, 0, 0.7)', color: 'white' }}>
            <IonLabel>Destreza</IonLabel>
          </IonChip>
        </div>

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
  );
};

export default Ejercicios;
