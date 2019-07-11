import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if(techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alterações nas props ou estados
  componentDidUpdate(_, prevState) {
    if(prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  handleInputChange = e => {
    this.setState({newTech: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault(); //para eveitar o refresh

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      //para o input perder o valor 
      newTech: ''
    });
  }

  handleDelete = (tech) => {
    this.setState({techs: this.state.techs.filter(t => t !== tech )})
  }

  render() {
    return(
        <form onSubmit={this.handleSubmit}>  
        <ul>
          {this.state.techs.map(tech => (
          <TechItem 
            key={tech} 
            tech={tech} 
            onDelete={() => this.handleDelete(tech)} 
            />

          ))}

        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange}
          value={this.state.newTech}
         />
         <button type="submit">Enviar</button>
        </form>   
    );
  }
} 

export default TechList;

/**
 * ==> State no inicio da classe é quando queremos manipular dados para poder aparencer
 * no render
 * ==> <> </> isso é um fragments um tag sem nome... 
 */