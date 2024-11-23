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
  IonButton,
} from '@ionic/react';
import { star, home, trash } from 'ionicons/icons';  // Importamos el ícono de la papelera
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

  // Función para eliminar una evaluación
  const handleDelete = (name: string) => {
    const updatedItems = items.filter(item => item.name !== name);
    setItems(updatedItems);
    localStorage.setItem('historialEvaluaciones', JSON.stringify(updatedItems));
  };

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
                    <IonButton
                      fill="clear"
                      color="danger"
                      onClick={() => handleDelete(item.name)}
                    >
                      <IonIcon icon={trash} />
                    </IonButton>
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
