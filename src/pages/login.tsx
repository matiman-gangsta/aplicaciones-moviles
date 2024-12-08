import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonItem, IonLabel, IonText, IonToast } from '@ionic/react';
import axios from 'axios'; // Asegúrate de instalar axios: npm install axios
import './login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const isUsernameValid = username.length >= 4;
  const isPasswordValid = password.length >= 8;

  const handleLogin = async () => {
    if (!isUsernameValid) {
      setToastMessage('El usuario debe tener al menos 4 caracteres.');
      setShowToast(true);
      return;
    }

    if (!isPasswordValid) {
      setToastMessage('La contraseña debe tener al menos 8 caracteres.');
      setShowToast(true);
      return;
    }

    try {
      const response = await axios.post('https://api-fitapp-hmakejgwhgcqauhc.eastus2-01.azurewebsites.net/api/login2', { username, password });
      
      if (response.data.token) {
        // Guardar el token en el almacenamiento local (localStorage o sessionStorage)
        localStorage.setItem('authToken', response.data.token);
        // Redirigir a la página principal (ajusta la ruta según tu aplicación)
        window.location.href = '/tab1';
      }
    } catch (error) {
      console.error('Error al hacer login:', error);
      setToastMessage('Usuario o contraseña incorrectos.');
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
              onIonInput={(e: CustomEvent) => setUsername(e.detail.value!)}
            />
          </IonItem>
          {!isUsernameValid && username !== '' && (
            <IonText color="danger" className="validation-message">
              El usuario debe tener al menos 4 caracteres.
            </IonText>
          )}

          <IonItem>
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput
              type="password"
              value={password}
              placeholder="Ingrese su contraseña..."
              onIonInput={(e: CustomEvent) => setPassword(e.detail.value!)}
            />
          </IonItem>
          {!isPasswordValid && password !== '' && (
            <IonText color="danger" className="validation-message">
              La contraseña debe tener al menos 8 caracteres.
            </IonText>
          )}

          <IonButton expand="block" onClick={handleLogin} disabled={!isUsernameValid || !isPasswordValid}>
            Ingresar
          </IonButton>

          <IonText className="ion-text-center">
            <p>Aún no tienes una cuenta? <a href="/register">Regístrate</a></p>
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
