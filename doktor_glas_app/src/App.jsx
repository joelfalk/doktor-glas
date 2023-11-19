import styles from './style';
import {Navbar, Footer, AboutUs, Hero} from './components';
import {Route, Routes} from "react-router-dom";
import Posts from "./Pages/Posts";

const App = () => (
    <div className="bg-dimWhite w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar/>
            </div>
        </div>

        <Routes>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route exact path="/home" element={<Hero/>}/>
            <Route path="/posts" element={<Posts/>}/>
        </Routes>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer/>
            </div>
        </div>
    </div>
);

export default App