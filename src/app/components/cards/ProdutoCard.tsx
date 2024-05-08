"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import UseHttp from '../../hooks/UseHttp'

export default function ProdutoCard({ data }: any) {
  const url = `http://localhost:3000//api/produtos/${data.id}`
  const router = useRouter();

  const {del}: any = UseHttp(url)

  // async function del() {
  //   const res = await fetch(url, {
  //     method: "DELETE",
  //   });
  //   router.push("/page/dashboard/produtos");
  //   router.refresh();
  // }

  return (
    <>
      <div
        key={data.id}
        className="max-w-sm:flex-col content-center p-3 gap-2  bg-[#00000026]  rounded-xl shadow-lg mt-5 mb-5 "
      >
        <div className=" gap-3  ">
          <h2 className=" text-red-700 font-bold text-center text-xl p-6">
            {data.Title && data.Title}
          </h2>

          <div className="flex gap-5 flex-wrap justify-center">
            <Image
              src={data.image1 && data.image1}
              alt={data.title && data.title}
              width={180}
              height={70}
              className="rounded-md shadow-lg border-2 border-[#00000047]"
            />

            {data.image2 ? (
              <Image
                src={data.image2}
                alt={data.title && data.title}
                width={180}
                height={70}
                className="rounded-md shadow-lg border-2 border-[#00000047]"
              />
            ) : (
              <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047]">
                <h3>Não possui</h3>
              </div>
            )}

            {data.image3 ? (
              <Image
                src={data.image3}
                alt={data.title && data.title}
                width={180}
                height={70}
                className="rounded-md shadow-lg border-2 border-[#00000047]"
              />
            ) : (
              <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047]">
                <h3>Não possui</h3>
              </div>
            )}

            {data.image4 ? (
              <Image
                src={data.image4}
                alt={data.title && data.title}
                width={180}
                height={70}
                className="rounded-md shadow-lg border-2 border-[#00000047]"
              />
            ) : (
              <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047]">
                <h3>Não possui</h3>
              </div>
            )}
          </div>

          <p className="  text-[#6b6b6b] text-center p-5 text-lg">
            {data.description}
          </p>

          <div className="flex justify-center items-center gap-5 text-red-700 p-4 bg-[#fecaca82] rounded-md shadow-md w-3/4 m-auto">
            <FaRegEdit
              onClick={() =>
                router.push("editarProdutos/" + data.id)
              }
              className="cursor-pointer"
            />
            <BsFillSendFill
              onClick={() =>
                router.push("verProduto/" + data.id)
              }
              className="cursor-pointer"
            />
            <FaTrash onClick={del} className="cursor-pointer" />
          </div>
          <p className="text-[#00a1bac7] ">
            {new Date(data.createdAt).toLocaleDateString()}
          </p>
          <p className="text-[#00a1bac7] ">
            {new Date(data.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </>
  );
}
