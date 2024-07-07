import React, {useEffect, useState} from 'react';
import './Form.css';
import Text from "../../util/Const";
import {useTelegram} from "../../hooks/useTelegram";
const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: Text.sendData
        })
    }, [])

    useEffect(() => {
        if(!country || !city) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city])

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeCity = (e) => {
        setCity(e.target.value);
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }

    return (
        <div className={'form'}>
            <h3>{Text.formTitle}</h3>
            <input
                className={'input'}
                type="text"
                placeholder={Text.inputPlaceholderCountry}
                value={country}
                onChange={onChangeCountry}/>
            <input
                className={'input'}
                type="text"
                placeholder={Text.inputPlaceholderCity}
                value={city}
                onChange={onChangeCity}/>
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>{Text.fizFace}</option>
                <option value={'legal'}>{Text.yrFace}</option>
            </select>
        </div>
    );
};

export default Form;