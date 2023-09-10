import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import { AuthContextProvider } from "./hoc/AuthContext";
import AuthProtectedRoutes from "./hoc/AuthProtectedRoutes";
import Recipe from "./components/Recipe/Recipe";

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
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
