import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar} from '@ionic/react';
import './dashboard.css';
import { text } from 'ionicons/icons';
  
 

const Dashboard: React.FC = () => {

  const clickOnEventButton = () =>{
    console.log(text);
  }
   
  return (
<IonPage>
  <IonHeader>
  <IonToolbar>
       <IonButtons slot="start">
          <IonMenuButton color="success" />
       </IonButtons>
       <IonTitle>Dashboard</IonTitle>
    </IonToolbar>
  </IonHeader>
 <IonContent>
  <IonSearchbar></IonSearchbar>
  <IonGrid>
    <IonRow>
      <IonCol size='12'>
        <IonButton expand='block' onClick={clickOnEventButton}></IonButton>
      </IonCol>
    </IonRow>
  </IonGrid>
 </IonContent>
</IonPage>
      );
      
  }
      export default Dashboard;
    
