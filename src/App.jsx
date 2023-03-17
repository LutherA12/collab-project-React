import './App.css';
import {
  User,
  CardOverview,
  AddTransaction,
  Transactions,
  Container,
} from './components/componentExport.jsx';

function App() {
  return (
    <Container>
      <User />
      <main>
        <CardOverview />
        <AddTransaction />
        <Transactions />
      </main>
    </Container>
  );
}

export default App;
