import React,{Component} from 'react';
import Navbar from './component/Navbar/Navbar';
import {Cards,Charts,CountryPicker,Title} from './component';
import {fetchData} from './api'
import Footer from './component/Footer'

import './App.css'

class App extends Component{

  state={
    data:{},
    country:''
  }

  async componentDidMount(){
    const fetchDatas = await fetchData();
    this.setState({data:fetchDatas})
  }

  handleCountryChange = async(country)=>{
      
      const fetchDatas = await fetchData(country);
      this.setState({ data :fetchDatas, country: country });
      console.log(country)
      console.log(fetchDatas)
  }

  render(){

    const {data,country} = this.state;
    return (
      <div>
        <Navbar />
        <Title TitleName="GLOBAL CASES" country={country}/>
        <div> 
          <center>
            <div className=" mb-5">  
              <CountryPicker handleCountryChange={this.handleCountryChange} />    
            </div> 
          </center>
          <Cards data={data}/>          
          <Charts data={data} country={country}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
