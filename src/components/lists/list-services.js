import React, { useContext } from 'react';
import Item from './item';
import { GlobalContext } from '../../context/GlobalContext';


export default function ListServices() {
    const { setService } = useContext(GlobalContext);

    const services = [
        '1. ATENDIMENTO PESSOAL',
        '2. PAGAMENTO DE CONTAS',
        '3. ATENDIMENTO EMPRESARIAL',
        '4. SERVIÇOS INTERNOS'
    ]
    const servicesRender = services.map((item) =>
        <Item key={item.toString()} title={item} onHandleClick={() => setService(item)} />)

    return (
        <div style={{ paddingBottom: '150px' }}>
            {servicesRender}
        </div>
    );
}
