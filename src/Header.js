//Header component
//Typically should just have the navigation bar
import NavigationBar from "./NavigationBar";

function Header(){
    return(
        <header className="header-footer">
            <NavigationBar />
        </header>
    );
}

export default Header;