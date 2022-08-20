import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "../styles/Search.css";
export const Search = () => {
  return (
    <form
      className="search_form"
      onClick={() => alert("Alerta de location")}
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="search_label">
        <IoLocationSharp color="#f49897" size={30} />
        <input type="text" placeholder="Select location..." />
      </label>
      <HiOutlineMenuAlt3 size={30} />
    </form>
  );
};
