"use client"
import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Mail, Instagram, Facebook, Music } from "lucide-react";
// Homepage Next.js + TypeScript dengan Navbar responsif & slideshow hero section
// Pastikan Tailwind CSS aktif di proyek.

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: string;
};

const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "ASPCT WHITE (FRONT)",
    price: 120000,
    image: "/assets/5.png",
    tag: "Best Seller",
  },
  {
    id: "p4",
    name: "ASPCT WHITE (BACK)",
    price: 120000,
    image: "/assets/4.png",
  },
  {
    id: "p2",
    name: "ASPCT BLACK (Back)",
    price: 130000,
    image: "/assets/2.png",
  },
  {
    id: "p3",
    name: "ASPCT BLACK (FRONT)",
    price: 130000,
    image: "/assets/3.png",
    tag: "New",
  },

];

const SLIDES = [
  "/assets/putih1.jpeg",
  "/assets/hitam4.jpeg",
  "/assets/putih2.jpeg",
  "/assets/hitam5.jpeg",
  "/assets/putih3.jpeg",
  "/assets/hitam3.jpeg",
  "/assets/putih4.jpeg",
  "/assets/hitam1.jpeg",
  "/assets/putih5.jpeg",
  "/assets/hitam2.jpeg",
  "/assets/hitam6.jpeg",
];

const currency = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold tracking-tight">ASPCT</div>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-700 text-sm">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#shop" className="hover:text-black transition">Shop</a>
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <input
            placeholder="Cari produk..."
            className="border rounded px-3 py-1 text-sm w-48"
          />
          <button className="px-3 py-1 rounded bg-black text-white text-sm hover:bg-gray-800 transition">Cart (0)</button>
        </div>

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-inner border-t">
          <nav className="flex flex-col px-4 py-3 gap-2 text-gray-700 text-sm">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#shop" className="hover:text-black">Shop</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);



  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            fill
            priority={index === 0}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
          ASPCT <br />NEW GENERETION
        </h1>
        <p className="max-w-lg text-sm md:text-lg opacity-90">
          Where every angle becomes a reflection of who you are.
        </p>
        <div className="mt-6 flex gap-3">
          <a className="bg-white text-black px-5 py-3 rounded font-medium hover:bg-gray-200 transition" href="#shop">
            Belanja Sekarang
          </a>
          <a className="border px-5 py-3 rounded font-medium hover:bg-white/20 transition" href="#about">
            Tentang Kami
          </a>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {

  const whatsapp = () => {
    const phone = "6289602203266"; // ganti dengan nomor kamu tanpa + atau 0 di depan
    const message = "Halo, saya tertarik dengan produk ASPCT.STOCKROOM!";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full h-90 md:h-64">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm md:text-base">{product.name}</h3>
          {product.tag && (
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">{product.tag}</span>
          )}
        </div>
        <div className="mt-2 text-gray-700 font-medium">{currency(product.price)}</div>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 py-2 text-sm border rounded hover:bg-gray-100 transition">Lihat</button>
          <button onClick={whatsapp} className="flex-1 py-2 text-sm bg-black text-white rounded hover:bg-gray-800 transition">Beli</button>
        </div>
      </div>
    </article>
  );
};

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main>
        <Hero />

        <section id="shop" className="container mx-auto px-4 py-16">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold">Produk Pilihan</h2>
            <div className="text-sm text-gray-600">Menampilkan {PRODUCTS.length} produk</div>
          </div>

          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section id="about" className="bg-white border-t">
          <div className="container mx-auto px-4 py-16 text-center">
            <h3 className="text-2xl font-semibold mb-4">Tentang ASPCT</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ASPCT. adalah brand lokal yang fokus pada bahan nyaman, potongan modern, dan
              harga yang masuk akal. Kami memilih pemasok beretika dan memperhatikan detail setiap
              produk.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-gray-950 text-gray-300 py-10 border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left side */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-widest text-white">ASPCT.STOCKROOM</h2>
            <p className="text-sm text-gray-500 mt-1">
              © {new Date().getFullYear()} ASPCT. All rights reserved.
            </p>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center md:items-end gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:aspctstreetwear@gmail.com" className="hover:text-white">
                aspctstreetwear@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 mt-1">
              <a
                href="https://www.instagram.com/aspct.stockroom?igsh=d25nb3p6Mm0xeHg4"
                className="hover:text-white flex items-center gap-1"
              >
                <Instagram size={18} />
                <span className="hidden sm:inline">Instagram</span>
              </a>

              <a href="#" className="hover:text-white flex items-center gap-1">
                <Music size={18} />
                <span className="hidden sm:inline">Tiktok</span>
              </a>

              <a href="#" className="hover:text-white flex items-center gap-1">
                <Facebook size={18} />
                <span className="hidden sm:inline">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;