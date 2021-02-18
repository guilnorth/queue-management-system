import { useState } from 'react';

export default function useGlobal() {
    const [attendance, setAttendance] = useState('');
    const [service, setService] = useState('');
    const [queueNum, setQueueNum] = useState(0);

    return {
        attendance,
        service,
        queueNum,
        setAttendance,
        setService,
        setQueueNum,
    };
}