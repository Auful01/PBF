import React, { Component } from "react";
import API from "../../services";
import './BlogPost.css';
import Post from "./Post";


class BlogPost extends Component {
    state = {
        listArtikel: [],
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI = () => {
        // fetch('http://localhost:3001/posts')
        //     .then(response => response.json())
        //     .then(jsonHasilAmbilDariAPI => {
        //         this.setState({
        //             listArtikel: jsonHasilAmbilDariAPI
        //         })
        //     })
        API.getNewsBlog().then(res => { this.setState({ listArtikel: res }) })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        API.deleteNewsBlog(data).then(res => { this.ambilDataDariServerAPI() })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = { ...this.state.insertArtikel };
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        })
    }

    handleTombolSimpan = () => {

        API.postNewsBlog(this.state.insertArtikel).then(res => { this.ambilDataDariServerAPI() })
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" name="title" onChange={this.handleTambahArtikel} className="form-control" id="title" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" name="body" id="body" onChange={this.handleTambahArtikel} cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel} isi={artikel.body} />
                    })
                }
                {/* <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang" /> */}
                {/* <div className="artikel">
                    <div className="gambar-artikel">
                        <img src="https://placeimg.com/120/120/any" alt="Gambar Thumbnail" />
                    </div>
                    <div className="konten-artikel">
                        <div className="judul-artikel">Judul Artikel</div>
                        <p className="isi-artikel">Isi Artikel</p>
                    </div>
                </div> */}
            </div>
            // <p>Blog Artikel</p>
        )
    }
}


export default BlogPost;