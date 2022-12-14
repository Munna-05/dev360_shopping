import './App.css';
import Navigation from './Components/Navigation';
import ProductList from './Components/ProductList';
import Products from './Components/Products';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import Home from './Pages/Home';
import ProductDetailsPage from './Pages/ProductDetailsPage';

function App() {
  return (

    <div className="App ">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productDetails/id' element={<ProductDetailsPage/>} />
      </Routes>
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
