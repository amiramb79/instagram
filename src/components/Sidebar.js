import "../style/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import  Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profile.jpg";

function Sidebar() {
    return(
        <Sticky topOffset={-80}>
            <div className="sidebar">
                <Profile username="amiram_b79" caption="Amir Bahari" urlText="Switch" iconSize="big" image={image} />
                <Suggestions />
                <Footer />
            </div>
        </Sticky>
    )
}

export default Sidebar;