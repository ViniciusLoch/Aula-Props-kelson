import { useState } from 'react'
import NewAluno from './components/NewAluno'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'


function App() {
  return (
    <div className="App">
      <NewAluno>
        {
          [{ nome: "kelson", email: "kelson@iesp.edu.br", curso: "sistemas para internet", media: 7 },
          { nome: "Joao", email: "Joao@iesp.edu.br", curso: "sistemas para web", media: 8 },
          { nome: "maria", email: "maria@iesp.edu.br", curso: "sistemas para internet", media: 6 }].map((NewAluno, i) =>
          <>
          <p>Nome: {NewAluno.nome}</p>
          <p>Email: {NewAluno.email}</p>
          <p>Curso: {NewAluno.curso}</p>
          <p>Media: {NewAluno.media}</p>
          <p>Status: {NewAluno.media >= 7.0 ? "APROVADO" : "REPROVADO"}</p>
          </>
      )}
        </NewAluno>
    </div>
  )
}

export default App
