'use client'
import React from 'react'
import UseHttp from '../../hooks/UseHttp'
import CardProdutoUnico from '../../components/cards/CardProdutoUnico';
import UseFiltro from '../../hooks/UseFiltro';

export default function Banheiros() {

  // const url: string = `http://localhost:3000/api/produtos`
  
  // const {product} = UseHttp(url)

  // const produtoBanheiro: Array<object> = product?.filter((e: { category: string; }) =>  {
  //   if (e.category === "banheiros") {
  //     return e;
  //   }
  // });

  const {produtoBanheiro} = UseFiltro()

  return (
    <section>
    <h1 className="pt-16">Banheiros</h1>
    { produtoBanheiro&&
      produtoBanheiro.map((produto: any) => (
      <div key={produto.id}>
        <CardProdutoUnico data={produto} />
      </div>
    ))}
  </section>
  )
}
