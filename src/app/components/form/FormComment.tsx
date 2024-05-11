"use client";
import React, { useState } from "react";
import UseHttp from "../../hooks/UseHttp";
import CardUnico from "../../components/cards/CardUnico";
import { useRouter } from "next/navigation";
import { BsReplyAllFill } from "react-icons/bs";
import Input from "./Input";
import Image from "next/image";

export default function FormComment(props: any) {
  const urlp = `/api/produtos/${props.dat}`;
  const url: string = "http://localhost:3000/api/comentarios";
  const [ comentario, setComentario] = useState<string>("");

  const router = useRouter();

  const { product: data } = UseHttp(urlp);
  const {setComment, comment, loading, err } = UseHttp(url);
  comment &&
  console.log(comment)

  function handleSubmit(e: any): void {
    e.preventDefault();
    const comenta = {
      comment: comentario,
      produtoId: Number(props.dat),
      userId: Number( props.userId)
    };
    setComment(comenta);
    // router.push(`/verProdutoUnico/${props.dat}`);
  }

  return (
    <div>
        <div className="flex p-3 justify-between items-center">
        {loading && <h1>Carregando Dados........</h1>}
        {err && <p>{err}</p>}
        {data && (
          <>
            <h1>{data.category}</h1>
            <div className="flex gap-3  items-center">
              <BsReplyAllFill
                onClick={() => router.push(`/${data.category}`)}
                className="text-3xl cursor-pointer"
              />
              <h2>Voltar </h2>
            </div>
          </>
        )}
      </div>
      {data && <CardUnico data={data} />}

    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-full p-8 shadow-lg rounded-md "
    >
      {err && <p>{err}</p>}
        <div className="flex w-full justify-center items-center" >
        <label className="w-[90%]">
        Comentário:
        <textarea className="w-[90%] h-10"
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
      <div>
        </div>
        {/* {
          comment &&
          comment.map((e: any) => (
            <div key={e.id} >
              <div>
                <p>{props.nome}</p>
                <Image src={props.imagem} alt="user" width={40} height={40}/>
              </div>
              <p >{e.comment}</p>
            </div>
          ) )
        } */}
      </div>
    </form>
    </div>
    
  );
}
