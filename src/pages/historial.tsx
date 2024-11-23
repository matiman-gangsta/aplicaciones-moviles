import React, { useEffect, useState } from 'react';
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
} from '@ionic/react';
import { star, home } from 'ionicons/icons';
import Breadcrumb from '../components/breadcrumb';

interface HistorialItem {
  name: string;
  description: string;
  successRate: string;
}

const HistorialEvaluaciones: React.FC = () => {
  const [items, setItems] = useState<HistorialItem[]>([]);

  // Cargar datos desde localStorage
  useEffect(() => {
    const historial = JSON.parse(localStorage.getItem('historialEvaluaciones') || '[]');
    setItems(historial);
  }, []);

  return (
    <IonSplitPane contentId="main-content">
      <IonMenu contentId="main-content"></IonMenu>
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
          <Breadcrumb />
          <IonList>
            {items.length === 0 ? (
              <p>No hay evaluaciones registradas.</p>
            ) : (
              items.map((item, index) => (
                <IonItem key={index}>
                  <IonIcon icon={star} slot="start" />
                  <IonLabel>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </IonLabel>
                  <div style={{ marginLeft: 'auto', alignSelf: 'center' }}>
                    <h3>{item.successRate}</h3>
                  </div>
                </IonItem>
              ))
            )}
          </IonList>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default HistorialEvaluaciones;
