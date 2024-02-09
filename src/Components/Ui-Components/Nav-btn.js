import React from 'react'
import { FaMinus } from "react-icons/fa";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
const Navbtn = () => {
    return (
        <div>
            <div className="iconForminimize">
                <div className="Circle">
                    <span className="circleIcon">
                        <FaMinus />
                    </span>
                </div>
                <div className="Circle">
                    <span className="circleIcon">
                        <RiCheckboxMultipleBlankLine />
                    </span>
                </div>
                <div className="Circle">
                    <span className="circleIcon">
                        <ImCross />
                    </span>{" "}
                </div>
            </div>
        </div>
    )
}

export default Navbtn
