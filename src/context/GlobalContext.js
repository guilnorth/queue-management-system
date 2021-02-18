import React, { createContext } from 'react';

import useGlobal from '../hooks/useGlobal';

const GlobalContext = createContext('');

function GlobalProvider({ children }) {
    const {
        attendance,
        setAttendance,
        service,
        setService,
        queueNum,
        setQueueNum
    } = useGlobal();

    return (
        <GlobalContext.Provider
            value={{
                attendance,
                setAttendance,
                service,
                setService,
                queueNum,
                setQueueNum
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalProvider };