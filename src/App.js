import React, {Fragment, Component} from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import './App.css';


export default class App extends Component {
    constructor() {
        super()
        this.state={
            photos: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photos=> {this.setState({photos:photos})})
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }
    render(){
    const filteredPhotos= this.state.photos.filter(
            photo =>{
                return photo.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
            }
        )
        return(
            <Fragment>
                <div className='tc'>
                <h1 className='f1' >Monthly Training</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList photos={filteredPhotos} />
                </div>
                
                
                
          
        </Fragment>
        )
    }
   
}