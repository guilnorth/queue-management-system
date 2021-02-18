import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './styles.scss';

export default function Ticket() {
    const { setAttendance, setService, setQueueNum, queueNum, attendance, service } = useContext(GlobalContext);
    const [timeBack, setTimeBack] = useState(8);



    useEffect(() => {
        setQueueNum(queueNum => queueNum + 1)
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeBack > 0)
                setTimeBack(timeBack => timeBack - 1);
            else {
                setAttendance(null);
                setService(null);
            }

        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [timeBack]);




    const dateHour = new Date().toLocaleString("pt-br");

    return (
        <div className="container-ticket">
            <div className="row" style={{ alignSelf: 'center' }}>
                <article className="card ">
                    <section className="date">
                        <time>
                            <span>{queueNum}</span><span>Num</span>
                        </time>
                    </section>
                    <section className="card-cont">
                        <small>{attendance}</small>
                        <h3>{service.substring(2)}</h3>
                        <div className="even-date">
                            <i className="fa fa-calendar"></i>
                            <time>
                                <span>Ticket gerado em</span>
                                <span>{dateHour}</span>
                            </time>
                        </div>
                        <div className="even-info">
                            <i className="fa fa-map-marker"></i>
                            <p>Por favor, aguarde seu atendimento na área de espera.</p>
                        </div>
                    </section>
                </article>
            </div>

            <h1 className='time-back'>Finalizando atendimento em {timeBack}...</h1>
        </div>
    );
}
