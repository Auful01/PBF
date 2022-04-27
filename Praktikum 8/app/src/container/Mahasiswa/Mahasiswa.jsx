import React from "react";

const Mahasiswa = (props) => {
    return (
        // <p>COba</p>.
        <div className="col-md-4">
            <div className="card my-5 shadow border-0">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor=""><b>NIM</b></label>
                                <p className="nim-mhs">{props.nim}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor=""><b>Nama</b></label>
                                <p className="nama-mhs">{props.nama}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor=""><b>Alamat</b></label>
                                <p className="alamat-mhs">{props.alamat}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor=""><b>No. HP</b></label>
                                <p className="hp-mhs">{props.hp}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor=""><b>Angkatan</b></label>
                                <p className="angkatan-mhs">{props.angkatan}</p>
                            </div>

                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor=""><b>Status</b></label>
                                <p className="status-mhs">{props.status}</p>
                            </div>

                        </div>
                    </div>
                    <button className="btn btn-sm btn-danger" onClick={() => props.hapusMahasiswa(props.nim)}>Hapus</button>
                </div>
            </div>
        </div>
    )
}

export default Mahasiswa;