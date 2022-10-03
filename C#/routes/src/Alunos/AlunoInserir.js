import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AlunoInserir = () => {
    return (
        <div>
            <div>
                <button className="ui primary button">Inserir</button>
                <Link className="ui button" to="/alunos">Voltar</Link>
            </div>
        </div>
    );
};

export default AlunoInserir;