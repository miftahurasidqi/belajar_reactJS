import ReactTypingEffect from "react-typing-effect";
import axios from "axios";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

// import dashboard from "./dashboard";

function Login({ title, descripsi }) {
  const [NIP, setNIP] = useState("");
  const [password, setPassword] = useState("");

  const handleInputNIP = (inputnip) => {
    console.log(inputnip);
    setNIP(inputnip);
  };

  const handleInputPassword = (inputPassword) => {
    console.log(inputPassword);
    setPassword(inputPassword);
  };

  const userLogin = () => {
    console.log("login");
    console.log("nip", NIP);
    console.log("password", password);
    const requestingData = {
      nip: NIP,
      password: password,
    };
    axios({
      method: "POST",
      url: "http://localhost:3211/users/login",
      data: requestingData,
    }).then((result) => {
      console.log("test endpoit", result.data);
      console.log("test endpoit", result);
      localStorage.setItem("NIP", result.data.users.nip);
      localStorage.setItem("Nama", result.data.users.nama);
      window.location.replace("/dashboard");
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
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control type="password" placeholder="Masukan Password Anda" required onChange={(ev) => handleInputPassword(ev.target.value)} />
        </Form.Group>
        <Button className="mt-4 w-100" onClick={() => userLogin()}>
          Login Sekarang
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
