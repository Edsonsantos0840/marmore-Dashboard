"use client";
import React, {useEffect, useState } from "react";
import UseHttp from "../../hooks/UseHttp";
import { useRouter } from "next/navigation";
import Input from "./Input";
import Image from "next/image";
import CardProdutoCliente from "../cards/CardProdutoCliente";

export default function FormComment(props: any) {
  const [id, setId] = useState(null)
  const urlp = `/api/produtos/${props.dat}`;
  const url: string = "/api/comentarios";
  const [comentario, setComentario] = useState<string>("");

  const router = useRouter();

  const { product: data } = UseHttp(urlp);
  const { setComment, comment, loading, err } = UseHttp(url);

  // useEffect(() => {
  //   if(props.userId.length > 3){
  //     let num = [...props.userId]
  //     setId(`${num[0]}${num[1]}${num[2]}`)
  //   }
  // },[props.userId] )
  // console.log(id)
  // console.log(props.dat)
  // console.log(comment)
  // console.log(comment)

  function handleSubmit(e: any): void {
    e.preventDefault();
    const comenta = {
      comment: comentario,
      produtoId: Number(props.dat),
      userId: Number(props.userId),
    };
    setComment(comenta);
    // router.push(`/verProdutoUnico/${props.dat}`);
  }
  return (
    <div>
      <CardProdutoCliente loading={loading} err={err} data={data} />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full p-4 shadow-lg rounded-md "
      >
        {err && <p>{err}</p>}
        <div className="flex w-full justify-center items-end">
          <label className="w-[90%]">
            Comentário:
            <textarea
              className="w-[90%] h-10"
              placeholder="Deixe seu Comentário"
              value={comentario}
              onChange={(e: any) => setComentario(e.target.value)}
            ></textarea>
          </label>
          {loading ? (
            <Input type="submit" value="Aguarde" disabled />
          ) : (
            <button className=" bg-red-700 text-white p-2">Enviar</button>
          )}
        </div>
        {
          comment &&
          comment.map((e: any) => (
            <div
              key={e.id}
              className=" w-full m-auto mt-4 py-2 px-8  font-semibold bg-slate-100 rounded-md shadow-lg "
            >
              <div className="flex gap-5 p-2">
              <Image
                className="rounded-full"
                src={e.User?.userImage}
                alt={e.User?.name}
                width={40}
                height={40}
              />
              <h4>{e.User?.name}</h4>
              </div>
              <p>{e.comment}</p>
            </div>
          ))}
      </form>
     
    </div>
  );
}
