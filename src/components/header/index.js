import React from 'react';
<<<<<<< HEAD
import {AreaHeader} from './styled'
=======
import {AreaHeader} from './styled';
>>>>>>> 4d3ab0b81316424e0d042a37bba3bf8cbef675f6
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div>
      <AreaHeader>
      <div className='container'>
          <div className='logo'>
              <p>LOGO</p>
          </div>
          
        <nav>
          <ul>
<<<<<<< HEAD
            <li> <a href='/'> Index </a></li>
            <li> <a href='/Sobre'>Sobre</a></li>
            <li> <a href='/Home'>Home</a></li>

            <li><Link to='sobre'>SOBRE V2</Link></li>
            <li><Link to='cep'>CEP V2</Link></li>
=======
            <li> <a href='/'> INDEX</a></li>
            <li> <a href='/sobre'>SOBRE</a></li>
            <li> <a href='/cep'>CEP</a></li>

            <li><Link to='/sobre'>  SOBRE V2</Link> </li>
            <li><Link to='/'>  INDEX V2</Link> </li>

>>>>>>> 4d3ab0b81316424e0d042a37bba3bf8cbef675f6
          </ul>
        </nav>
      </div>
     
      </AreaHeader>
    </div>
  )
};
export default Header;