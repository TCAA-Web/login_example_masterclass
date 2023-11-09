import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { CreateUserPage } from './pages/CreateUserPage'
import { ProductPage } from './pages/ProductPage'
import { CartPage } from './pages/CartPage'
// The plan
// Vi skal lave en router med forskellige sider - CHECK
// Man skal kunne navigere til en login side - CHECK
// Logge ind /eller oprette ny bruger 
// Så skal vi kunne fetche eller poste til API´et med vores brugers credentials

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
              <Route index element={<HomePage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/create" element={<CreateUserPage/>}/>
              <Route path="/posters" element={<ProductPage/>}/>
              <Route path="/cart" element={<CartPage/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
