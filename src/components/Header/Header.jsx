import React from 'react';
import buttonText from "../../util/Const";

const Header = () => {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close();
    };

    return (
        <div className={'header'}>
            <button>{buttonText.close}</button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;