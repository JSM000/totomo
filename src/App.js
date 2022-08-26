import { Route, Routes } from "react-router-dom";
import Choose from "./components/Choose";
import MakeRoom from "./components/MakeRoom/MakeRoom";
import EnterRoom from "./components/EnterRoom/EnterRoom";
import Room from "./components/Room/Room";
import EditProfile from "./components/EditProfile/EditProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Choose />} />
        <Route path="/makeRoom" element={<MakeRoom />} />
        <Route path="/enterRoom" element={<EnterRoom />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
