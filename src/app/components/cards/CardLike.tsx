'use client'
import UseHttp from "../../hooks/UseHttp";

export default function CardLike() {
  const url: string = "/api/like";

  const { like } = UseHttp(url);

    // console.log(like.length)


  return (
    <div>
      {like &&
          <div className=" m-auto  font-semibold ">
            <p>{like.length }</p>
          </div>
       }
    </div>
  )
}
