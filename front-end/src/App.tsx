import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import Form from './pages/Form';
import Dashboard from './components/Dashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Dashboard /> }>
        <Route path='/' element= { <Login /> } />
        <Route path='/form' element= { <Form /> } />
        <Route path='/*' element= { <NotFound /> } />
      </Route>
    </Routes>
  )
}

export default App;