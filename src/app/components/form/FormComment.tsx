"use client";
import React, { useState } from "react";
import UseHttp from "../../hooks/UseHttp";
import { useRouter } from "next/navigation";
import Input from "./Input";
import CardProdutoCliente from "../cards/CardProdutoCliente";
import CardComment from "../cards/CardComment";

export default function FormComment(props: any) {
  const urlp = `/api/produtos/${props.dat}`;
  const url: string = "/api/comentarios";
  const [comentario, setComentario] = useState<string>("");

  const router = useRouter();

  const { product: data } = UseHttp(urlp);
  const { setComment, loading, err } = UseHttp(url);

  function handleSubmit(e: any): void {
    e.preventDefault();
    const comenta = {
      comment: comentario,
      produtoId: Number(props.dat),
      userId: Number(props.userId),
    };

    setComment(comenta);
    router.refresh()
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
            <Input className='w-[10%]' type="submit" value="Commentar"  />
          )}
        </div>
   
      </form>
      <CardComment/>
    </div>
  );
}
