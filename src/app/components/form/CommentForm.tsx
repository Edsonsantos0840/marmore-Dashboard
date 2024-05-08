'use client'
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import UseHttp from '../../hooks/UseHttp'

const CommentForm = ({ onSubmit }: any) => {
  const url = "http://localhost:3000/api/comentarios";
  const urlUsers = "http://localhost:3000/api/users";
  const [commentText, setCommentText] = useState('');
 
  const {id} = useParams()
  const route = useRouter()

  const {setPostaCom}: any = UseHttp(url)
  const {user}: any = UseHttp(urlUsers)

  const unico = user.map((e: number | any) => {
      return e.id
    
  } )

  function  handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try {
      // const response = fetch(url, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     comment: commentText,
      //     userId: unico[0],
      //     produtoId: id,
      //   }),

      // });

      const res = setPostaCom({
        comment: commentText,
        userId: unico[0],
        produtoId: id,
      })

      if (res.ok) {
        const data = res.json();
        onSubmit(data); // Chama a função onSubmit com os dados do comentário retornado pelo backend
        setCommentText('');
      } else {
        throw new Error('Erro ao enviar o comentário');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
    route.push(`verProdutoUnico/${id}`)
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Digite seu comentário..."
        rows={4}
        cols={50}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CommentForm;