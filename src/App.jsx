import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import DepensesPage from "./components/depenses/DepensesPage";
import CoursesPage from "./components/courses/CoursesPage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { DepensesContextProvider } from "./context/DepensesContext";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <DepensesContextProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/depenses" element={<DepensesPage />} />
                        <Route path="/courses" element={<CoursesPage />} />
                    </Routes>
                    <Footer />
                </DepensesContextProvider>
            </AuthContextProvider>
        </div>
    );
}

export default App;
