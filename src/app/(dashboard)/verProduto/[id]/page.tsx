"use client";
import ProdutoCard from "../../../components/cards/ProdutoCard";
import { useRouter } from "next/navigation";
import { BsReplyAllFill } from "react-icons/bs";
import UseHttp from '../../../hooks/UseHttp'

export default function VerProduto({ params }: any) {
  const url = `/api/produtos/${params.id}`
  const route = useRouter();
  // const [data, setData] = useState([]);

  const {data}: any = UseHttp(url)

  // useEffect(() => {
  //   async function produto() {
  //     const res = await fetch(`/api/produtos/${params.id}`);
  //     const json = await res.json();
  //     setData(json);
  //   }
  //   produto();
  // }, [route, params.id]);

  return (
    <section className="pt-16">
      <div className="flex p-3 justify-between items-center">
        <h1>Produto</h1>
        <div className="flex gap-3  items-center">
          <BsReplyAllFill
            onClick={() => route.push("/page/dashboard/produtos")}
            className="text-3xl cursor-pointer"
          />
          <h2>Voltar </h2>
        </div>
      </div>
      {data && <ProdutoCard data={data} />}
    </section>
  );
}
