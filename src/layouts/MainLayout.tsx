import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
            {/* Header / Navbar */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 print:hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                
                    {/* Logo / Judul Aplikasi */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-md"></div> {/* Placeholder Logo */}
                        <Link to="/" className="font-bold text-lg tracking-tight">
                            Dasbor Kinerja BPMP
                        </Link>
                    </div>

                    {/* Navigasi Kanan */}
                    <div className="flex items-center gap-6">
                        {/* Nanti Dropdown Tahun akan diletakkan di sini */}
                        <div className="hidden sm:block text-sm font-medium text-gray-500">
                            Tahun Aktif: <span className="text-black">2026</span>
                        </div>
                        <Link to="/settings" 
                        className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Pengaturan
                        </Link>
                    </div>
                </div>
            </header>

            {/* Area Konten Dinamis (Halaman akan dirender di dalam sini) */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
        </div>
    );
}