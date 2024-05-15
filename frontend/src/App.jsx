import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from "./context/AuthContext";
import SignUp from "./pages/signup/SignUp";

function App() {
  const {authUser} = useAuthContext()
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={'/login'}/>} />
        <Route path="/login" element={authUser ? <Navigate to={'/'}/> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={'/'}/> : <SignUp />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;