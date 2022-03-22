
import React, { Component } from "react";
import Mahasiswa from './Mahasiswa'

class BlogMahasiswa extends Component {
    state = {
        listMhs: [],
        insertMhs: {
            nim: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMhs: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMhs };
        formInsertMahasiswa['id'] = formInsertMahasiswa.nim
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMhs: formInsertMahasiswa
        })
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMhs)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI()
            })
    }

    render() {
        return (
            <div className="list-mahasiswa mt-5">

                <div className="card border-0 shadow">
                    <div className="card-body p-3">
                        <div className="row">
                            <div className="col">

                                <div className="form-group">
                                    <label htmlFor=""> <b>NIM</b> </label>
                                    <input type="text" name="nim" id="nim" onChange={this.handleTambahMahasiswa} className="form-control" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor=""><b>Nama</b></label>
                                    <input type="text" name="nama" id="nama" onChange={this.handleTambahMahasiswa} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor=""><b>Alamat</b></label>
                                    <input type="text" name="alamat" id="alamat" onChange={this.handleTambahMahasiswa} className="form-control" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor=""> <b>No. HP</b> </label>
                                    <input type="text" name="hp" id="hp" onChange={this.handleTambahMahasiswa} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor=""> <b>Angkatan</b> </label>
                                    <input type="text" name="angkatan" id="angkatan" onChange={this.handleTambahMahasiswa} className="form-control" />
                                </div>

                            </div>

                            <div className="col">

                                <div className="form-group">
                                    <label htmlFor=""> <b>Status</b></label>
                                    <select name="status" id="status" className="form-control" onChange={this.handleTambahMahasiswa} value={this.state.insertMhs.status}>
                                        <option value="aktif">Aktif</option>
                                        <option value="aktif">Cuti</option>
                                        <option value="lulus">Lulus</option>
                                    </select>
                                    {/* <input type="text" name="status" id="status" onChange={this.handleTambahMahasiswa} className="form-control" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary mt-3" type="submit" onClick={this.handleTombolSimpan}>Simpan</button>
                <div className="text-center">
                    <h2>Daftar Mahasiswa</h2>
                </div>
                <div className="row mx-3">
                    {

                        this.state.listMhs.map(mahasiswa => {
                            return <Mahasiswa key={mahasiswa.nim} nama={mahasiswa.nama} nim={mahasiswa.nim} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} hapusMahasiswa={this.handleHapusMahasiswa} />
                        })
                    }
                </div>
            </div>


        )
    }
}

export default BlogMahasiswa