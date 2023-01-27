// import '../stylesheets/App.css';
import Home from "./Home";
import Main from "./Main";
import Signin from "./Signin";
import { Route, Routes } from "react-router-dom";
import SingleVideo from "./SingleVideo";
import Music from "./Music";
import Hollywood from "./Hollywood";
import Trending from "./Trending";
import Latest from "./Latest";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} exact></Route>
        <Route path="/" element={<Home />} exact> </Route>
        <Route path="/main" element={<Main />} exact></Route>
        <Route path="/music" element={<Music />} exact></Route>
        <Route path="/hollywood" element={<Hollywood />} exact></Route>
        <Route path="/trending" element={<Trending />} exact></Route>
        <Route path="/latest" element={<Latest />} exact></Route>
        <Route path="/singlevideo/:id" component={<SingleVideo />} exact />
      </Routes>
    </>
  );
}

export default App;
//vandana