import "@/app/globals.css"; // Style global Tailwind
import Link from "next/link";
import Image from "next/image";
// Array daftar proyek
const projects = [
{
title: "E-Commerce App",
description: "Toko online fullstack dengan Next.js dan Firebase.",
demoLink: "#",
repoLink: "https://github.com/",
image: "/images/",
},
{
title: "Todo List App",
description: "Pencatatan tugas dengan React dan Tailwind CSS.",
demoLink: "#",
repoLink: "https://github.com/",
image: "/images/",
},
{
title: "Expert System",
description: "Aplikasi Sistem Pakar dengan metode Forward Chaining.",
demoLink: "#",
repoLink: "https://github.com/",
image: "/images/",
},
];
export default function Portfolio() {
return (
<div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:togray-800 p-6">
<div className="max-w-6xl mx-auto">
<h1 className="text-4xl font-bold mb-2 text-blue-700 dark:text-blue-400">Harun</h1>
<p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Mahasiswa IT</p>
<h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-300">Proyek
Unggulan</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{projects.map((project, index) => (
<div key={index} className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transitionshadow rounded-xl p-6">
<h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
<Image src={project.image} alt={project.title} width={600} height={300}
className="rounded-lg mb-4 object-cover" />
<p className="text-gray-700 dark:text-gray-300">{project.description}</p>
<div className="mt-4 flex gap-4">
<a href={project.demoLink} className="text-blue-500 hover:underline">Demo</a>
<a href={project.repoLink} className="text-blue-500 hover:underline">GitHub</a>
</div>
</div>
))}
</div>
{/* Tombol kembali */}
<br />
<Link href="/">
<button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition">
← Kembali ke Halaman Utama
</button>
</Link>
</div>
</div>
);
}