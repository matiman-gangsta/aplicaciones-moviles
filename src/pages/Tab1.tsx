import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton, 
  IonSplitPane, 
  IonMenu,
  IonIcon 
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Example from '../components/Menu';
import Breadcrumb from '../components/breadcrumb'; 
import { home } from 'ionicons/icons'; 

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Tab 1</IonTitle>
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
          <ExploreContainer />
        </IonContent>
      </IonPage>
  );
};

export default Tab1;
