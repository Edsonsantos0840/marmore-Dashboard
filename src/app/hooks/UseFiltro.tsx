import UseHttp from "./UseHttp";
const url: string = `http://localhost:3000/api/produtos`
export default function UseFiltro() {
   
    const {product} =UseHttp(url)

    const produtoBanheiro: Array<object> = product?.filter((e: { category: string; }) =>  {
        if (e.category === "banheiros") {
          return e;
        }
      });
    const produtoCozinhas: Array<object> = product?.filter((e: { category: string; }) =>  {
        if (e.category === "cozinhas") {
          return e;
        }
      });
    const produtoEscadas: Array<object> = product?.filter((e: { category: string; }) =>  {

          if (e.category === "escadas") {
          return e;
        }
      });
    const produtoExteriores: Array<object> = product?.filter((e: { category: string; }) =>  {

          if (e.category === "exteriores") {
          return e;
        }
      });
  return {produtoBanheiro, produtoCozinhas, produtoEscadas, produtoExteriores}
}
