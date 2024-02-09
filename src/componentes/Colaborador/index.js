import { IoMdCloseCircle, IoIosHeart , IoIosHeartEmpty   } from "react-icons/io";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {

    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    return (<div className="colaborador">
        <IoMdCloseCircle  
            size={25}
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito 
                ? <IoIosHeart size={25} color="#f10b0b" onClick={favoritar} /> 
                : <IoIosHeartEmpty size={25} onClick={favoritar} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador