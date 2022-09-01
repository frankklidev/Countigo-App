
import {
  Routes,
  Route,
} from "react-router-dom";
import App from "../App";
import CardDetail from '../components/CardDetail';
import CardScreen from '../components/CardScreen';


const RoutesNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<CardScreen />} />
      <Route path="/article/:articleId" element={<CardDetail />} />
    </Routes>
  )
}

export default RoutesNavigation