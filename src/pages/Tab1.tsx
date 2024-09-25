import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton, 
  IonIcon 
} from '@ionic/react';
import Breadcrumb from '../components/breadcrumb'; 
import { home } from 'ionicons/icons'; 


import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>Home</IonTitle>
          <IonIcon icon={home} slot="start" />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <Breadcrumb />
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="center-content">
          <img src="https://escsalud.wordpress.com/wp-content/uploads/2012/03/head_esc.jpg" alt="Imagen de bienvenida" />
          <h1 className="centrar-texto">¡Bienvenido!</h1>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
