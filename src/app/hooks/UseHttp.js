// hokks
import { useEffect } from "react";
import { useState } from "react";

export default function UseHttp(url) {
  // states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [product, setProduct] = useState(null);
  const [comment, setComment] = useState(null)
  const [like, setLike] = useState(null)

  // função para criar usuário
  useEffect(() => {
   setLoading(true)
      async function postaUser() {
        try {
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });
          
        } catch (error) {
          setErr(error)
          console.log(error)
        }
    }
   setLoading(false)
    postaUser();
  }, [user, url]);
  
  useEffect(() => {
   setLoading(true)
     // função para editar usuário
   async function editarUser() {
     try {
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      });
    
     } catch (error) {
      setErr(error)
      console.log(error)
     }
   }
   setLoading(false)
    editarUser();
  }, [user, url]);
 // função para buscar usuários
  useEffect(() => {
    setLoading(true)
    async function getUser() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setUser(json);
      } catch (error) {
        setErr(error)
        console.log(error)
      }
    }
    setLoading(false)
    getUser();
  }, [url]);
// função para deletar usuário 
  async function delUser(){
     setLoading(true)
       try {
          await fetch(url, {
          method: "DELETE"
        });
       
       } catch (error) {
            setErr(error)
            console.log(error)
       }
     setLoading(false)
  }
// função para criar produto
  useEffect(() => {
    setLoading(true)
    async function postaProduct() {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product)
        });

      } catch (error) {
        setErr(error)
        console.log(error)
      }
  }
    setLoading(false)
    postaProduct();
  }, [product, url]);
 // função para editar produto
  useEffect(() => {
    setLoading(true)
    async function editaProduct() {
      try {
        const res = await fetch(url, {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(product)
        });
       
      } catch (error) {
        setErr(error)
        console.log(error)
      }

  }
    setLoading(false)
    editaProduct();
  }, [product, url]);
// função para buscar produtos
  useEffect(() => {
    setLoading(true)
    async function getProduct() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setComment(json);
      } catch (error) {
        setErr(error)
        console.log(error)
      }
    }
    setLoading(false)
    getProduct();
  }, [url]);
// função para deletar produto
  async function delProduct(){
    setLoading(true)
      try {
        const res = await fetch(url, {
        method: "DELETE"
        });
        alert('Produto deletado com sucesso')
      } catch (error) {
        setErr(error)
        console.log(error)
      }
    setLoading(false)
  }
// função para criar comentário
  useEffect(() => {
    setLoading(true)
    async function postaComment() {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(comment)
        });
        
      } catch (error) {
        setErr(error)
        console.log(error)
      }
  }
    setLoading(false)
    postaComment();
  }, [comment, url]);
// função para buscar comentários
   useEffect(() => {
    setLoading(true)
    async function getComment() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setProduct(json);
      } catch (error) {
        setErr(error)
        console.log(error)
      }
    }
    setLoading(false)
    getComment();
  }, [url]);
 // função para criar Like
  useEffect(() => {
    setLoading(true)
    async function postaLike() {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(like)
        });
        
      } catch (error) {
        setErr(error)
        console.log(error)
      }
  }
    setLoading(false)
    postaLike();
  }, [like, url]);
// função para buscar likes
   useEffect(() => {
    setLoading(true)
    async function getLike() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setLike(json);
      } catch (error) {
        setErr(error)
        console.log(error)
      }
    }
    setLoading(false)
    getLike();
  }, [url]);

  return { user, setUser, delUser, product, setProduct, delProduct, setComment, comment, setLike, like, loading, err};
}
