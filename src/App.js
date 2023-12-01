import logo from './logo.svg';
import './App.css';
import User from './components/User';

const user={
  name :"Metin",
  age:35
}
function App() {
  return (
    <div className="App" >
      
      <div>Selam</div>
      <User 
      title="Don't use Default Prop"

      name="Metin" 
      age={11}
      
      />
    </div>
    
  );
}

export default App;
