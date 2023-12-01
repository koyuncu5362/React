import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Counter from './components/Counter';
import UserV2 from './components/UserV2';
import Colors from './components/Colors';

const user={
  name :"Metin",
  age:35
}
function App() {
  return (
    <div className="App" >
      
      <div>Selam</div>
      <Colors></Colors>
    </div>
    
  );
}

export default App;
