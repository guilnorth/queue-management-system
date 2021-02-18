import React, { useState, useEffect } from 'react';
import './styles.scss';
import { IoTimeOutline, IoHelpCircle } from "react-icons/io5";



export default function FooterComponent() {
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const [date, setDate] = useState(new Date());
    return (
        <footer className='app-footer'>
            <div className='container'>
                <div className='hour-container'>
                    <IoTimeOutline fontSize='60' color='#FF6F00' />
                    <span className='hour'>{date.toLocaleTimeString('pt-BR')}</span>
                </div>
                <div className='logo'>
                    LOGO
                </div>
                <div>
                    <IoHelpCircle fontSize='60' color='#FF6F00' />
                </div>
            </div>
        </footer>
    );
}
