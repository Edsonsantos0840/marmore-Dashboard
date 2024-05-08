"use client";
import TopoAdd from "../../components/topos/TopoAdd";
import UseHttp from "../../hooks/UseHttp";
import { useRouter } from 'next/navigation'
import UserCard from "../../components/cards/UserCard";

export default function Usuarios() {
  const url: string = `http://localhost:3000/api/users `;

  const { user} = UseHttp(url);
 
  const router = useRouter()
  
  return (
    <section className="absolute top-0 left-[20%]  w-10/12 m-auto pr-1  ">
     <TopoAdd />
      {
        user &&
          user.map((e: any) => (
           <div key={e.id} >
            <UserCard data={e} />
           </div>
           
          ) ) 
        
      }
    </section>
  );
}
