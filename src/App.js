import appStyles from './App.module.css';

import Navbar from "./navbar";
import Header from "./header";
import Body from "./body";
import Follow from "./follow";
import Footer from "./footer";

const App = () => (
    <div>
        <Navbar/>
        <div className={appStyles.routerWrapper}>
            <div>
                <Header/>
                <Body/>
                <Follow/>
            </div>
        </div>
        <Footer/>
    </div>
)

export default App;
