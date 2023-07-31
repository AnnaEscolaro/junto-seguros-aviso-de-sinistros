import { Route, Routes } from '../../../../node_modules/react-router-dom/dist/index';
import './App.css'
import Login from './components/Login';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Dashboard /> }>
        <Route path='/login' element= { <Login /> } />
        <Route path='/form' element= { <Form /> } />
        <Route path='/*' element= { <NotFound /> } />
      </Route>
    </Routes>
  )
}

export default App;
