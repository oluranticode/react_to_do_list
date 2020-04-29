import React from 'react';
import ListItems from './ListItems/ListItems';
import './App.css';

 class App extends React.Component {
   constructor(props){
     super(props);

     this.state = {
       items:[],
       currentItem:{
         text:'',
         key:''
       }
     }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.deleteItem = this.deleteItem.bind(this);
     this.setUpdate = this.setUpdate.bind(this);
   }

   handleChange = (event) => {
    this.setState({
      currentItem:{
        text:event.target.value,
        key: Date.now()
      }
    }, () => console.log(this.state))
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const newItem = this.state.currentItem;
      console.log(newItem); 

      if (newItem.text!=="") {
        const newItems=[...this.state.items, newItem];
        this.setState ({
          items:newItems,
          currentItem:{
            text:'',
            key:''
          }
      });
    }
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items:filteredItems
    })
  }
  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if(item.key===key){
        item.text=text; 
      }
    })
    this.setState({
      items: items
    })
  }
   render(){
     return(
       <div className="App">
       <form className="to-do-form" onSubmit={this.handleSubmit}>
       <input type="text" className="addText" placeholder="Add text" 
       value={this.state.currentItem.text} onChange={this.handleChange} />
       <button className="addBtn" type="submit">
       Add
       </button>
       </form>
       <h3>Add your comment</h3>
       <ListItems items={this.state.items} deleteItem={this.deleteItem}
       setUpdate={this.setUpdate}
       />
       </div>

     );
   }
 }

export default App;
