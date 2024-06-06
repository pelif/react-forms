import './App.css';
import Myform from './components/Myform';

function App() {
  return (
    <div className="App">
      <h2>Forms React</h2>
      <Myform user={{ name: 'Pelif', email: 'pelif@bol.com.br', bio: 'This is my Bio ...', role: '' }} />
    </div>
  );
}

export default App;
