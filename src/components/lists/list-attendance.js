import React, { useContext } from 'react';
import Item from './item';
import { GlobalContext } from '../../context/GlobalContext';

export default function ListAttendance() {
    const { setAttendance } = useContext(GlobalContext);

    return (
        <>
            <Item title='PREFERENCIAL' large onHandleClick={() => setAttendance('PREFERENCIAL')} />
            <Item title='COMUM' large onHandleClick={() => setAttendance('COMUM')} />
        </>
    );
}
