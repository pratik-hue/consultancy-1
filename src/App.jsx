import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Exams from './Pages/Exams';
import ExamDetail from './Pages/ExamDetail';
import Chatbot from './Components/Chatbot/Chatbot';
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from './Components/Dashboard';
import ServiceDetail from './Pages/ServiceDetails';
import DestinationDetails from './Pages/Destinationdetails'; // Import the new DestinationDetails page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/exams/:examId" element={<ExamDetail />} />

        {/* New Route for Destination Details */}
        <Route path="/destination/:name" element={<DestinationDetails />} />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Chatbot Component */}
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
