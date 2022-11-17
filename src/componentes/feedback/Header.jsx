import propTypes from 'prop-types'

const Header = ({bgColor, c})=>{
    
    return(
        <header style={{backgroundColor:bgColor, color:c}}>
            <h1>Header</h1>
            <p>Feedback App</p>
        </header>
    )
}

//Valores por defecto de props
Header.defaultProps = {
    bgColor: '#000' ,
    color: 'white'
}

//Validaciones de props

Header.propTypes={
    bgColor: propTypes.string,
    color: propTypes.string
}

export default Header; 