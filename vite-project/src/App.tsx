import "./Components/NavBar.css";

import Navbar from "./Components/NavBar";

function App() {
  const userInfo = {
    image:
      "https://wikiclic.com/wp-content/uploads/2023/05/image-libre-de-droit-wikiclic.jpg",
    username: "Marco@wildcodeschool.com",
  };

  return (
    <>
      <Navbar userinfoProps={userInfo} />
    </>
  );
}

export default App;
