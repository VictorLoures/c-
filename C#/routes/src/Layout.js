import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/pagina1'}>Página 1</Link>
                    </li>
                    <li>
                        <Link to={'/pagina2'}>Página 2</Link>
                    </li>
                    <li>
                        <Link to={'/tabela'}>Tabela</Link>
                    </li>
                    <li>
                        <Link to={'/alunos'}>Alunos</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;