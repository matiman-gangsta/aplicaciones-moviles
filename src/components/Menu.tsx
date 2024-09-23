import React from 'react';
import { IonButtons, IonContent, IonHeader, IonItem, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';

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
          {/* Agregamos tres textos con enlaces a otras páginas */}
          <IonItem>
            <Link to="/page1">Página 1</Link>
          </IonItem>
          <IonItem>
            <Link to="/page2">Página 2</Link>
          </IonItem>
          <IonItem>
            <Link to="/page3">Página 3</Link>
          </IonItem>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          Tap the button in the toolbar to open the menu.
          <IonItem>
            <Link to="/page1">Página 1</Link>
          </IonItem>
          <IonItem>
            <Link to="/page2">Página 2</Link>
          </IonItem>
          <IonItem>
            <Link to="/page3">Página 3</Link>
          </IonItem>
        </IonContent>
      </IonPage>
    </>
  );
}

export default Example;
