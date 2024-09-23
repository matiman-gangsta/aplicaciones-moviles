import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenu, IonMenuButton, IonSplitPane } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Example from '../components/Menu';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Example />
    </IonPage>
  );
};

export default Home;
