import { Routes, Route } from 'react-router-dom';
import EventDetails from './pages/EventDetails.jsx';
import Register from './pages/Register.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<EventDetails />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
