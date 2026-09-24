import { useState } from 'react';

export default function Pengaturan() {
    // Simpan nilai default ke dalam variabel agar mudah dipanggil ulang
    const defaultYear = new Date().getFullYear().toString();
    
    const [tahun, setTahun] = useState(defaultYear);
    const [url, setUrl] = useState('');
    const [error, setError] = useState({ tahun: '', url: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        setError({ tahun: '', url: '' });
        let hasError = false;

        if (tahun.length !== 4) {
            setError((prev) => ({ ...prev, tahun: 'Tahun harus terdiri dari 4 digit angka.' }));
            hasError = true;
        }

        if (!url.includes('docs.google.com/spreadsheets')) {
            setError((prev) => ({ ...prev, url: 'URL tidak valid. Pastikan ini adalah link Google Sheets.' }));
            hasError = true;
        }

        if (hasError) return;
        
        // Simulasi pengiriman data
        console.log('Data yang akan dikirim ke Supabase:', { tahun, url });
        alert('Konfigurasi berhasil disimpan!');

        // Reset input form setelah data "berhasil" dikirim
        setTahun(defaultYear);
        setUrl('');
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-200 mt-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Pengaturan Sumber Data</h1>
                <p className="text-gray-500 mt-2 text-sm">
                    Tambahkan tautan Google Sheets baru untuk mengaktifkan dasbor laporan pada tahun tersebut.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="tahun" className="block text-sm font-medium text-gray-700 mb-2">
                        Tahun Laporan
                    </label>
                <input
                    type="text"
                    id="tahun"
                    value={tahun}
                    maxLength={4}
                    inputMode="numeric"
                    placeholder="Contoh: 2026"
                    onChange={(e) => {
                        const hanyaAngka = e.target.value.replace(/\D/g, '');
                        setTahun(hanyaAngka);
                    }}
                    className={`w-full px-4 py-2 border rounded-md outline-none transition-all focus:ring-2 ${
                        error.tahun ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                    required
                />
                {error.tahun && <p className="text-red-500 text-sm mt-2">{error.tahun}</p>}
                </div>

                <div>
                    <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                        URL Google Sheets
                    </label>
                    <input
                        type="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://docs.google.com/spreadsheets/d/..."
                        className={`w-full px-4 py-2 border rounded-md outline-none transition-all focus:ring-2 ${
                            error.url ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                        }`}
                        required
                    />
                    {error.url && <p className="text-red-500 text-sm mt-2">{error.url}</p>}
                </div>

                <div className="pt-4 border-t border-gray-100">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all"
                    >
                        Simpan Konfigurasi
                    </button>
                </div>
            </form>
        </div>
    );
}