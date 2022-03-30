import React from "react"
import { Products } from '../Products'

class Main extends React.Component {

        


    state = {
        products: [],
    }


    componentDidMount() {
        fetch('./products.json' )
            .then((responce) => responce.json())
            .then((data) => this.setState({products:data}))
    }



    render() {
        const {products} = this.state;



        return (
            <main className="container content" >
                <Products products={products} />       
            </main>
        );
    }






}
   

export {Main}