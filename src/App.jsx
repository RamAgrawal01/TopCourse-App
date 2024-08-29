import "./App.css";
import{filterData , apiUrl} from "./data.js";
import Navbar from "./components/Navbar.js";
import Filter from  "./components/Filter.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner.js";



const App=()=> {

  const [courses , setCourses] = useState([]);
  const [loading,setLoading]=useState(true);
  const [cetegory,setCetegory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
  }

  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
          // console.log(output.data);
          setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[])

  return (
    <div className="min-h-screen  w-[100vw] flex flex-col  bg-slate-600 ">
      <div>
      <Navbar/>
      </div>

      <div >
      <div>
      <Filter filterData={filterData} cetegory={cetegory} setCetegory={setCetegory} />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center "> 
      {
        loading ? (<Spinner/>) : (<Cards courses={courses}
        cetegory={cetegory}/>)
      }
    </div>
      </div>
    </div>
  );
}

export default App;
