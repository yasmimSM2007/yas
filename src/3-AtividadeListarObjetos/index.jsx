// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.
import { useState } from "react";


export default function Home() { 
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome:'A cinco passos de você', preco:'R$41,17'},
    { id: 1, nome:'O verão que mudou minha vida', preco:'R$39,92'},
    { id: 1, nome:'Orgulho e preconceito', preco:'R$54,12'}
  ]);

  return (
    <div>
          <h1>Livros De Romance</h1> 
          {
            listaProdutos.map((produto)=>
              <div key={produto.id}>
                <p>{produto.nome}</p>
                <p>{produto.preco}</p>
              </div>
            )
          }
    </div>
    ); 
}