import { useState } from "react"
import { ListMenu } from "./ListMenu";


export const BurguerMenu = () => {

    const [toggleMenu, setToggleMenu] = useState(false);



    return (
        <>
            <div
                onClick={() => setToggleMenu(!toggleMenu)}
                className={`menu-container ${toggleMenu && 'active'}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            
            <ListMenu setToggleMenu={ setToggleMenu } toggleMenu={ toggleMenu } />

        </>

    )
}
