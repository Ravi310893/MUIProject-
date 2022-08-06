import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';

const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
          <Routes>
             <Route path="/" element={<HomePage/>}/>
             <Route path="/about" element={<AboutPage/>}/>
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default AppRoutes;