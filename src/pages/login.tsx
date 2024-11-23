import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonItem, IonLabel, IonText, IonToast } from '@ionic/react';
import axios from 'axios'; // Asegúrate de instalar axios: npm install axios
import './login.css'; 

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://tu-backend.com/api/login', { username, password });
      
      if (response.data.token) {
        // Guardar el token en el almacenamiento local (localStorage o sessionStorage)
        localStorage.setItem('authToken', response.data.token);
        // Redirigir a la página principal (ajusta la ruta según tu aplicación)
        window.location.href = '/tab1';
      }
    } catch (error) {
      console.error('Error al hacer login:', error);
      setToastMessage('Usuario o contraseña incorrectos');
      setShowToast(true);
    }
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

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message={toastMessage}
            duration={2000}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
