import React from "react";
import './App.css';
import 'bulma/css/bulma.min.css';
import PatientCard, { IPatientCard } from './components/PatientCard';

function App() {

  const data: IPatientCard = {
    name: 'Bob Miller',
    age: 25,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis ligula. In tincidunt nisl dapibus pharetra vestibulum. Nunc scelerisque ante ac nibh elementum, vitae congue odio scelerisque.',
    more_details: 'Phasellus sed massa id est varius vulputate. Maecenas mauris eros, auctor at posuere porta, gravida in diam. Nam vestibulum risus diam, eget ullamcorper diam tempor sit amet. In hac habitasse platea dictumst. Quisque non fermentum lorem, sit amet cursus mi. Aenean vitae aliquet nunc.'
  };

  return (
    <div className="App">
      <div className="container is-fullhd p-4">
      <div className="grid">
        <div className="cell">
          <PatientCard {...data} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
