"use client"; // Menandakan bahwa komponen ini dirender di sisi klien, bukan server
import Link from "next/link"; // Mengimpor komponen Link untuk navigasi antar halaman
import {
  Instagram,
  Mail,
  Phone,
} from "lucide-react"; // Import ikon dari lucide-react
import Slider from "react-slick"; // Import komponen Slider dari react-slick
import "slick-carousel/slick/slick.css"; // Import CSS dasar slick-carousel
import "slick-carousel/slick/slick-theme.css"; // Import CSS tema slick-carousel

const photos = [
  "images/gm.png", // Ganti dengan path foto Anda
  "images/gm.png",
  "images/gm.png",
];

export default function Home() {
  const settings = {
    dots: true, // Menampilkan titik navigasi
    infinite: true, // Loop slider
    speed: 500, // Kecepatan transisi slide (ms)
    slidesToShow: 1, // Jumlah slide yang ditampilkan
    slidesToScroll: 1, // Jumlah slide yang digeser
    autoplay: true, // Otomatis geser
    autoplaySpeed: 3000, // Kecepatan autoplay (ms)
    pauseOnHover: true, // Pause saat dihover
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 transition-all flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-gray-100">
        <h1 className="text-2xl font-bold text-blue-700">Harun</h1> {/* Judul/Nama */}
        <div className="flex items-center gap-6">
          <Link href="/cv" className="hover:underline text-blue-600">CV</Link>
          <Link href="/portfolio" className="hover:underline text-blue-600">Portfolio</Link>
        </div>
      </nav>
      {/* Main content */}
      <main className="text-center mt-32 flex-grow">
        {/* Slider Foto */}
        <div className="mb-10 mx-auto max-w-md">
          <Slider {...settings}>
            {photos.map((photo, index) => (
              <div key={index}>
                <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-auto rounded-lg" />
              </div>
            ))}
          </Slider>
        </div>

        <h2 className="text-4xl font-semibold mb-4">Selamat Datang di Personal Landing Page</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Jelajahi informasi tentang saya di halaman CV, atau lihat karya saya di halaman Portfolio.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/cv" className="border border-blue-600 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-300">Lihat CV</Link>
          <Link href="/portofolio" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-200">Lihat Portfolio</Link>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center">
        <div className="flex justify-center gap-6 text-gray-700">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-500 transform hover:scale-110 transition duration-300"
          >
            <Phone size={24} />
          </a>
          <a
            href="https://instagram.com/akunmu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transform hover:scale-110 transition duration-300"
          >
            <Instagram size={24} />
          </a>
          <a
            href="mailto:yeegitu546@gmail.com"
            aria-label="Email"
            className="hover:text-blue-500 transform hover:scale-110 transition duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}