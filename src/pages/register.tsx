import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonItem, IonLabel, IonText, IonToast } from '@ionic/react';
import axios from 'axios';
import './login.css';

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const isUsernameValid = username.length >= 4;
  const isPasswordValid = password.length >= 8;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = async () => {
    // Validar que las contraseñas coincidan
    if (password.trim() !== confirmPassword.trim()) {
      setToastMessage('Las contraseñas no coinciden');
      setShowToast(true);
      return;
    }

    // Validar campos vacíos
    if (!username || !password || !email) {
      setToastMessage('Por favor, completa todos los campos');
      setShowToast(true);
      return;
    }

    // Validar que el usuario y la contraseña sean válidos
    if (!isUsernameValid) {
      setToastMessage('El usuario debe tener al menos 4 caracteres');
      setShowToast(true);
      return;
    }

    if (!isPasswordValid) {
      setToastMessage('La contraseña debe tener al menos 8 caracteres');
      setShowToast(true);
      return;
    }

    // Validar el correo electrónico
    if (!isEmailValid) {
      setToastMessage('Correo electrónico inválido');
      setShowToast(true);
      return;
    }

    try {
      // Enviar los datos al backend para registrar al nuevo usuario
      const response = await axios.post('https://api-fitapp-hmakejgwhgcqauhc.eastus2-01.azurewebsites.net/api/usuarios', {
        username,
        password,
        email,
      });

      if (response.status === 201) {
        setToastMessage('Usuario registrado con éxito');
        setShowToast(true);
        // Redirigir al login
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      setToastMessage('Error al registrar el usuario');
      setShowToast(true);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding login-content">
        <div className="login-container">
          <h2 className="login-title">Registro</h2>
          
          {/* Campo de nombre de usuario */}
          <IonItem>
            <IonLabel position="floating">Usuario</IonLabel>
            <IonInput
              type="text"
              value={username}
              placeholder="Ingrese un nombre de usuario..."
              onIonInput={(e: CustomEvent) => setUsername(e.detail.value!)}
            />
          </IonItem>
          {!isUsernameValid && username !== '' && (
            <IonText color="danger" className="validation-message">
              El usuario debe tener al menos 4 caracteres.
            </IonText>
          )}

          {/* Campo de correo electrónico */}
          <IonItem>
            <IonLabel position="floating">Correo Electrónico</IonLabel>
            <IonInput
              type="email"
              value={email}
              placeholder="Ingrese su correo electrónico..."
              onIonInput={(e: CustomEvent) => setEmail(e.detail.value!)}
            />
          </IonItem>
          {!isEmailValid && email !== '' && (
            <IonText color="danger" className="validation-message">
              Correo electrónico inválido.
            </IonText>
          )}

          {/* Campo de contraseña */}
          <IonItem>
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput
              type="password"
              value={password}
              placeholder="Ingrese su contraseña..."
              clearOnEdit={false}
              onIonInput={(e: CustomEvent) => setPassword(e.detail.value!)}
            />
          </IonItem>
          {!isPasswordValid && password !== '' && (
            <IonText color="danger" className="validation-message">
              La contraseña debe tener al menos 8 caracteres.
            </IonText>
          )}

          {/* Campo de confirmar contraseña */}
          <IonItem>
            <IonLabel position="floating">Confirmar Contraseña</IonLabel>
            <IonInput
              type="password"
              value={confirmPassword}
              placeholder="Confirme su contraseña..."
              clearOnEdit={false}
              onIonInput={(e: CustomEvent) => setConfirmPassword(e.detail.value!)}
            />
          </IonItem>

          {/* Botón de registro */}
          <IonButton expand="block" onClick={handleRegister} disabled={!isUsernameValid || !isPasswordValid || !isEmailValid}>
            Registrar
          </IonButton>

          <IonText className="ion-text-center">
            <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
          </IonText>

          {/* Mensajes de error */}
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

export default Register;
