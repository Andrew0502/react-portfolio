import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.jsx"

function App() {
  return (
    <>
    <Router>
    <Header/>
    <div className="App">
        <h1>Hello world!</h1>
    </div>
    </Router>
    </>
  );
}

export default App;