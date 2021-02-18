import React, { useContext } from 'react';
import ListAttendance from '../lists/list-attendance';
import ListServices from '../lists/list-services';
import ButtonCancel from '../buttonCancel';
import Ticket from '../ticket';
import './styles.scss';
import { GlobalContext } from '../../context/GlobalContext'

export default function MainComponent() {

    const { attendance, service } = useContext(GlobalContext);
    const renderList = () => {
        if (service && attendance)
            return <Ticket />
        if (attendance)
            return (
                <>
                    <ListServices />
                    <ButtonCancel />
                </>)

        return <ListAttendance />
    }

    return (
        <>
            <div className='main-container'>
                {renderList()}
            </div>
        </>
    );
}
