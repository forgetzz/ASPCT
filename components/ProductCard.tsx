"use client";
import { Product } from "./PRODUCTS";
import Image from "next/image";

const currency = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);

export default function ProductCard({ product }: { product: Product }) {
  const whatsapp = () => {
    const phone = "6289602203266";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent("Halo, saya tertarik dengan produk ASPCT.STOCKROOM!")}`;
    window.open(url, "_blank");
  };

  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full h-64">
        <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm md:text-base">{product.name}</h3>
          {product.tag && <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">{product.tag}</span>}
        </div>
        <div className="mt-2 text-gray-700 font-medium">{currency(product.price)}</div>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 py-2 text-sm border rounded hover:bg-gray-100 transition">Lihat</button>
          <button onClick={whatsapp} className="flex-1 py-2 text-sm bg-black text-white rounded hover:bg-gray-800 transition">Beli</button>
        </div>
      </div>
    </article>
  );
}
