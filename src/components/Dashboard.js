import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { RiShoppingBasketLine } from "react-icons/ri";
import './../App.css';
import Mainheader from "./Mainheader";
import UpperBody from "./UpperBody";
import LowerBody from "./LowerBody";

function Dashboard() {
  return <div class="main">
    <div class="row upperdiv">
      <UpperBody />
    </div>
    <div class="row lowerdiv">
      <LowerBody />
    </div>
  </div>

}
export default Dashboard;