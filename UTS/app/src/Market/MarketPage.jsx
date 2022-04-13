import React, { Component } from "react"
import Laptop from './Laptop'

// import 'rupiah-format'


const convertRupiah = require('rupiah-format');

class MarketPage extends Component {
    state = {
        listLaptop: [],

    }

    getData = () => {
        fetch('http://localhost:3005/laptops')
            .then(response => response.json())
            .then(myJson => {
                this.setState({
                    listLaptop: myJson
                })
            })
    }



    componentDidMount() {
        this.getData()
    }

    render() {

        return (

            <div className="container-fluid" >
                <div className="container">
                    <div className="row">
                        {
                            // console.log(this.state)
                            this.state.listLaptop.map(laptop => {
                                return <Laptop key={laptop.id} id={laptop.id} gambar={laptop.gambar} nama={laptop.nama} stok={laptop.stok} harga={convertRupiah.convert(laptop.harga)} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MarketPage;