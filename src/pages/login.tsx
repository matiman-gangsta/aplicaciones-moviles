import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonLabel, IonText } from '@ionic/react';
import './login.css'; 

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding login-content">
        <div className="login-container">
          <h2 className="login-title">Ingresar</h2>
          <IonItem>
            <IonLabel position="floating">Usuario</IonLabel>
            <IonInput
              type="text"
              value={username}
              placeholder="Ingrese usuario..."
              onIonChange={(e: CustomEvent) => setUsername(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput
              type="password"
              value={password}
              placeholder="Ingrese su contraseña..."
              onIonChange={(e: CustomEvent) => setPassword(e.detail.value!)}
            />
          </IonItem>

          <IonButton expand="block" onClick={handleLogin}>
            Ingresar
          </IonButton>

          <IonText className="ion-text-center">
            <p>Aun no tienes una cuenta? <a href="/register">Regístrate</a></p>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
