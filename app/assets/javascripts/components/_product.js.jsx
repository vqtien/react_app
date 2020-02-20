class Product extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      let name = this.name.value
      let description = this.description.value
      let price = this.price.value
      let id = this.props.product.id
      let product = {id: id, name: name, description: description, price: price}
      this.props.handleUpdate(product)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){

  	let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.product.name}/>:<h3>{this.props.product.name}</h3>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.product.description}/>:<p>{this.props.product.description}</p>
    let price = this.state.editable ? <input type='text' ref={input => this.price = input} defaultValue={this.props.product.price}/>:<p>{this.props.product.price}</p>
    return(
      <div>
        {name}
        {description}
        {price}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.product.id)}>Delete</button>
      </div>
    )      
  }
}