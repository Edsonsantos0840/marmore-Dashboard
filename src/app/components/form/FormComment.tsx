"use client";
import React, { useEffect, useState } from "react";
import UseHttp from "../../hooks/UseHttp";
import { useRouter } from "next/navigation";
import Input from "./Input";
import Image from "next/image";
import CardProdutoCliente from "../cards/CardProdutoCliente";

export default function FormComment(props: any) {
  const [dadosUsuario, setDadosUsuario] = useState(null);
  const urlu = "/api/users";
  const urlp = `/api/produtos/${props.dat}`;
  const url: string = "/api/comentarios";
  const [comentario, setComentario] = useState<string>("");

  const router = useRouter();

  const { product: data } = UseHttp(urlp);
  const { setComment, comment, loading, err } = UseHttp(url);
  const { user } = UseHttp(urlu);

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
              name="comments"
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
      </form>
      <div className=" w-11/12 m-auto mt-4 p-2 font-semibold bg-slate-100 rounded-md ">
        {comment &&
          comment.map((e: any) => (
            <div
              key={e.id}
              className=" w-10/12 m-auto mt-4 p-2 font-semibold bg-slate-100 "
            >

              <Image
                className="rounded-full"
                src={dadosUsuario?.userImage}
                alt={dadosUsuario?.name}
                width={40}
                height={40}
              />
              <h4>{dadosUsuario?.name}</h4>
              <p>{e.comment}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
