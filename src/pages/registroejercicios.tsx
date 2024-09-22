import React, { useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/react';
import { useParams } from 'react-router-dom'; // Para obtener el ID de la prueba
import { useHistory } from 'react-router-dom'; // Para redirigir después de agregar el ejercicio

interface Ejercicio {
  nombre: string;
  repeticiones: number;
  tipo: string;
}

interface Prueba {
  id: number;
  nombre: string;
  ejercicios: Ejercicio[];
}

interface RegistroEjerciciosProps {
  pruebas: Prueba[];
  setPruebas: React.Dispatch<React.SetStateAction<Prueba[]>>;
}

const RegistroEjercicios: React.FC<RegistroEjerciciosProps> = ({ pruebas, setPruebas }) => {
  const { idPrueba } = useParams<{ idPrueba: string }>(); // Obtenemos el ID de la prueba
  const history = useHistory();
  const [nombreEjercicio, setNombreEjercicio] = useState<string>('');
  const [repeticiones, setRepeticiones] = useState<number | ''>(0);
  const [tipoEjercicio, setTipoEjercicio] = useState<string>('');

  const registrarEjercicio = () => {
    const ejercicio: Ejercicio = {
      nombre: nombreEjercicio,
      repeticiones: Number(repeticiones),
      tipo: tipoEjercicio,
    };

    // Buscamos la prueba por ID y le agregamos el ejercicio
    const nuevasPruebas = pruebas.map(prueba => {
      if (prueba.id === Number(idPrueba)) {
        return { ...prueba, ejercicios: [...prueba.ejercicios, ejercicio] };
      }
      return prueba;
    });

    setPruebas(nuevasPruebas);
    history.push('/lista-pruebas'); // Redirigimos de vuelta a la lista de pruebas
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registrar Ejercicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem>
          <IonLabel position="floating">Nombre del Ejercicio</IonLabel>
          <IonInput
            type="text"
            value={nombreEjercicio}
            onIonChange={(e: CustomEvent) => setNombreEjercicio(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Repeticiones</IonLabel>
          <IonInput
            type="number"
            value={repeticiones}
            onIonChange={(e: CustomEvent) => setRepeticiones(Number(e.detail.value!))}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Tipo de Ejercicio</IonLabel>
          <IonInput
            type="text"
            value={tipoEjercicio}
            onIonChange={(e: CustomEvent) => setTipoEjercicio(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="full" onClick={registrarEjercicio}>
          Registrar Ejercicio
        </IonButton>
      </IonContent>
    </>
  );
};

export default RegistroEjercicios;
