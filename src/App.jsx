import "./App.css";
import {
  Navbar,
  Bodycontent,
  Mediacontent,
  Footercontent,
} from "./components/componentExport.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Bodycontent />
      <Mediacontent />
      <Footercontent />
    </div>
  );
}

export default App;
