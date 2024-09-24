import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonMenu,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import RegistroEjercicios from './pages/registroejercicios';
import RegistroPersonal from './pages/registropersonal'; 
import Recomendaciones from './pages/recomendaciones';
import Explicaciones from './pages/explicaciones';
import Login from './pages/login';
import feedback from './pages/feedback';
import HistorialEvaluaciones from './pages/historial';
import Example from './components/Menu';
import page1 from './pages/page1';
import ejercicios from "./pages/ejercicios"
import Item1 from './pages/Page1_Item1';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Ionic Dark Mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

interface Prueba {
  id: number;
  nombre: string;
  ejercicios: any[];
}

const App: React.FC = () => {

  const [pruebas, setPruebas] = useState<Prueba[]>([]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main-content">   
          <Example children={undefined} />
          <IonTabs>
            <IonRouterOutlet id="main-content">
              <Route path="/tab1" component={Tab1} exact={true} />
              <Route path="/page1" component={page1} />
              <Route path="/page1_item1" component={Item1} />
              <Route 
                path="/registro-ejercicios/:idPrueba" 
                render={(props) => (
                  <RegistroEjercicios
                    {...props} 
                    pruebas={pruebas} 
                    setPruebas={setPruebas} 
                  />
                )} 
              />

              <Redirect exact from="/" to="/login" />
              <Route path="/recomendaciones" component={Recomendaciones} />
              <Route path="/explicaciones" component={Explicaciones} />
              <Route path="/login" component={Login} exact={true} />
              <Route path="/ejercicios" component={ejercicios} exact={true} />
              <Route path="/feedback" component={feedback} exact={true} />
              <Route path="/historial" component={HistorialEvaluaciones} exact={true} />
              <Route path="/registro-personal" component={RegistroPersonal} exact={true} />

            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon aria-hidden="true" icon={triangle} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
