import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenu, IonMenuButton, IonSplitPane } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Example from '../components/Menu';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonSplitPane contentId="main"></IonSplitPane>
        <IonMenu contentId="main"></IonMenu>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
          <IonTitle>Mi primera Aplicacion Movil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen id="main-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contenido de la app</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
