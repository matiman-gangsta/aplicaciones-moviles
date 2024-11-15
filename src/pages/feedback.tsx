import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonMenuButton, IonButtons } from '@ionic/react';
import { useLocation } from 'react-router-dom'; // Importar useLocation para recibir datos
import Breadcrumb from '../components/breadcrumb';
import { home } from 'ionicons/icons';

interface Resultado {
  ejercicio: string;
  repeticiones: number;
  objetivoRepeticiones: number;
  peso?: number;
}

const Feedback: React.FC = () => {
  const location = useLocation<{ resultados: Resultado[] }>(); // Recibir datos de la navegación
  const resultados = location.state?.resultados || [];

  const calcularPorcentaje = (realizadas: number, objetivo: number): number => {
    return Math.round((realizadas / objetivo) * 100);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonIcon icon={home} slot="start" />
          <IonTitle>Feedback del Entrenamiento</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="centrar-texto">
        <Breadcrumb />
        <h2>Feedback del Entrenamiento Realizado</h2>
        {resultados.map((resultado, index) => (
          <div key={index} style={{ marginBottom: '16px' }}>
            <h3>{resultado.ejercicio}</h3>
            <p>Repeticiones Realizadas: {resultado.repeticiones}</p>
            <p>Objetivo de Repeticiones: {resultado.objetivoRepeticiones}</p>
            <p>Porcentaje de Éxito: {calcularPorcentaje(resultado.repeticiones, resultado.objetivoRepeticiones)}%</p>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Feedback;
