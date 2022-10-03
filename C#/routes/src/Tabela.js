import React from 'react';

const dados = [
    {id: '1', nome: 'Ana', email: 'ana@gmail.com'},
    {id: '2', nome: 'Bruno', email: 'bruno@gmail.com'},
    {id: '3', nome: 'Carlos', email: 'carlos@gmail.com'},
    {id: '4', nome: 'Daniela', email: 'daniela@gmail.com'},
];

const Tabela = () => {
    return (
        <table className="ui table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                </tr>
            </thead>   
            <tbody>
                    {
                        dados.map(it => (  
                            <tr key={it.id}>                          
                                <td>{it.nome}</td>
                                <td>{it.email}</td>
                            </tr>
                        ))
                    }
            </tbody>         
        </table>
    );
};

export default Tabela;