"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  
  const navigate = useRouter();
  
  useEffect(()=> {
    if(sessionStorage.getItem("token-user") != null) {
      navigate.refresh();
    }
  }, [navigate])
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
