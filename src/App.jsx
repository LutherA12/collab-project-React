import './App.css';
import {
  User,
  CardOverview,
  AddTransaction,
  Transactions,
  Container,
  Card,
} from './components/componentExport.jsx';

function App() {
  return (
    <Container>
      <User />
      <main className="card">
        <CardOverview />
        <AddTransaction />
        <Transactions />
      </main>
    </Container>
  );
}

export default App;
