import './App.css';
import { compareFn } from './fns/compareFn';
import Cover from './pages/Cover/cover';
import Navbar from './components/Navbar/navbar';
import ItemCounter from './components/ItemCounter/itemCounter';
import ItemListContainer from './pages/ItemListContainer/itemListContainer';
import Item from './components/Item/index';
import ItemList from './components/ItemList/index';
import ItemDetailContainer from './pages/ItemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/cart';

function App() {
  return (
    <BrowserRouter>
    <div className='App App-header'>
    <Navbar />
      <Routes>
        <Route path='/' element={<Cover greeting={"El primer e-Commerce de Frutas del Diablo."} />} />
        <Route path='/products' element={<ItemListContainer compareFn={compareFn} ItemList={ItemList} Item={Item} Counter={ItemCounter} />} />
        <Route path='/products/:id' element={<ItemDetailContainer Counter={ItemCounter} />}/>
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
