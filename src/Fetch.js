import React from 'react';
import { connect } from 'react-redux';
import { getData } from './Redux/action/myaction';
import './tabel.css'

class Fetch extends React.Component {
  constructor(props){
    super(props)
    this.state ={
     data: '',
    filtertext: [],
     filtertext: this.props.data
    }
   
  }


  componentDidMount() {
    this.props.getData()
  }
  

  handl = (event) => {

    let filtertext = event.target.value.toUpperCase()
    console.log(333, filtertext)
    filtertext = [filtertext]
    console.log(222,filtertext)
  }

  render() {
    
    
    return (
      <div>
        <h2>Api call</h2>
        {/* <button onClick={() => this.props.getData()}>getdata</button> */}
        <input type="text" onChange={(event) => this.handl(event)}/>
        <table>
          <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
          </tr>
          <tbody>
            {this.props.data.map((item, id, index) => {
              return (

                <tr key={id}>
                  <td>{item.id}</td>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToprops = state => {
  console.log("state", state.data)
  return {
    data: state.data
  }
}
const mapDispatchToprops = dispatch => {
  return {
    getData: () => dispatch(getData())
  }
}

export default connect(mapStateToprops, mapDispatchToprops)(Fetch);



























//{this.state.Data.map((item, id) => {
  //return(
   // <tr key={id}>
    //  <td>{item.userId}</td>
    //  <td>{item.id}</td>
    //  <td>{item.title}</td>
     // <td>{item.body}</td>
   // </tr>);
 // })}
//</tbody>