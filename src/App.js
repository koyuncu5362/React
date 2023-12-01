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
      <User data={user} friends={["mahmut","ayşe","fatma"]}/>
    </div>
    
  );
}

export default App;
