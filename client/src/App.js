import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.component";
import NavBar from "./components/NavBar/NavBar.component";
import LoginPage from "./pages/Login/Login.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
