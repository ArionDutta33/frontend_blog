import { Routes, Route } from 'react-router-dom';

 import IndexPage from "./pages/IndexPage.jsx";

const App = () => (
    <Routes>
        <Route path="/" element={<IndexPage />} />
         {/* Other routes */}
    </Routes>
);

export default App;
