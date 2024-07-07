import React from 'react';
import buttonText from "../../util/Const";
import {useTelegram} from "../hooks/useTelegram";

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <button onClick={onClose}>{buttonText.close}</button>
            <span className={'username'}>
                {user}
            </span>
        </div>
    );
};

export default Header;