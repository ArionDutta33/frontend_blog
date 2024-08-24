import { Routes, Route } from 'react-router-dom';

 import IndexPage from "./pages/IndexPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import CreateBlogPage from "./pages/CreateBlogPage.jsx";

const App = () => (
    <Routes>
        <Route path="/" element={<IndexPage />} />
         {/* Other routes */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/new" element={<CreateBlogPage />} />
    </Routes>
);

export default App;
