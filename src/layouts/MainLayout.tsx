import { Outlet, Link } from 'react-router-dom';
import logoBpmp from '../assets/bpmp-jakarta-logo.png';

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
        
            {/* HEADER */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 print:hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                
                    {/* Bagian Kiri: Logo & Judul */}
                    <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                        {/* Logo diberi flex-shrink-0 agar ukurannya tidak menyusut saat dilayar kecil */}
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img src={logoBpmp} alt="Logo BPMP DKI Jakarta" className="h-8 sm:h-10 w-auto" />
                        </Link>
                        
                        {/* Garis pemisah vertikal (Hanya tampil di layar menengah ke atas) */}
                        <div className="hidden sm:block h-6 w-px bg-gray-300"></div>

                        {/* Judul Aplikasi */}
                        <Link to="/" className="font-bold text-gray-900 tracking-tight truncate">
                            {/* Tampil di layar besar (Desktop/Tablet) */}
                            <span className="hidden sm:inline text-lg">Dasbor Pemantauan Pelaksanaan Kegiatan</span>
                            {/* Tampil di layar kecil (HP) */}
                            <span className="sm:hidden text-base">Dasbor Kinerja</span>
                        </Link>
                    </div>

                    {/* Bagian Kanan: Menu Pengaturan */}
                    {/* flex-shrink-0 agar menu ini tidak tergeser oleh judul */}
                    <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                        <div className="hidden md:block text-sm font-medium text-gray-500">
                            Tahun Aktif: <span className="text-black">2026</span>
                        </div>
                        
                        <Link 
                        to="/settings" 
                        className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors p-2 -mr-2"
                        >
                            Pengaturan
                        </Link>
                    </div>

                </div>
            </header>

            {/* AREA KONTEN */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
        
        </div>
    );
}