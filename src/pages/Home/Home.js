import './Home.css';    
import Card from '../../components/Card/Card'; 

function Home(){
    return(
        <>
        <div class="home">
            <h1>Home</h1>
            <div class="container">
                <Card frequencia="30%" aluno="Jovem Tech" />
                <Card frequencia="50%" aluno="O programa"/>
                <Card frequencia="70%" aluno="Inscrição" />
            </div>
        </div>
        </>
    )
}

export default Home;