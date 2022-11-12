import './App.css';
import { createBrowserHistory } from 'history'
import {BrowserRouter , Switch } from 'react-router-dom'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate'
import { UserTemplate } from './templates/UserTemplate/UserTemplate'
import {AdminTemplate } from './templates/AdminTemplate/AdminTemplate'
import {CheckTemplate } from './templates/CheckTemplate/CheckTemplate'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Admin from './pages/Admin/Admin'
import FilmHot from './pages/FilmHot/FilmHot'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import AddUser from './pages/Admin/Users/AddUser/AddUser'
import Detail from './pages/Detail/Detail'
import Checkout from './pages/Checkout/Checkout'
import Profile from "./pages/Profile/Profile"
import {Supense,lazy} from 'react'

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
  <BrowserRouter >
    <Switch>
     <HomeTemplate path="/" exact Component={Home}/>
     <HomeTemplate path="/home" exact Component={Home}/>
     <HomeTemplate path="/contact" exact Component={Contact}/>
     <HomeTemplate path="/filmhot" exact Component={FilmHot}/>
     <HomeTemplate path="/detail/:id" exact Component={Detail}/>
     <HomeTemplate path="/profile" exact component={Profile} />
     <UserTemplate path="/login" exact Component={Login}/>
     <UserTemplate path="/register" exact Component={Register}/>
     {/* <Supense fallback={<h1>LOADING...</h1>}> */}
     <CheckTemplate path="/checkout/:id" exact Component={Checkout}/>
     {/* </Supense> */}
     <AdminTemplate path="/admin" exact Component={Admin}/>
     <AdminTemplate path='/admin/user/adduser' exact Component={AddUser}/>
    </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;


