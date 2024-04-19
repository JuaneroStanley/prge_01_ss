import "./App.css";
import Home from "./components/home/Home";

function App() {
  const name = "Hello World!";

  return (
    <div className="App">
      <Home text={name} />
    </div>
  );
}

export default App;
