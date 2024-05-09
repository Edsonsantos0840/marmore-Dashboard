"use client";
import Image from "next/image";
import CommentForm from "../form/CommentForm";
import { useState } from "react";
import CountLike from "../Like";
import UseHttp from "../../hooks/UseHttp";
import Link from "next/link";

export default function CardUnico({ data, userId, productId }: any) {
  // const likeUrl = "http://localhost:3000/api/like";
  // const url = "http://localhost:3000/api/comentarios";
  // const [comments, setComments] = useState<any>([]);
  // const [com, setCom] = useState<any>([]);
  // const [like, setLike] = useState([]);

  // useEffect(() => {
  //   async function getComment() {
  //     const res = await fetch(url);
  //     const json = await res.json();
  //     setCom(json);
  //   }
  //   getComment();
  // }, [url]);

  // useEffect(() => {
  //   async function getLike() {
  //     const res = await fetch(likeUrl);
  //     const json = await res.json();
  //     setLike(json);
  //   }
  //   getLike();
  // }, [likeUrl]);

  // const {like}: any = UseHttp(url)
  // const {com}: any = UseHttp(likeUrl)

  // const comentario = com.filter((e: any) => {
  //   if (data.id === e.produtoId) {
  //     return e;
  //   }
  // });
  // const likes = like.filter((e: any) => {
  //   if (data.id === e.produtoId) {
  //     return e;
  //   }
  // });

  // const handleCommentSubmit = (commentData: string): void => {
  //   setComments([...comments, commentData]);
  // };

  return (
    <>
      <div
        key={data.id}
        className="max-w-sm:flex-col content-center p-1 gap-2  bg-[#00000026]  rounded-xl shadow-lg mt-5 mb-5 "
      >
        <div className=" gap-3  ">
          <h2 className=" text-red-700 font-bold text-center text-2xl p-1">
            {data.Title}
          </h2>
          <div>
            <div>
              <iframe
                src={data.image1}
                width={650}
                height={550}
                name="frame"
                className=" m-auto rounded-md hover:scale-125 hover:mt-20 hover:ml-[20%]  left-[19%] ease-in duration-300"
              >
                <h1>Seu navegador não é compaível com a tecnologia.</h1>
              </iframe>
            </div>

            <div className="flex gap-3 flex-wrap justify-center">
              <Link href={data.image1} target="frame">
                <Image
                  src={data.image1 || ""}
                  alt={data.title && data.title}
                  width={140}
                  height={70}
                  className="rounded-md shadow-lg border-2 border-[#00000047] cursor-pointer "
                />
              </Link>

              {data.image2 ? (
                <Link href={data.image2} target="frame">
                  <Image
                    src={data.image2 || ""}
                    alt={data.title && data.title}
                    width={140}
                    height={70}
                    className="rounded-md shadow-lg border-2 border-[#00000047] cursor-pointer "
                  />
                </Link>
              ) : (
                <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047]">
                  <h3>Não possui</h3>
                </div>
              )}

              {data.image3 ? (
                <Link href={data.image3} target="frame">
                  <Image
                    src={data.image3 || ""}
                    alt={data.title && data.title}
                    width={140}
                    height={70}
                    className="rounded-md shadow-lg border-2 border-[#00000047] cursor-pointer "
                  />
                </Link>
              ) : (
                <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047] cursor-pointer">
                  <h3>Não possui</h3>
                </div>
              )}

              {data.image4 ? (
                 <Link href={data.image4} target="frame">
                 <Image
                   src={data.image4 || ""}
                   alt={data.title && data.title}
                   width={140}
                   height={70}
                   className="rounded-md shadow-lg border-2 border-[#00000047] cursor-pointer "
                 />
                 </Link>
              ) : (
                <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047] cursor-pointer">
                  <h3>Não possui</h3>
                </div>
              )}
            </div>

            <p className="  text-[#6b6b6b] text-center p-5 text-lg w-11/12 bg-white rounded-md m-auto my-5">
              {data.description}
            </p>

            {/* componente */}

            <div className="flex items-center justify-between text-xs p-3">
              <p className="text-[#00a1bac7] ">
                {new Date(data.createdAt).toLocaleDateString()}
              </p>
              <div className="text-lg text-[#026f80c7]">
                {/* <CountLike />
              <div className="text-md bg-[#00a1bac7] rounded-full p-3 shadow-lg text-white">
                {likes.map((e: any) => (
                  <li key={e.id}>{e.like.length}</li>
                ))}
                {like && like.length}
              </div> */}
              </div>
              <p className="text-[#00a1bac7] ">
                {new Date(data.updatedAt).toLocaleDateString()}
              </p>
            </div>

            {/* <CommentForm
            onSubmit={handleCommentSubmit}
            userId={userId}
            productId={productId}
          />

          <h2>Comentários:</h2>
          <ul>
            {comentario.map((e: any) => (
              <li key={e.id}>{e.comment}</li>
            ))}
          </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}
