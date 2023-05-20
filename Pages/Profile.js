import { ChangeProfile } from "./ChangeProfile";
import { useContext } from "react";
import {AppContext} from "../App"
export const Profile =()=>{
    const {username} = useContext(AppContext);
    return <div>
        This is the Profile Pageand the Username is : {username}
        <ChangeProfile />
        </div>

};

