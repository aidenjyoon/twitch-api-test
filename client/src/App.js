import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* 
          <Route index element={<Home />} />
          <Route path="/auth" element={<Authentication />} /> 
          */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
