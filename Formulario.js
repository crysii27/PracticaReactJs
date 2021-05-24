import { render } from '@testing-library/react';
import React from 'react'


class Formulario extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            sexo:'',
            tipo:'',
            servicio:'',
        };
        
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h1 style={{}} className="title mg-left-3">Fomrulario de mascotas </h1>
                <div>
                    <label style={{fontSize:'2rem'}} htmlFor="sexo">Sexo de su mascota</label>
                    <select style={{fontSize:'1.7rem'}} id="sexo" name="sexo"
                        value={this.state.sexo} 
                        onChange={this.onChange.bind(this)}
                        >
                        <option value="">Seleccione una opcion</option>
                        <option value="macho">Macho</option>
                        <option value="hembra">Hembra</option>
                    </select>

                    <label style={{marginLeft:'2rem',fontSize:'2rem'}} htmlFor="tipo">Tipo de mascota</label>
                    <select style={{fontSize:'1.7rem'}} id="tipo" name="tipo"
                        value={this.state.tipo} 
                        onChange={this.onChange.bind(this)}
                        >
                        <option value="">Seleccione una opcion</option>
                        <option value="Perro">Perro</option>
                        <option value="Gato">Gato</option>
                        <option value="Hamster">Hamster</option>
                        <option value="Ave">Ave</option>
                    </select>

                    <label style={{marginLeft:'2rem',marginTop:'5rem', fontSize:'2rem'}} htmlFor="tipo">Servicio</label>
                    <select style={{fontSize:'1.7rem'}} id="servicio" name="servicio"
                        value={this.state.servicio} 
                        onChange={this.onChange.bind(this)}
                        >
                        <option value="">Seleccione una opcion</option>
                        <option value="Valoracion">Valoracion</option>
                        <option value="Urgencias">Urgencias</option>
                        <option value="Hospitalizacion">Hospitaliazcion</option>
                    </select>

                    <button style={{border:'.2rem', marginLeft:'2rem',fontSize:'1.7rem'}}>
                        Enviar
                    </button>
                    
                    
                    <div>
                    <p style={{fontSize:'3rem', marginTop:'6rem'}}>{JSON.stringify(this.state)}</p>
                    </div>
                </div>
                
            </div>
        )
    }
}


export default Formulario;

    
    