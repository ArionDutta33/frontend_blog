import { Routes, Route } from 'react-router-dom';

 import IndexPage from "./pages/IndexPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import CreateBlogPage from "./pages/CreateBlogPage.jsx";
import ShowBlogPage from "./pages/ShowBlogPage.jsx";
import Login from "./pages/Login.jsx";
import ShowEdit from "./pages/EditForm.jsx";

const App = () => (
    <Routes>
        <Route path="/" element={<IndexPage/>}/>
        {/* Other routes */}
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path={"/login"}element={<Login/>}/>
        <Route path="/blogs" element={<BlogsPage/>}/>
        <Route path="/blogs/new" element={<CreateBlogPage/>}/>
        <Route path="/blogs/:id" element={<ShowBlogPage/>}/>
        <Route path="/blogs/edit/:id" element={<ShowEdit/>}/>

    </Routes>
);

export default App;
