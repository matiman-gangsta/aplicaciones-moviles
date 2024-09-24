import './ExploreContainer.css';
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ExploreContainerProps {
  alias: string;
}

const ExploreContainer: React.FC<ExploreContainerProps> = ({ alias }) => {
  return (
    <IonCard>
      <img alt="Silhouette of mountains" src={"/public/nuevo.webp"} />
      <IonCardHeader>
        <IonCardTitle>{alias}</IonCardTitle>
        <IonCardSubtitle>Estudiante DUOC UC</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>(Indicadores antropométricos, ejercicios con mayor desempeño)</IonCardContent>
    </IonCard>
  );
}

export default ExploreContainer;
