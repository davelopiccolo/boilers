import Boilers from "./Boilers";
import Sidebar from "./Sidebar";

// const [page, setPage] = useState(1)

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>


        <div className="col-10"><Boilers />
        </div>
      </div>
    </div>

  );
}

export default App;
