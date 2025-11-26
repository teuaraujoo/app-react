import { Link, Links, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar(){

    const navigate = useNavigate();
    function handleHome(){
        navigate('/');
    }
    function handleSobre(){
        navigate('/Sobre');
    }
    function handleContato(){
        navigate('/Contato');
    }

    return (
            <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <button class="nav-link active" aria-current="page" onClick={handleHome}>Home</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" onClick={handleSobre}>Sobre</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" onClick={handleContato}>Contato</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
    )
}

export default NavBar;