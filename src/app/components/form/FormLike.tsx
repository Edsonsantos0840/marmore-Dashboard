// icones
'use client'
import { AiOutlineLike } from "react-icons/ai";
import UseHttp from "../../hooks/UseHttp";
import { useRouter } from "next/router";
import { useState } from "react";
import CardLike from "../cards/CardLike";

export default function FormLike(props: any) {
    const url: string = "/api/like";
    const [count, setCount] = useState(1)

    const {setLike} = UseHttp(url);
    
    //funçao para criar like
    function handleSubmit(e: any): void {
      e.preventDefault()
      setCount(count)
      const curtir= {
        like: count,
        produtoId: Number(props.dat),
        userId: Number(props.userId),
      }
      setLike(curtir)
    }
  
  return (
    <>
      <button onClick={handleSubmit} ><AiOutlineLike className="text-3xl" /></button>
      <CardLike/>
    </>
  );
}