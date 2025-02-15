import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Services/Services';
import Exams from './Pages/Exams';
import ExamDetail from './Components/Exams/ExamDetail';
import Chatbot from './Components/Chatbot/Chatbot';
import ProtectedRoute from "./Components/ProtectedRoute";

import Dashboard from './Components/Dashboard';

function App() {

  return (

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/exams" element={<Exams />} />
      <Route path="/exams/:examId" element={<ExamDetail />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }
          />
      </Routes>
      <Chatbot/>,
    </BrowserRouter>

  )
}

export default App
