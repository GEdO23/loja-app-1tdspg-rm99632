import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>

      <div className="w-96 m-auto text-center">
        <figure>
          <Image src="/black-friday.png" alt="Black Friday" width={540} height={360}/>
          <figcaption>Grande Promoção!!</figcaption>
        </figure>
      </div>
    </>
  );
}
