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

    try {
      // Enviar los datos al backend para registrar al nuevo usuario
      const response = await axios.post('http://tu-backend.com/api/register', {
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
          <IonItem>
            <IonLabel position="floating">Usuario</IonLabel>
            <IonInput
              type="text"
              value={username}
              placeholder="Ingrese un nombre de usuario..."
              onIonInput={(e: CustomEvent) => setUsername(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Correo Electrónico</IonLabel>
            <IonInput
              type="email"
              value={email}
              placeholder="Ingrese su correo electrónico..."
              onIonInput={(e: CustomEvent) => setEmail(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput
              type="password"
              value={password}
              placeholder="Ingrese su contraseña..."
              clearOnEdit= {false}
              onIonInput={(e: CustomEvent) => setPassword(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Confirmar Contraseña</IonLabel>
            <IonInput
              type="password"
              value={confirmPassword}  // El valor debe estar vinculado al estado confirmPassword
              placeholder="Confirme su contraseña..."
              clearOnEdit= {false}
              onIonInput={(e: CustomEvent) => {
                setConfirmPassword(e.detail.value!);  // Actualiza el estado al primer intento
              }}
            />
          </IonItem>


          <IonButton expand="block" onClick={handleRegister}>
            Registrar
          </IonButton>

          <IonText className="ion-text-center">
            <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
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

export default Register;
