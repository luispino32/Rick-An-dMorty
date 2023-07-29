
import SearchBar from "./SearchBar.jsx"

const Nav = (props) => {
    return(
        <div>
            <SearchBar onSearch={props.onSearch} />
        </div>
    );
}

export default Nav;