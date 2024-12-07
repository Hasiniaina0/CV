import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Badges from "./Components/Badges";
import Resume from "./Components/Resume";
import Experience from "./Components/Experience";
import Formation from "./Components/Formation";

function App() {
  return (
    <div className="App">
      <Header />
      <Badges />
      <Resume />
      <Experience />
      <Formation />
    </div>
  );
}

export default App;
