import { useEffect, useState } from "react"; // useEffect = renderan pertama kali
import { Container } from "react-bootstrap";
import { Logout } from "./logOut";
import axios from "axios";
import Edit from "./edit";

const Dashboard = ({ title }) => {
  const [absensiList, setAbsensiList] = useState([]);
  const [absenNotif, setAbsenNotif] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("Nama") && !localStorage.getItem("NIP")) {
      console.log("anda belum login");
      window.location.replace("/login");
    }

    axios({
      method: "GET",
      url: "http://localhost:3211/absensi",
    }).then((result) => setAbsensiList(result.data.absensi));
  }, [absenNotif]);

  // console.log(absensiList);

  const ChcekInOut = (param) => {
    console.log(param);

    const requestingData = {
      nip: localStorage.getItem("NIP"),
    };
    axios({
      method: "POST",
      url: `http://localhost:3211/absensi/${param}`,
      data: requestingData,
    }).then((result) => {
      console.log(result.data);
      setAbsenNotif(!absenNotif);
      // if (result.data) alert(`${param} sukses`);
    });
  };

  return (
    <Container>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">{localStorage.getItem("Nama")}</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => ChcekInOut("checkin")}>
                Check In
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => ChcekInOut("checkout")}>
                Check Out
              </button>
            </div>
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => Logout()}>
              <span data-feather="calendar" className="align-text-bottom"></span>
              Log Out
            </button>
          </div>
        </div>
        <h2>{title}</h2>

        <div>
          <p>Selamat Datang {localStorage.getItem("Nama")}</p>
          <p>NIP : {localStorage.getItem("NIP")}</p>
        </div>
        <Edit title="Edit Profile" />
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">NIP</th>
                <th scope="col">Status</th>

                <th scope="col">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {absensiList.map((absen, i) => {
                const { users_nip, status, createdAt } = absen;
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{users_nip}</td>
                    <td>{status}</td>

                    <td>{createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
