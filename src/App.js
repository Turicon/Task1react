import {useEffect} from "react";
import Layout from "./Components/Layout/Layout";
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter} from 'react-router-dom'
import Routing from "./Components/Layout/Routing";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);
  return (
    <BrowserRouter>
       <Layout>
      <div className="App">
        <Routing />
      </div>
    </Layout>
    </BrowserRouter>
 

  );
}

export default App;
