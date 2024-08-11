import './App.css';
import Header from './components/Header';
import UserForm from './components/UserForm';
import CurrentJumper from './components/CurrentJumper';

function App() {
  return (
    <div className="App">
      <Header />
      <UserForm />
      <CurrentJumper />
    </div>
  );
}

export default App;
