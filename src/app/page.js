import Image from "next/image";
import Link from "next/link";
import img from "@/assets/abstract-uv-ultraviolet-light-composition.jpg";

export default function Page() {
  return (
    <div>
      <Link href="/dashboard">Dashboard</Link>
      {/* <img src={img} height={500} width={500} /> */}
      <Image className="relative" src={img} fill />
      <h1 className="absolute text-white">Hello</h1>
    </div>
  );
}
