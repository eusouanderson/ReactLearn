import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <div>
            <li>
                {marca} - {ano_lancamento} 
            </li>
        </div>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca : 'Nome da Marca',
    ano_lancamento: 2022
}


export default Item