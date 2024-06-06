import React from 'react';
import './Myform.css'; 

export default class Myform extends React.Component {

    constructor(props) {
        super(props);        
        this.state = {
            name: props.user.name, 
            email: props.user.email, 
            bio: props.user.bio, 
            role: props.user.role
        }
    }

    setName = (e) => {
        this.setState({
            name: e.target.value
        });       
    }

    setEmail = (e) => {
        this.setState({
            email: e.target.value
        });        
    }

    handleBioChange = (e) => {
        this.setState({bio: e.target.value});
    }

    handleRoleChange = (e) => {
        this.setState({role: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();                
        this.setState({
            name: '', 
            email: '', 
            bio: '', 
            role: ''
        });         
    }

    render() {
        return (
            <div>                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="name" placeholder='Digite o seu nome' value={this.state.name} onChange={this.setName}/>
                    </div>
                    <label>
                        <span>E-mail</span>
                        <input type="email" name="email" placeholder='Digite o seu E-mail' value={this.state.email} onChange={this.setEmail}/>
                    </label>
                    <label>
                        <span>Bio:</span>
                        <textarea name="bio" placeholder='Descrição do usuário' onChange={this.handleBioChange} value={this.state.bio}></textarea>
                    </label>     
                    <label>
                        <span>Função no sistema: </span>    
                        <select name="role" onChange={this.handleRoleChange} value={this.state.role}>
                            <option value="">Selecione a Função</option>
                            <option value="user">Usuário</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Aministrador</option>                            
                        </select>
                    </label>               
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        )
    }
}