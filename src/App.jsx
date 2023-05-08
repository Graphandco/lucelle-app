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
import { MoviesContextProvider } from "./context/MoviesContext";
import MoviesPage from "./components/movies/MoviesPage";
import ProfilPage from "./components/profil/ProfilPage";

function App() {
    return (
        <div className="App pb-10">
            <AuthContextProvider>
                <DepensesContextProvider>
                    <FoodsContextProvider>
                        <NotesContextProvider>
                            <MoviesContextProvider>
                                <Header />
                                <Routes>
                                    {/* <Route path="/" element={<Home />} /> */}
                                    <Route path="/" element={<CoursesPage />} />
                                    <Route
                                        path="/depenses"
                                        element={<DepensesPage />}
                                    />
                                    <Route
                                        path="/notes"
                                        element={<NotesPage />}
                                    />
                                    <Route
                                        path="/movies"
                                        element={<MoviesPage />}
                                    />
                                    <Route
                                        path="/profil"
                                        element={<ProfilPage />}
                                    />
                                </Routes>
                                <Footer />
                            </MoviesContextProvider>
                        </NotesContextProvider>
                    </FoodsContextProvider>
                </DepensesContextProvider>
            </AuthContextProvider>
        </div>
    );
}

export default App;
