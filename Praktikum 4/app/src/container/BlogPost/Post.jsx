import React from "react";

const Post = (props) => {
    return (
        <div className="post-artikel">
            {/* <h2>Daftar Artikel</h2> */}
            <div className="artikel" id={props.idArtikel}>
                <div className="gambar-artikel">
                    <img src="https://placeimg.com/120/120/any" alt="Gambar Thumbnail" />
                </div>
                <div className="konten-artikel">
                    <div className="judul-artikel">{props.judul}</div>
                    <p className="isi-artikel">{props.isi}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
                </div>
            </div>
        </div>
    )
}

export default Post;