import React from 'react';
import Text from "../../util/Const";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
import Button from "../Button/Button";

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>{Text.closeBtn}</Button>
            <span className={'username'}>
                {user}
            </span>
        </div>
    );
};

export default Header;