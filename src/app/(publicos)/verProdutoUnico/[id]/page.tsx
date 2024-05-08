"use client";
import CardUnico from "../../../components/cards/CardUnico";
import { useRouter } from "next/navigation";
import { BsReplyAllFill } from "react-icons/bs";
import UseHttp from '../../../hooks/UseHttp'

export default function VerProdutoUnico({ params }: any) {
  const url = `/api/produtos/${params.id}`
  const route = useRouter();

  const {product: data} = UseHttp(url)

  return (
    <section className="pt-16">
      <div className="flex p-3 justify-between items-center">
        {
          data &&
          <><h1>{data.category}</h1><div className="flex gap-3  items-center">
            <BsReplyAllFill
              onClick={() => route.push(`/${data.category}`)}
              className="text-3xl cursor-pointer" />
            <h2>Voltar </h2>
          </div></>
        }
      </div>
      {data && <CardUnico data={data} />}
    </section>
  );
}
