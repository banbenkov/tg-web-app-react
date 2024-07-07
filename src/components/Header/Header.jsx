import React from 'react';
import Text from "../../util/Const";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <button onClick={onClose}>{Text.close}</button>
            <span className={'username'}>
                {user}
            </span>
        </div>
    );
};

export default Header;