import React from 'react';
import { IonButtons, IonButton, IonContent, IonHeader, IonItem, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonRouterLink, IonIcon } from '@ionic/react';
import Page1 from '../pages/page1';
import { home } from 'ionicons/icons';
function Example({ children }) {
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
              <IonButton routerLink='/page1' style={{ width: '100%' }} expand="full">
                Listado pruebas
              </IonButton>
          </IonItem>
          <IonItem>
            <IonRouterLink routerLink="/registro-pruebas" style={{ width: '100%' }}>
              <IonButton expand="full">
                Registro pruebas
              </IonButton>
            </IonRouterLink>
          </IonItem>
          <IonItem>
              <IonButton routerLink='/explicaciones' style={{ width: '100%' }} expand="full">
                Explicaciones
              </IonButton>
          </IonItem>
          <IonItem>
              <IonButton routerLink='/page1' style={{ width: '100%' }} expand="full">
                Listado pruebas
              </IonButton>
          </IonItem>
          <IonItem>
              <IonButton routerLink='/ejercicios' style={{ width: '100%' }} expand="full">
                Ejercicios
              </IonButton>
          </IonItem>
          <IonItem>
              <IonButton routerLink='/feedback' style={{ width: '100%' }} expand="full">
                Feedback
              </IonButton>
          </IonItem>
          <IonItem>
              <IonButton routerLink='/historial' style={{ width: '100%' }} expand="full">
                Historial
              </IonButton>
          </IonItem>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            {/* Botón del menú */}
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>My App</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          {children} {/* Aquí se renderiza el contenido de la página */}
        </IonContent>
      </IonPage>


    </>
  );
}

export default Example;

