"use client";
import React from "react";
import TopoAdd from "../../components/topos/TopoProduto";
import UseHttp from "../../hooks/UseHttp";
import ProdutoCard from "../../components/cards/CardUnico";

export default function Produtos() {
  const url = `http://localhost:3000/api/produtos `;
  const { product } = UseHttp(url);

  return (
    <section className="absolute top-0 left-[22%]  w-9/12 m-auto p-2  ">
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
