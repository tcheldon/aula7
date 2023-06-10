import './App.css';
import List from './components/List';

function App() {

  const users = [
    {
        id: 0,
        name: 'Neymar',
        time: 'Paris San German'
    },
    {
        id: 1,
        name: 'Messi',
        time: 'Inter Miami'
    },
    {
        id: 2,
        name: 'Vini Jr',
        time: 'Real Madrid'
    }
];

  return (
    <div>
      <List items = {users} />
    </div>
  );
}

export default App;