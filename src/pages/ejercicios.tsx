import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonLabel,
  IonChip
} from '@ionic/react';
import { star, home } from 'ionicons/icons';
import Breadcrumb from '../components/breadcrumb';

const Ejercicios: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const items = [
    { name: "Ejercicio 1", description: "Descripción del ejercicio 1 de fuerza", route: "/ejercicios/item1", category: "Fuerza" },
    { name: "Ejercicio 2", description: "Descripción del ejercicio 2 de velocidad", route: "/ejercicios/item2", category: "Velocidad" },
    { name: "Ejercicio 3", description: "Descripción del ejercicio 3 de destreza", route: "/ejercicios/item3", category: "Destreza" },
    { name: "Ejercicio 4", description: "Descripción del ejercicio 4 de fuerza", route: "/ejercicios/item4", category: "Fuerza" },
  ];

  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items;

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ejercicios</IonTitle>
          <IonIcon icon={home} slot="start" />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Breadcrumb />

        <div style={{ marginBottom: '16px' }}>
          <IonChip 
            onClick={() => setSelectedCategory('Fuerza')} 
            style={{ backgroundColor: selectedCategory === 'Fuerza' ? 'rgba(255, 0, 0, 0.9)' : 'rgba(255, 0, 0, 0.7)', color: 'white' }}>
            <IonLabel>Fuerza</IonLabel>
          </IonChip>
          <IonChip 
            onClick={() => setSelectedCategory('Velocidad')} 
            style={{ backgroundColor: selectedCategory === 'Velocidad' ? 'rgba(0, 0, 255, 0.9)' : 'rgba(0, 0, 255, 0.7)', color: 'white' }}>
            <IonLabel>Velocidad</IonLabel>
          </IonChip>
          <IonChip 
            onClick={() => setSelectedCategory('Destreza')} 
            style={{ backgroundColor: selectedCategory === 'Destreza' ? 'rgba(0, 128, 0, 0.9)' : 'rgba(0, 128, 0, 0.7)', color: 'white' }}>
            <IonLabel>Destreza</IonLabel>
          </IonChip>
          <IonChip 
            onClick={() => setSelectedCategory(null)} 
            style={{ backgroundColor: !selectedCategory ? 'rgba(200, 200, 200, 0.9)' : 'rgba(200, 200, 200, 0.7)', color: 'black' }}>
            <IonLabel>Todos</IonLabel>
          </IonChip>
        </div>

        <IonList>
          {filteredItems.map((item, index) => (
            <IonItem key={index} routerLink={item.route}>
              <IonIcon icon={star} slot="start" />
              <IonLabel>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Ejercicios;
