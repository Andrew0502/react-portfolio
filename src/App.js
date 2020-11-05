import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
    <Router>
    <Header/>
    <div className="App">
        <h1>Hello world!</h1>
    <Footer/>  
    </div>
    </Router>
    </>
  );
}

export default App;