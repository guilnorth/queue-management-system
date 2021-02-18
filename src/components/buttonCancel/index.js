import React, { useContext } from 'react';
import './styles.scss';
import { GlobalContext } from '../../context/GlobalContext'


export default function ButtonCancel() {
  const { setAttendance, setService } = useContext(GlobalContext);
  const resetStates = () => {
    setAttendance(null);
    setService(null);
  }
  return (
    <div className='container-button-cancel' onClick={resetStates}>
      Cancelar
    </div>
  );
}
