import Image from "next/image";

export default function Tenis() {
    return (
      <div>
        <h1>Tenis</h1>
        <div>
          <p>Tenis</p>
          <figure>
            <Image
              width={250}
              height={250}
              alt="tenis"
              src={
                "https://http2.mlstatic.com/tnis-adidas-protostar-masculino-corrida-amortecedor-adipren-D_NQ_NP_827587-MLB30553157354_052019-F.jpg"
              }
            />
          </figure>
        </div>

      </div>
    );
  }
