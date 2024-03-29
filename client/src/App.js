import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./components/homepage/Home";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyles/>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </Router>
    </> 
  );
}

export default App;
