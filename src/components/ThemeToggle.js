import React from "react";
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../redux/budgetSlice";

function ThemeToggle() {
    const { themeMode } = useSelector(state => state.budget);
    console.log(themeMode);
    const dispatch = useDispatch();
    const styles = {
        fontSize: "1.5rem"
    }
    return (
        <div onClick={() => dispatch(changeMode())} className="d-flex justify-content-center align-items-center">
                {themeMode ? <BsToggle2On style={styles} /> : <BsToggle2Off style={styles} />}
        </div>
    )
}


export default ThemeToggle;