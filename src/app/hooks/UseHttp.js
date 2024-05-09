import { useEffect } from "react";
import { useState } from "react";

export default function UseHttp(url) {
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(null);
  const [delId, setDelId] = useState(null)

  useEffect(() => {
    async function postaUser() {
     await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    }
    postaUser();
  }, [user, url]);
  
  useEffect(() => {
    async function editarUser() {
     await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    }
    editarUser();
  }, [user, url]);

  useEffect(() => {
    async function getUser() {
      const res = await fetch(url);
      const json = await res.json();
      setUser(json);
    }
    getUser();
  }, [url]);

  async function delUser(){
    await fetch(url, {
      method: "DELETE"
    });
  }

  useEffect(() => {
    async function postaProduct() {
    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
    }
    postaProduct();
  }, [product, url]);

  useEffect(() => {
    async function editaProduct() {
      await fetch(url, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(product),
      });
    }
    editaProduct();
  }, [product, url]);

  useEffect(() => {
    async function getProduct() {
      const res = await fetch(url);
      const json = await res.json();
      setProduct(json);
    }
    getProduct();
  }, [url]);

  async function delProduct(){
    const res = await fetch(url, {
      method: "DELETE"
    });
    // const json = await res.json()

    // setProduct(json)
  }

  return { user, setUser, delId, setDelId, delUser, product, setProduct, delProduct};
}
