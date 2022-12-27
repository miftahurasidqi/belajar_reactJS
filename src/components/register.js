import ReactTypingEffect from "react-typing-effect";
import axios from "axios";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

// import dashboard from "./dashboard";

function Register({ title, descripsi }) {
  const [NIP, setNIP] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

  const handleInputNIP = (inputnip) => {
    setNIP(inputnip);
  };

  const handleInputNama = (inputNama) => {
    setNama(inputNama);
  };

  const handleInputPassword = (inputPassword) => {
    setPassword(inputPassword);
  };

  const userLogin = () => {
    console.log("login");
    console.log("nip", NIP);
    console.log("nama", nama);
    console.log("password", password);
    const Register = {
      nip: NIP,
      nama: nama,
      password: password,
    };
    axios({
      method: "POST",
      url: "http://localhost:3211/users",
      data: Register,
    }).then((result) => {
      console.log("test endpoit", result.data);
      if (result.data.registered) {
        alert("daftar berhasil");
        window.location.replace("/login");
      } else {
        alert("gagal");
      }
    });
  };

  return (
    <Container>
      <div className="d-flex justify-content-center fw-bold h3 my-4">
        <ReactTypingEffect text={[title, descripsi]} speed={100} eraseDelay={3000} eraseSpeed={100} typingDelay={100} />
      </div>
      <Form className="mx-auto w-50">
        <Form.Group className="my-3">
          <Form.Label className="fw-bold">NIP</Form.Label>
          <Form.Control type="number" placeholder="Masukan NIP Anda" required onChange={(ev) => handleInputNIP(ev.target.value)} />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label className="fw-bold">Nama</Form.Label>
          <Form.Control type="string" placeholder="Masukan Nama Anda" required onChange={(ev) => handleInputNama(ev.target.value)} />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control type="password" placeholder="Masukan Password Anda" required onChange={(ev) => handleInputPassword(ev.target.value)} />
        </Form.Group>
        <Button className="mt-4 w-100" onClick={() => userLogin()}>
          Daftar Sekarang
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
