import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Outlet, Link } from 'react-router-dom';

const AlunoListar = () => {

    const [estado, setEstado] = useState({ status: 1, objs: []});

    useEffect(() => {
        if (estado.status === 1) {
            axios.get(" http://localhost:3004/alunos")
            .then(resp => setEstado({...estado, status: 2, objs: resp.data}));
        }
    }, []);

    if (estado.status === 1) {
        return <div>Carregando...</div>
    }

    return (
        <>
            <div>
                <Link className="ui primary button" to="/alunos/inserir">Inserir</Link>
            </div>
            <table className="ui table">
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Nome</th>
                    </tr>
                </thead>   
                <tbody>
                        {
                            estado.objs.map(it => (  
                                <tr key={it.id}>                          
                                    <td>{it.matricula}</td>
                                    <td>{it.nome}</td>
                                </tr>
                            ))
                        }
                </tbody>         
            </table>
        </>
    );
};

export default AlunoListar;