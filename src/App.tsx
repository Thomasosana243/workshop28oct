import "./App.css";
import Imageslide from "./components/Imageslide.tsx";

function App() {
  const imagelist = [
    {
      image: "https://i.ibb.co/xs008Nk/1.png",
    },
    {
      image: "https://i.ibb.co/c8PfNDT/2.png",
    },
    {
      image: "https://i.ibb.co/qdnKWMQ/3.png",
    },
    {
      image: "https://i.ibb.co/1bw5YsZ/4.png",
    },
    {
      image: "https://i.ibb.co/SN46bwh/5.png",
    },
  ];

  return (
    <div>
      <Imageslide imagelist={imagelist} />
    </div>
  );
}

export default App;
