import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (data) => PostAPI('posts', data);
const deleteNewsBlog = (id) => DeleteAPI('posts', id);

const getMahasiswa = () => GetAPI('mahasiswa?_sort=id&_order=desc');
const postMahasiswa = (data) => PostAPI('mahasiswa', data);
const deleteMahasiswa = (id) => DeleteAPI('mahasiswa', id);

// const API = { getNewsBlog, postNewsBlog, deleteNewsBlog }
const API = { getMahasiswa, postMahasiswa, deleteMahasiswa }

export default API;