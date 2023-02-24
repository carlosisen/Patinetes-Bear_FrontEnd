import './App.css';
import { Routes, Route } from "react-router-dom";
import { AppWrapper } from './context/context';
import ProtectedRoute from './utils/ProtectedRoute';
import ErrorMessage from './utils/ErrorMessage';
import Login from './Components/Login';
import Home from './Components/Home';
import HistoryKM from './Components/HistoryKm';
import DetailsHistoryUser from './Components/DetailsHistoryUser';
import AllUsers from './Components/AllUsers';
import Register from './Components/Register';
import LandingPage from './Components/Landing';


function App() {

  

  return (
    <div className="App">
      <AppWrapper>
        <Routes>
          <Route path="/landing" element={<LandingPage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/historykm" element={<HistoryKM/>}></Route>
          <Route path='/detailshistoryuser' element={<DetailsHistoryUser/>}></Route>
          <Route path='/all-users' element={<AllUsers/>}></Route>
          <Route path="/" element={
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>}/>
          <Route path="*" element={<h1>Esta ruta no existe</h1>}/>
        </Routes>
        <ErrorMessage/>
      </AppWrapper>
    </div>
  );
}

export default App;
