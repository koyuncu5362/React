import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Counter from './components/Counter';
import UserV2 from './components/UserV2';

const user={
  name :"Metin",
  age:35
}
function App() {
  return (
    <div className="App" >
      
      <div>Selam</div>
      <UserV2></UserV2>
    </div>
    
  );
}

export default App;
