import React, { useContext } from 'react';
import './styles.scss';
import { IoAccessibility } from "react-icons/io5";
import { GlobalContext } from '../../context/GlobalContext'

export default function HeaderComponent({ titulo }) {
    const { attendance, service } = useContext(GlobalContext);

    let title = (attendance) ? 'SERVIÇOS' : 'ATENDIMENTO';
    if (attendance && service) {
        title = 'IMPRESSÃO'
    }
    return (
        <header className='app-header'>
            <div className='container'>
                <div className='title-header'>{titulo || title}</div>
                <IoAccessibility fontSize='60' />
            </div>
        </header>
    );
}
