import { useState } from 'react';

export default function MainDashboard() {
    // State variables menggunakan bahasa Inggris
    const [activeTab, setActiveTab] = useState('recap');
    const [selectedYear, setSelectedYear] = useState('2026');

    // Definisi struktur Tabs (id diubah jadi bahasa Inggris: tw1 -> q1/Quarter 1)
    const tabs = [
        { id: 'recap', label: 'Rekap Tahunan' },
        { id: 'q1', label: 'Triwulan 1' },
        { id: 'q2', label: 'Triwulan 2' },
        { id: 'q3', label: 'Triwulan 3' },
        { id: 'q4', label: 'Triwulan 4' },
    ];

    // Data dummy sementara
    const availableYears = ['2026', '2025', '2024'];

    return (
        <div className="space-y-6">
        
            {/* 1. Header & Year Dropdown */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Capaian Kinerja IKK</h1>
                    <p className="text-sm text-gray-500 mt-1">Pantau dan evaluasi indikator kinerja kegiatan secara berkala.</p>
                </div>
                
                <div className="flex items-center gap-3">
                    <label htmlFor="year-select" className="text-sm font-medium text-gray-600">
                        Periode:
                    </label>
                    <select
                        id="year-select"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block py-2 px-3 cursor-pointer outline-none transition-colors"
                    >
                        {availableYears.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* 2. Tabs Navigation */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="border-b border-gray-200 px-2 sm:px-6">
                    <nav className="-mb-px flex space-x-6 overflow-x-auto scrollbar-hide" aria-label="Tabs">
                        {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                            whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200
                            ${activeTab === tab.id 
                                ? 'border-blue-600 text-blue-600' 
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }
                            `}
                        >
                            {tab.label}
                        </button>
                        ))}
                    </nav>
                </div>

                {/* 3. Dynamic Content Area */}
                <div className="p-6 sm:p-10 min-h-[400px] flex flex-col items-center justify-center border-t border-dashed border-gray-200 m-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 mb-4 text-gray-300">
                        {/* Icon placeholder */}
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                        </svg>
                    </div>
                    <p className="text-gray-600 text-center">
                        Area visualisasi dan tabel untuk 
                        <strong className="text-gray-900 ml-1">
                            {tabs.find(t => t.id === activeTab)?.label} Tahun {selectedYear}
                        </strong>.
                    </p>
                    <p className="text-sm text-gray-400 mt-2 text-center max-w-md">
                        Menunggu data JSON hasil ekstraksi Google Apps Script dari tim Backend.
                    </p>
                </div>
            </div>

        </div>
    );
}