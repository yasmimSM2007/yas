// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

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
    </div>
   
  );
}

