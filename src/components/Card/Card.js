import './Card.css';
function Card ({aluno, frequencia}){
    return(
        <>
        <div class="card">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
                
                <h5 class="card-title"><i class="fa-solid fa-circle-user"></i> {aluno} </h5>
                <p class="card-text">{frequencia}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>
    )
}

export default Card;