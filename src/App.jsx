import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import BlogPage from "./pages/BlogPage";
import "./styles.css";

function App() {
    return (
        <Router basename='/is-web-2024-5sem/'>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
