import { Outlet } from "react-router-dom";

import "./styles/App.css";

function App() {

  return (
    <main className="Main">
      Julio
      <Outlet />
    </main>
  );
}

export default App;

/*
const [openModal, setOpenModal] = useState(false);

<ButtonDarkTheme onClick={() => setOpenModal(true)}>Abir modal</ButtonDarkTheme>
<Modal isOpen={openModal} closeModal={() => setOpenModal(!openModal)}>
  Modal
</Modal>
*/
