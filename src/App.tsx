import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Settings from './pages/Settings';
import MainDashboard from './pages/MainDashboard';
import './App.css'

//const MainDashboard = () => <div>Halaman Dasbor Utama (Dalam Pengerjaan) </div>;
//const Settings = () => <div>Halaman Konfigurasi (Dalam Pengerjaan) </div>

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout membungkus semua rute di dalamnya */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainDashboard /> } />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;