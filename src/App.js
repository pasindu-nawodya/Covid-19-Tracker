import React,{Component} from 'react';
import Navbar from './component/Navbar/Navbar';
import {Cards,Charts,CountryPicker,Title} from './component';
import {fetchData} from './api'
import './App.css'

class App extends Component{

  state={
    data:{},
  }

  async componentDidMount(){
    const fetchDatas = await fetchData();
    this.setState({data:fetchDatas})
  }

  render(){

    const {data} = this.state;
    return (
      <div>
        <Navbar />
        <Title TitleName="GLOBAL CASES"/>
        <div>        
          <Cards data={data}/>
          <Charts data={data}/>
          <CountryPicker />
        </div>
      </div>
    );
  }
}

export default App;
