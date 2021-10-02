import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-actions';
import s from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);

    const onChange = event => {
        dispatch(changeFilter(event.target.value));
    };

    return (
        <label className={s.label}>
            Find contact by name
            <input type="text" value={value} onChange={onChange}></input>
        </label>
    );
};

export default Filter;
