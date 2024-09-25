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
import { star,home } from 'ionicons/icons';
import Breadcrumb from '../components/breadcrumb';


const HistorialEvaluaciones: React.FC = () => {
  const [items, setItems] = useState([
    { name: "Ejercicio 1", description: "Descripción del ejercicio 1", successRate: "85%", route: "/evaluaciones/item1" },
    { name: "Ejercicio 2", description: "Descripción del ejercicio 2", successRate: "90%", route: "/evaluaciones/item2" },
    { name: "Ejercicio 3", description: "Descripción del ejercicio 3", successRate: "75%", route: "/evaluaciones/item3" },
    { name: "Ejercicio 4", description: "Descripción del ejercicio 4", successRate: "95%", route: "/evaluaciones/item4" },
  ]);
  
  return (
    <IonSplitPane contentId="main-content">
      <IonMenu contentId="main-content">
      </IonMenu>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonIcon icon={home} slot="start" />
            <IonTitle>Historial de Evaluaciones</IonTitle>
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
                <div style={{ marginLeft: 'auto', alignSelf: 'center' }}>
                  <h3>{item.successRate}</h3>
                </div>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default HistorialEvaluaciones;
