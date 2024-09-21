import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton, 
  IonSplitPane, 
  IonMenu 
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Example from '../components/Menu';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonSplitPane contentId="main-content">
      {/* Aquí renderizamos el menú */}
      <IonMenu contentId="main-content">
        <Example />
      </IonMenu>

      {/* Aquí renderizamos el contenido principal */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 1</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer />
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default Tab1;
