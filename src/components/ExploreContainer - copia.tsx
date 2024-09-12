import './ExploreContainer.css';
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function ExploreContainerr() {
  return (
    <IonCard>
      <img alt="Silhouette of mountains" src={"/public/doggy.webp"} />
      <IonCardHeader>
        <IonCardTitle>Card Titleeeeee</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
  );
}
export default ExploreContainerr;
