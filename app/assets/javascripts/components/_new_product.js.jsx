const NewProduct = (props) => {
  let formFields = {}
 
  return(
    <form onSubmit={ (e) => { props.handleFormSubmit(formFields.name.value, formFields.description.value, formFields.price.value); e.target.reset();}}>
     <input ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
     <input ref={input => formFields.description = input} placeholder='Enter a description' />
     <input ref={input => formFields.price = input} placeholder='Enter a price' />
     <button>Submit</button>
    </form>
  )
}