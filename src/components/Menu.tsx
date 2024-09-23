import React from 'react';
import { IonButtons, IonButton, IonContent, IonHeader, IonItem, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';

function Example() {
  const history = useHistory();

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
            <IonButton expand="full" onClick={() => history.push('/page1')}>
              Página 1
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton expand="full" onClick={() => history.push('/page2')}>
              Página 2
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton expand="full" onClick={() => history.push('/page3')}>
              Página 3
            </IonButton>
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
            <IonButton expand="full" onClick={() => history.push('/page1')}>
              Página 1
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton expand="full" onClick={() => history.push('/page2')}>
              Página 2
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton expand="full" onClick={() => history.push('/page3')}>
              Página 3
            </IonButton>
          </IonItem>
        </IonContent>
      </IonPage>
    </>
  );
}

export default Example;
