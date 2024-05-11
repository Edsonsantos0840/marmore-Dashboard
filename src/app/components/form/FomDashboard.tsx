"use client";
import React, { useState } from "react";
import Input from "./Input";
import UseConvert from "../../hooks/UseConvert";
import UseHttp from "../../hooks/UseHttp";
import ConvertImage from "../ConvertImage";
import { useRouter } from "next/navigation";

export default function FormUsuario() {
  const url: string = "http://localhost:3000/api/users";
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fone, setFone] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const router = useRouter()

  const { userImage, convertToBase64 } = UseConvert();
  const { setUser, loading, err } = UseHttp(url);

  function handleSubmit(e: any): void {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      fone,
      userImage,
      tipo,
      status,
    };
    setUser(user);
    alert('Usuário cadastrado com sucesso')
    router.push('/usuarios')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-3/4 p-8 shadow-lg rounded-md "
    >
      {
        err && <p>{err}</p>
      }
      <h1 className="text-3xl text-center mb-8 font-bold ">
        Cadastro de Usuário
      </h1>
      <Input
        texto="Nome"
        type="text"
        placeholder="Digite seu Nome"
        value={name}
        Change={(e: any) => setName(e.target.value)}
      />
      <Input
        texto="E-mail"
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        Change={(e: any) => setEmail(e.target.value)}
      />
      <Input
        texto="Senha"
        type="password"
        placeholder="Digite seu Senha"
        value={password}
        Change={(e: any) => setPassword(e.target.value)}
      />
      <Input
        texto="Telefone"
        type="tel"
        placeholder="Digite seu Telefone"
        value={fone}
        Change={(e: any) => setFone(e.target.value)}
      />
      <div className=" flex justify-between w-full gap-2 ml-4">
        <label className=" text-center py-2 w-full rounded-md border border-[#4e1d1d87] my-2">
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">Escolha o tipo</option>
            <option value="adimin">Administrador</option>
            <option value="colaborador">Colaborador</option>
          </select>
        </label>

        <label className=" text-center py-2 w-full rounded-md border border-[#4e1d1d87] my-2">
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Escolha o status</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </label>
      </div>
      <ConvertImage func={convertToBase64} img={userImage} />
      {
        loading ?
        <Input type="submit" value="Aguarde" disabled/> :
        <button>Enviar</button>
      }
    </form>
  );
}
