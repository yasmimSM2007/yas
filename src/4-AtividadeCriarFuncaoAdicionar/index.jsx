// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`
import { useState } from "react";


export default function Home() { 
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome:'A cinco passos de você', preco:'R$41,17'},
    { id: 1, nome:'O verão que mudou minha vida', preco:'R$39,92'},
    { id: 1, nome:'Orgulho e preconceito', preco:'R$54,12'}
  ]);

  const[listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos,objeto ])
  }

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

