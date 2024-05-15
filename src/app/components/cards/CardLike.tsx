'use client'
import UseHttp from "../../hooks/UseHttp";

export default function CardLike() {
  const url: string = "/api/like";

  const { like } = UseHttp(url);

    console.log(like?.like)


  return (
    <div>
      {like &&
        like.map((e: any) => (
          <div key={e.id} className=" m-auto  font-semibold ">
            <p>{e.length}</p>
          </div>
        ))}
    </div>
  );
}
