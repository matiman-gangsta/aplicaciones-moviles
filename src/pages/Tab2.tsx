import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSplitPane, IonMenu, IonButtons,IonMenuButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ExploreContainerr from '../components/ExploreContainer - copia';
import './Tab2.css';
import Example from '../components/Menu';

const Tab2: React.FC = () => {
  return (
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 2</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainerr />
        </IonContent>
      </IonPage>
  );
};

export default Tab2;
