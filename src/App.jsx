import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import {Nav} from "./components/Nav/Nav";  

function App() {
 

  return (
    <>
      <BrowserRouter>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer titulo={"Bienvenidos"} />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
