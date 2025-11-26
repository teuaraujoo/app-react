import { Link, Links, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar(){

    const navigate = useNavigate();
      
    function handleVaiPara(event){
        const link = event.target.id;
        if(link === 'Home'){
            navigate('/');
        }
        else if(link === 'Sobre'){
            navigate('/Sobre');
        }
        else if(link === 'Contato'){
            navigate('/Contato');
        }
    }

    return (
            <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <button id="Home" class="nav-link active" aria-current="page" onClick={handleVaiPara}>Home</button>
                            </li>
                            <li class="nav-item">
                                <button id="Sobre" class="nav-link" onClick={handleVaiPara}>Sobre</button>
                            </li>
                            <li class="nav-item">
                                <button id="Contato" class="nav-link" onClick={handleVaiPara}>Contato</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
    )
}

export default NavBar;