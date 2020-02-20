class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewProduct = this.addNewProduct.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateProduct = this.updateProduct.bind(this)
  }
  componentDidMount(){
    fetch('/api/v1/products.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ products: data }) });
  }

  handleFormSubmit(name, description, price){
    console.log(name, description, price)
    let body = JSON.stringify({product: {name: name, description:   description, price: price} })
  	fetch('http://localhost:3001/api/v1/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((product)=>{
      this.addNewproduct(product)
    })
  }

  handleDelete(id){
    fetch(`http://localhost:3001/api/v1/products/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.deleteProduct(id)
      })
  }

  deleteProduct(id){
    newProducts = this.state.products.filter((product) => product.id !== id)
    this.setState({
      products: newProducts
    })
  }

  addNewProduct(product){
    this.setState({
      products: this.state.products.concat(product)
    })
  }

  handleUpdate(product){
    fetch(`http://localhost:3001/api/v1/products/${product.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({product: product}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateProduct(product)
      })
  }
  updateProduct(product){
    let newproducts = this.state.products.filter((f) => f.id !== product.id)
    newproducts.push(product)
    this.setState({
      products: newproducts
    })
  }

  render(){
    return(
      <div>
        <NewProduct handleFormSubmit={this.handleFormSubmit}/>
        <AllProducts products={this.state.products} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate} />
      </div>
    )
  }
}