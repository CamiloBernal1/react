import Header from "./feedback/Header";
import FeedBackItem from "./feedback/FeedBackItem";

    const HeaderStyles={
        backgroundColor: '#fff',
        color: 'black',
    }

function App(){
    return(
        <div className="container">
           {/* Props para ingresar info al componente */}
           <Header 
                bgColor={HeaderStyles.backgroundColor}
                c = {HeaderStyles.color}
            />
            <FeedBackItem />
            <FeedBackItem />
            <FeedBackItem />
            <FeedBackItem />
        </div>
    )
}

export default App;