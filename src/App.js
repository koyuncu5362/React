import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Counter from './components/Counter';

const user={
  name :"Metin",
  age:35
}
function App() {
  return (
    <div className="App" >
      
      <div>Selam</div>
      <Counter/>
    </div>
    
  );
}

export default App;
