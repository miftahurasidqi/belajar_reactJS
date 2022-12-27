import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Logout } from "./logOut";
import axios from "axios";

const Edit = () => {
  const [passwordBaru, setPasswordBaru] = useState();
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState(localStorage.getItem("Nama"));

  const updateProfile = () => {
    const requestingData = {
      nip: localStorage.getItem("NIP"),
      passwordBaru: passwordBaru,
      password: password,
      nama: nama,
    };
    axios({
      method: "PUT",
      url: "http://localhost:3211/users",
      data: requestingData,
    }).then((result) => {
      alert("Profil Berhasil diubah, Silahkan login kembali");
      Logout();
    });
  };

  return (
    <Form>
      <h1>a</h1>
      <Form.Group>
        <Form.Label>Nama</Form.Label>
        <Form.Control onChange={(e) => setNama(e.target.value)} defaultValue={localStorage.getItem("Nama")} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <hr />
      <Form.Group>
        <Form.Label>Password Baru</Form.Label>
        <Form.Control onChange={(e) => setPasswordBaru(e.target.value)} />
      </Form.Group>
      <Form.Text>Silahkan Masukan Password Lama Anda, dan anda akan di arahkan ke halaman login.</Form.Text>
      <Button onClick={() => updateProfile()}>Update Profile</Button>
    </Form>
  );
};

export default Edit;
