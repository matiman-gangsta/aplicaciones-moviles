import React from 'react';
import { 
  IonButtons, 
  IonButton, 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonMenu, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonRouterLink, 
  IonIcon,
  useIonRouter, 
  IonMenuToggle
} from '@ionic/react';
import { home } from 'ionicons/icons'; 

const Example: React.FC<{children: React.ReactNode}> = ({ children }) => {
 
  return (
    <>
      <IonMenu contentId="main-content" swipeGesture={false}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
          <IonItem>
            <IonButton routerLink='/listadopruebas' style={{ width: '100%' }} expand="full">
              Listado pruebas
            </IonButton>
          </IonItem>
          <IonItem>
            <IonRouterLink routerLink="/registro-ejercicios" style={{ width: '100%' }}>
              <IonButton expand="full">
                Registro ejercicios
              </IonButton>
            </IonRouterLink>
          </IonItem>
          <IonItem>
            <IonButton routerLink='/entrenamiento' style={{ width: '100%' }} expand="full">
              Registro Entrenamiento
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton routerLink='/registro-personal' style={{ width: '100%' }} expand="full">
              Registro Personal
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton routerLink='/historial' style={{ width: '100%' }} expand="full">
              Historial
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton routerLink='/login' style={{ width: '100%' }} expand="full">
              Cerrar Sesion
            </IonButton>
            <IonButton routerLink='/test_bbdd' style={{ width: '100%' }} expand="full">
              test_bbdd
            </IonButton>
          </IonItem>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>My App</IonTitle>
            <IonIcon icon={home} slot="end" style={{ fontSize: '20px' }} />
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          {children} {/* Renderizado de los hijos */}
        </IonContent>
      </IonPage>
    </>
  );
}

export default Example;
