import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaGlobeAmericas } from 'react-icons/fa';

import Container from './styles';
import profileImg from '../../assets/Ellipse 88.png';
import logo from '../../assets/logo.png';

function Sidebar() {
  const [pathname, setPathname] = useState(window.location.pathname);

  const history = useHistory();
  console.log(history);

  useEffect(() => {
    history.listen(location => {
      setPathname(window.location.pathname);
    })
  },[history])

  if(pathname === "/" || pathname === "/cadastro") {
    return <div className='teste'/>
  } else {
    return (
      <Container>
        <div className='branding'>
          <img className='logo' src={logo} alt='logo'/>
          <h1 className='title'>Ubuntu</h1>
        </div>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link className='nav-link' to='/perfil'>
              <div className='nav-link-icon'>
                <img className='profile' src={profileImg} alt='Foto de perfil' />
              </div>
              <div className='nav-link-text'>
                Meu Perfil
              </div>
            </Link>
            <Link className='nav-link' to='/conectar'>
              <div className='nav-link-icon'>
                <FaGlobeAmericas className='icon' />
              </div>
              <div className='nav-link-text'>
                Procurar Conexões
              </div>
            </Link>
          </li>
        </ul>
      </Container>
    );
  }
}

export default Sidebar;
