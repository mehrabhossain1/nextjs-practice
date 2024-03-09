import Image from "next/image";
import Link from "next/link";
import img from "@/assets/abstract-uv-ultraviolet-light-composition.jpg";

export default function Page() {
  return (
    <div>
      {/* <Link href="/dashboard">Dashboard</Link> */}
      {/* <img src={img} height={500} width={500} /> */}
      {/* <Image className="relative" src={img} fill /> */}
      <div className="absolute left-1/4">
        <h1 className="text-5xl">Hello, I am Mehrab Hossain</h1>
        <p>I am a Web Developer, I love Next, Tailwind, and React</p>
        <button>Download CV</button>
        <button>Hire Me</button>
      </div>
    </div>
  );
}
