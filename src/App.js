import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import { AuthContextProvider } from "./hoc/AuthContext";
import AuthProtectedRoutes from "./hoc/AuthProtectedRoutes";
import Recipe from "./components/Recipe/Recipe";
import Calorie from "./components/Calorie/Calorie";
import Diet from "./components/Diet/Diet";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/recipe"
          element={
            <AuthProtectedRoutes>
              <Recipe />
            </AuthProtectedRoutes>
          }
        />
        <Route
          path="/calorie"
          element={
            <AuthProtectedRoutes>
              <Calorie />
            </AuthProtectedRoutes>
          }
        />
        <Route
          path="/diet"
          element={
            <AuthProtectedRoutes>
              <Diet />
            </AuthProtectedRoutes>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
