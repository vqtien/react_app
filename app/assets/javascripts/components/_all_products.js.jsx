
const AllProducts = (props) => {
    var products = props.products.map((product) => {
        return(
	        <div key={product.id}>
	        <Product product={product} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
	        </div>
        )
    })
    return(
        <div>
          {products}
        </div>
    )
}
