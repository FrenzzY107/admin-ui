import "./App.css";

function App() {
  return (
    <div className="p-6 space-y-12 bg-gray-50 min-h-screen">
      {/* LATIHAN 1 - NAVBAR */}
      <section>
        <h2 className="font-bold mb-4">LATIHAN 1</h2>
        <nav className="flex flex-col md:flex-row justify-between items-center bg-white shadow p-4 rounded">
          {/* Logo */}
          <div className="font-bold text-lg mb-2 md:mb-0">MyLogo</div>

          {/* Menu */}
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-gray-700">
            <li>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>

      {/* LATIHAN 2 - GRID GALERI */}
      <section>
        <h2 className="font-bold mb-4">LATIHAN 2</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 h-48 flex items-center justify-center text-gray-600 text-sm rounded"
            >
              200 × 200
            </div>
          ))}
        </div>
      </section>

      {/* LATIHAN 3 - PRICING TABLE */}
      <section>
        <h2 className="font-bold mb-4">LATIHAN 3</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-100 border p-6 rounded">
            <p className="font-semibold">Basic</p>
            <p className="text-gray-700">Rp 50.000</p>
          </div>
          <div className="bg-blue-100 border p-6 rounded">
            <p className="font-semibold">Pro</p>
            <p className="text-gray-700">Rp 100.000</p>
          </div>
          <div className="bg-gray-100 border p-6 rounded">
            <p className="font-semibold">Premium</p>
            <p className="text-gray-700">Rp 200.000</p>
          </div>
        </div>
      </section>

 {/* LATIHAN 4 - DASHBOARD LAYOUT */}
<section>
  <h2 className="font-bold mb-4">LATIHAN 4</h2>

  <div className="w-full grid md:grid-cols-[250px_1fr] grid-rows-[auto_1fr_auto] gap-2 bg-gray-100 min-h-[500px]">
    {/* Header (full width) */}
    <header className="bg-gray-300 p-45 font-medium md:col-span-2 w-full min-h-[200px]">
      Header
    </header>

    {/* Sidebar (kiri) */}
    <aside className="bg-gray-300 p-45 min-h-[200px]">Sidebar</aside>

    {/* Konten utama (kanan) */}
    <main className="bg-white border p-45 ">Content</main>

    {/* Footer (full width) */}
    <footer className="bg-gray-300 p-45  font-medium md:col-span-2 w-full">
      Footer
    </footer>
  </div>
</section>


      {/* LATIHAN 5 - CARD PRODUK */}
      <section>
        <h2 className="font-bold mb-4">LATIHAN 5</h2>
        <div className="flex items-center gap-4 border p-4 rounded bg-white">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20 rounded"
          />
          <div>
            <h3 className="font-semibold">Nama Produk</h3>
            <p className="text-sm text-gray-600">
              Deskripsi singkat produk ditulis di sini...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
