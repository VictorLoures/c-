import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AlunoInserir from './Alunos/AlunoInserir';
import AlunoListar from './Alunos/AlunoListar';
import Home from './Home';
import Layout from './Layout';
import NotFound from './NotFound';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';
import Tabela from './Tabela';

//npm install react-router-dom

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='pagina1' element={<Pagina1 mensagem={'Mensagem personalizada aqui'}/>}/>
          <Route path='pagina2' element={<Pagina2 />}/>
          <Route path='tabela' element={<Tabela />}/>
          <Route path='alunos' exact element={<AlunoListar />}/>
          <Route path='alunos/inserir' exact element={<AlunoInserir />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);