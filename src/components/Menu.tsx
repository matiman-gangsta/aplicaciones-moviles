import React from 'react';
import { IonButtons, IonButton, IonContent, IonHeader, IonItem, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonRouterLink, IonIcon } from '@ionic/react';
import Page1 from '../pages/page1';
import { home } from 'ionicons/icons';
function Example() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
              <IonButton routerLink='/page1'>
                Página 1
              </IonButton>
          </IonItem>
          <IonItem>
            <IonRouterLink routerLink="/page1" style={{ width: '100%' }}>
              <IonButton expand="full">
                Página 2
              </IonButton>
            </IonRouterLink>
          </IonItem>
          <IonItem>
            <IonRouterLink routerLink="/page3" style={{ width: '100%' }}>
              <IonButton expand="full">
                Página 3
              </IonButton>
            </IonRouterLink>
          </IonItem>
        </IonContent>
      </IonMenu>


    </>
  );
}

export default Example;

