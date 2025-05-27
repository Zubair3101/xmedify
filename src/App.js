import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Hospitals from './pages/Hospitals';
import Bookings from './pages/Bookings';
import { MedicalProvider } from './contexts/MedicalContext';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <Router>
      <MedicalProvider>
        <SnackbarProvider maxSnack={3}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/my-bookings" element={<Bookings />}/>
          </Routes>
        </div>
        </SnackbarProvider>
      </MedicalProvider>
    </Router>
  );
}

export default App;