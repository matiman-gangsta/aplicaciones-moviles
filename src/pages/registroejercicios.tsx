import React, { useState, useEffect } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonPage,
  IonToast,
  IonSelect,
  IonSelectOption
} from '@ionic/react';
import { useParams, useHistory } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb';
import { home } from 'ionicons/icons';
import axios from 'axios';

export interface Ejercicio {
  nombre: string;
  repeticiones: number;
  tipo: string;
  explicacion: string;
  recomendaciones: string;
}

export interface Prueba {
  id: number;
  nombre: string;
  ejercicios: Ejercicio[];
}

interface RegistroEjerciciosProps {
  pruebas: Prueba[];
  setPruebas: React.Dispatch<React.SetStateAction<Prueba[]>>;
}

const RegistroEjercicios: React.FC<RegistroEjerciciosProps> = ({ pruebas, setPruebas }) => {

  const history = useHistory();

  const [nombreEjercicio, setNombreEjercicio] = useState<string>('');
  const [repeticiones, setRepeticiones] = useState<number | ''>(0);
  const [tipoEjercicio, setTipoEjercicio] = useState<string>('');
  const [explicacion, setExplicacion] = useState<string>('');
  const [recomendaciones, setRecomendaciones] = useState<string>('');
  const [pruebaSeleccionada, setPruebaSeleccionada] = useState<number | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [cargandoPruebas, setCargandoPruebas] = useState<boolean>(true);
  const [idPrueba, setIdPrueba] = useState<number | null>(null);
  const [pruebaId, setpruebaId] = useState<number | null>(null);
  


  const API_URL = 'https://api-fitapp-hmakejgwhgcqauhc.eastus2-01.azurewebsites.net/api'; // Cambia por el endpoint real

    // useEffect para cargar las pruebas al montar el componente
    useEffect(() => {
      const cargarPruebas = async () => {
        try {
          const response = await axios.get('https://api-fitapp-hmakejgwhgcqauhc.eastus2-01.azurewebsites.net/api/pruebas'); // Endpoint real para obtener pruebas
          setPruebas(response.data);  // Actualiza el estado con los datos obtenidos
          setCargandoPruebas(false);  // Cambia el estado de carga
          console.log('guh');
        } catch (error) {
          console.error('Error al cargar pruebas:', error);
          setCargandoPruebas(false); // También cambia el estado de carga en caso de error
        }
      };
  
      cargarPruebas(); // Llamada a la función asíncrona
    }, []); // El array vacío significa que se ejecuta solo una vez al montar el componente
  
    // Mostrar un indicador de carga o la lista de pruebas
    if (cargandoPruebas) {
      return <div>Cargando pruebas...</div>; // Mensaje de carga mientras las pruebas están siendo obtenidas
    }

    const registrarEjercicio = async () => {
      if (!nombreEjercicio || !repeticiones || !tipoEjercicio || !pruebaSeleccionada) {
        setToastMessage('Por favor, completa todos los campos obligatorios y selecciona una prueba.');
        setShowToast(true);
        return;
      }
    
      const ejercicio: Ejercicio = {
        nombre: nombreEjercicio,
        repeticiones: Number(repeticiones),
        tipo: tipoEjercicio,
        explicacion,
        recomendaciones,
      };
    
      try {
        const response = await axios.post(`${API_URL}/ejercicios_prueba`, {
          ...ejercicio,
          pruebaId: Number(pruebaSeleccionada), // Asegúrate de enviar pruebaId como número
        });
    
        if (response.status === 201) {
          const nuevasPruebas = pruebas.map((prueba) =>
            prueba.id === Number(pruebaSeleccionada)
              ? { ...prueba, ejercicios: [...prueba.ejercicios, response.data] }
              : prueba
          );
    
          setPruebas(nuevasPruebas);
          setToastMessage('Ejercicio registrado exitosamente.');
          setShowToast(true);
          history.push('/listadopruebas');
        }
      } catch (error) {
        console.error('Error al registrar el ejercicio:', error.response.status, error.message, error);
        const errorMessage = error.response?.data?.message || 'Error al registrar el ejercicio.';
        setToastMessage(errorMessage);
        setShowToast(true);
      }
    };

  const irARecomendaciones = () => {
    history.push(`/recomendaciones/${recomendaciones}`);
  };

  const irAExplicaciones = () => {
    // Pasamos tanto explicacion como recomendaciones a la URL
    history.push(`/explicaciones/${explicacion}/${recomendaciones}`);
  };

    // Función para mostrar los datos seleccionados en un alert
    const mostrarDatos = () => {
      const pruebaSeleccionada = pruebas.find((prueba) => prueba.id === idPrueba);
  
      if (pruebaSeleccionada) {
        alert(`
          Nombre del Ejercicio: ${nombreEjercicio}
          Repeticiones: ${repeticiones}
          Tipo de Ejercicio: ${tipoEjercicio}
          Explicación: ${explicacion}
          Recomendaciones: ${recomendaciones}
          Prueba Asignada: ${pruebaSeleccionada}
        `);
      } else {
        alert('Por favor, selecciona una prueba.');
      }
    };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonIcon icon={home} slot="start" />
            <IonTitle>Registrar Ejercicio</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <Breadcrumb />
          <IonItem>
            <IonLabel position="stacked">Nombre del Ejercicio</IonLabel>
            <IonInput
              type="text"
              value={nombreEjercicio}
              onIonInput={(e: CustomEvent) => setNombreEjercicio(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Repeticiones</IonLabel>
            <IonInput
              type="number"
              value={repeticiones}
              onIonInput={(e: CustomEvent) => setRepeticiones(Number(e.detail.value!))}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Tipo de Ejercicio</IonLabel>
            <IonInput
              type="text"
              value={tipoEjercicio}
              onIonInput={(e: CustomEvent) => setTipoEjercicio(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Explicación</IonLabel>
            <IonInput
              type="text"
              value={explicacion}
              onIonInput={(e: CustomEvent) => setExplicacion(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Recomendaciones</IonLabel>
            <IonInput
              type="text"
              value={recomendaciones}
              onIonInput={(e: CustomEvent) => setRecomendaciones(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Asignar a Prueba</IonLabel>
            <IonSelect
              value={pruebaSeleccionada}
              placeholder="Selecciona una prueba"
              onIonChange={(e: CustomEvent) => {
                const selectedValue = (e.detail.value);  // Convierte a número
                setPruebaSeleccionada(selectedValue);  // Actualiza el estado con el valor seleccionado
                console.log('Valor seleccionado para la prueba:', selectedValue, pruebaId);}}  // Muestra el valor seleccionado
            >
              {pruebas.map((prueba) => (
                <IonSelectOption key={prueba.id} value={prueba.id}>
                  {prueba.nombre}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>

          <IonButton expand="full" onClick={registrarEjercicio}>
            Registrar Ejercicio
          </IonButton>
          
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message={toastMessage}
            duration={2000}
          />
        </IonContent>
      </IonPage>
    </>
  );
};

export default RegistroEjercicios;
