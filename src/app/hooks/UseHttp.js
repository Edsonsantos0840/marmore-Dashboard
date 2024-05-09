import { useEffect } from "react";
import { useState } from "react";

export default function UseHttp(url) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [product, setProduct] = useState(null);
  const [delId, setDelId] = useState(null)

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

  useEffect(() => {
    setLoading(true)
    async function getProduct() {
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
    getProduct();
  }, [url]);

  async function delProduct(){
    setLoading(true)
      try {
        const res = await fetch(url, {
        method: "DELETE"
        });

      } catch (error) {
        setErr(error)
        console.log(error)
      }
    setLoading(false)
  }

  return { user, setUser, delId, setDelId, delUser, product, setProduct, delProduct, loading, err};
}
