import Image from "next/image";
import UseHttp from "../../hooks/UseHttp";

export default function CardComment() {
    const url: string = "/api/comentarios";
    const {  comment} = UseHttp(url);
  return (
    <>
      {comment &&
        comment.map((e: any) => (
          <div
            key={e.id}
            className=" w-full m-auto mt-4 py-2 px-8  font-semibold bg-slate-100 rounded-md shadow-lg "
          >
            <div className="flex gap-5 p-2">
              <Image
                className="rounded-full"
                src={e.UserComments[0]?.User.userImage}
                alt={e.UserComments[0]?.User.name}
                width={40}
                height={40}
              />
              <h4>{e.UserComments[0]?.User.name}</h4>
            </div>
            <p>{e.comment}</p>
          </div>
        ))}
    </>
  );
}
