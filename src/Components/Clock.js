import { useEffect, useState } from 'react';

const Clock = () => {
    const [clock, setClock] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return <h1 style={{ textAlign: 'center2' }}>{clock}</h1>;
};

export default Clock;
