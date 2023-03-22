//Combine all index components in this one
import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";
import Main from "./Main";

function App(){
    return(
        <div>
            <Header />
                <MainSection />
            <Footer />
        </div>
    );
}

export default App;