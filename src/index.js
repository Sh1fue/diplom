import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apps from "./App";
import Catalogs from "./Catalog.js"
import Contacts from "./Contact"
import RegistrationForm from "./Components/register.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Apps />} />
        <Route path="/Catalog" element={<Catalogs />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="/reg" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));