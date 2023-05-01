import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import DepensesPage from "./components/depenses/DepensesPage";
import CoursesPage from "./components/courses/CoursesPage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { DepensesContextProvider } from "./context/DepensesContext";
import { AuthContextProvider } from "./context/AuthContext";
import { FoodsContextProvider } from "./context/FoodsContext";
import { NotesContextProvider } from "./context/NotesContext";
import NotesPage from "./components/notes/NotesPage";

function App() {
    return (
        <div className="App pb-10">
            <AuthContextProvider>
                <DepensesContextProvider>
                    <FoodsContextProvider>
                        <NotesContextProvider>
                            <Header />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/depenses"
                                    element={<DepensesPage />}
                                />
                                <Route
                                    path="/courses"
                                    element={<CoursesPage />}
                                />
                                <Route path="/notes" element={<NotesPage />} />
                            </Routes>
                            <Footer />
                        </NotesContextProvider>
                    </FoodsContextProvider>
                </DepensesContextProvider>
            </AuthContextProvider>
        </div>
    );
}

export default App;
