import  "../style/menu.scss";
import {ReactComponent as Home} from "../images/home.svg";
import {ReactComponent as Inbox} from "../images/Inbox.svg";
import {ReactComponent as Explore} from "../images/explore.svg";
import {ReactComponent as Notification} from "../images/notifications.svg";
import image from "../images/profile.jpg";
import ProfileIcon from "./profileIcon";
function Menu () {
    return( 
    <div className="menu">
      <Home className="icon" />
      <Inbox className="icon" />
      <Explore className="icon" />
      <Notification className="icon" />
      <ProfileIcon  iconSize="small"  image={image}   />
    </div>
    );
}

export default Menu;
