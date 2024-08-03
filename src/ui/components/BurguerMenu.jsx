import { useState } from "react"
import { ListMenu } from "./ListMenu";


export const BurguerMenu = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const onToggleMenu = () => {
        
        const body = document.querySelector('.active')

        if ( toggleMenu ) {
            body.classList.remove('no-scroll')
        }
        else {
            body.classList.add('no-scroll') 
        }

        setToggleMenu( !toggleMenu )
    }

    return (
        <>
            <div
                onClick={ onToggleMenu }
                className={`menu-container ${toggleMenu && 'active'}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            
            <ListMenu onToggleMenu={ onToggleMenu } toggleMenu={ toggleMenu } />

        </>

    )
}
