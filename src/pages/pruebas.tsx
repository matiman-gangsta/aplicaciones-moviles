import React, { useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { addCircleOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom'; // Para navegar a la página de registro de ejercicios

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

const ListaPruebas: React.FC = () => {
  const [pruebas, setPruebas] = useState<Prueba[]>([]);
  const [nombrePrueba, setNombrePrueba] = useState<string>('');
  const history = useHistory(); // Hook para la navegación

  const agregarPrueba = () => {
    if (nombrePrueba.trim()) {
      const nuevaPrueba: Prueba = {
        id: pruebas.length + 1,
        nombre: nombrePrueba,
        ejercicios: [], // Inicialmente sin ejercicios
      };
      setPruebas([...pruebas, nuevaPrueba]);
      setNombrePrueba(''); // Limpiar el campo de entrada después de agregar
    }
  };

  const asignarEjercicios = (idPrueba: number) => {
    history.push(`/registro-ejercicios/${idPrueba}`); // Navega a la página de registro de ejercicios con el id de la prueba
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Pruebas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem>
          <IonLabel position="floating">Nombre de la Prueba</IonLabel>
          <IonInput
            type="text"
            value={nombrePrueba}
            onIonChange={(e: CustomEvent) => setNombrePrueba(e.detail.value as string)}
          />
        </IonItem>

        <IonButton expand="full" color="primary" onClick={agregarPrueba}>
          <IonIcon slot="start" icon={addCircleOutline} />
          Agregar Prueba
        </IonButton>

        <IonList>
          {pruebas.map((prueba) => (
            <IonItem key={prueba.id}>
              <IonLabel>
                <h2>{prueba.nombre}</h2>
                <p>{prueba.ejercicios.length} ejercicios asignados</p>
              </IonLabel>
              <IonButton slot="end" onClick={() => asignarEjercicios(prueba.id)}>
                Asignar Ejercicios
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </>
  );
};

export default ListaPruebas;
