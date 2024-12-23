import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonMenuButton,
  IonButtons,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb';
import { home } from 'ionicons/icons';

interface Resultado {
  ejercicio: string;
  repeticiones: number;
  objetivoRepeticiones: number;
  peso?: number;
}


const Feedback: React.FC = () => {
  const location = useLocation<{ resultados: Resultado[] }>();
  const resultados = location.state?.resultados || [];
  const [ejerciciosDisponibles, setEjerciciosDisponibles] = useState<{ id: string; nombre: string }[]>([]);
  const hora = new Date().toLocaleTimeString();
  const obtenerNombreEjercicio = (id: string): string => {
    const ejercicio = ejerciciosDisponibles.find((ej) => ej.id === id);
    return ejercicio ? ejercicio.nombre : 'Desconocido';
  };

  const calcularPorcentaje = (realizadas: number, objetivo: number): number => {
    if (objetivo === 0) return 0;
    return Math.round((realizadas / objetivo) * 100);
  };

  // Guardar los datos en localStorage
  React.useEffect(() => {
    if (resultados.length > 0) {
      const historial = JSON.parse(localStorage.getItem('historialEvaluaciones') || '[]');
      
      // Crear los nuevos resultados a agregar
      const nuevosResultados = resultados.map((resultado) => ({
        name: resultado.ejercicio,
        description: `Repeticiones: ${resultado.repeticiones} / Objetivo: ${resultado.objetivoRepeticiones}`,
        successRate: `${calcularPorcentaje(resultado.repeticiones, resultado.objetivoRepeticiones)}%`,
      }));

      // Evitar duplicados verificando que no existan evaluaciones con el mismo nombre
      const historialFiltrado = historial.filter((item: { name: string; }) =>
        !nuevosResultados.some((nuevo) => nuevo.name === item.name)
      );

      // Guardar en localStorage solo las nuevas que no existían
      localStorage.setItem('historialEvaluaciones', JSON.stringify([...historialFiltrado, ...nuevosResultados]));

    }
  }, [resultados]);

  useEffect(() => {
    const fetchEjercicios = async () => {
      try {
        const response = await axios.get('https://api-fitapp-hmakejgwhgcqauhc.eastus2-01.azurewebsites.net/api/ejercicios'); // Cambia la URL por la de tu API
        setEjerciciosDisponibles(response.data);
      } catch (error) {
        console.error('Error al recuperar los ejercicios:', error);
      }
    };
  
    fetchEjercicios();
    
  }, []);


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
            <p>
              Porcentaje de Éxito: {calcularPorcentaje(resultado.repeticiones, resultado.objetivoRepeticiones)}%
            </p>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Feedback;
