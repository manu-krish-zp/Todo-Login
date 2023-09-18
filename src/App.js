import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Tasks from "./components/tasks";
import About from "./components/about";
import { useState } from "react";
import Login from "./components/login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getContent = () => {
    if (isLoggedIn) {
      return (
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      );
    }
    else{
      return ( <Login setIsLoggedIn={setIsLoggedIn}/>)
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Todo List</h1>
          <h4>Tasks to be completed today</h4>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <main>
          {getContent()}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
