"use client";
import React from "react";
import TopoAdd from "../../components/topos/TopoProduto";
import UseHttp from "../../hooks/UseHttp";
import ProdutoCard from "../../components/cards/ProdutoCard";

export default function Produtos() {
  const url = `http://localhost:3000/api/produtos `;
  const { product } = UseHttp(url);

  return (
    <section className="absolute top-0 left-[20%]  w-10/12 m-auto pr-1 ">
      <TopoAdd />
      {product &&
        product.map((produto: any) => (
          <div key={produto.id}>
            <ProdutoCard data={produto} />
          </div>
        ))}
    </section>
  );
}
