// filepath: /home/erik/taller_de_programacion/tienda_de_libros/libros-app/libros-app/app/page.tsx
import Book_list from "@/componentes/Book_list";
import Contenido from "@/componentes/Contenido";
import Header from "@/componentes/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Contenido />
      <Book_list />
      <Book_list />
    </div>
  );
}
