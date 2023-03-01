import "./App.css";
import { User } from "./component/user/User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./component/login/Login";
import Register from "./component/register/Register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userAuth, userLoad } from "./Action/user";
import { Loading } from "./component/Loading/Loading";

function App() {
  const dispatch = useDispatch();

  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const token=localStorage.getItem('token');
    console.log(token);

    dispatch(userLoad(token));
    dispatch(userAuth(token));
  }, [dispatch]);

  const { isAuthentication } = useSelector((state) => state.user);
  const [load,setLoad]=useState(false);
  const {loading}=useSelector((state)=>state.loadUser);

  useEffect(() => {
    if (!isAuth) setAuth(isAuthentication);

    setLoad(loading)
  }, [isAuthentication, isAuth,loading]);

  return (
    <Router>
      <Routes>
        <Route path="/" 
        element=
        { 
          load?<Loading/>:isAuth?<User/>:<Login/>
        } />
        <Route path="/register" element={isAuth ? <User /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
