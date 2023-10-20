import Image from "next/image";

export default function Camisa() {
  return (
    <div>
      <h1>CAMISA</h1>
      <div>
        <p>Camisa</p>
        <figure>
          <Image
            width={250}
            height={250}
            alt="camisa"
            src={
              "https://prints.ultracoloringpages.com/551ada1f48c923acddbbb135962eebb9.png"
            }
          />
        </figure>
      </div>

    </div>
  );
}
