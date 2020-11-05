import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <>
    <Router>
    <Header/>
    <div className="App">
       
          <Switch>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
       
      </div>
     
      
      <div className="fixed"> 
    <Footer/>  
    </div>
    </Router>
    </>
  );
}

export default App;