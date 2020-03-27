import React, { useState } from 'react';
import './CoronaWidget.scss';

export interface CoronaWidgetProps {
    infoURL: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const CoronaWidget = ({ infoURL, position = 'bottom-right' }) => {
    const [hide, setHide] = useState(false);

    const handleHide = () => {
        setHide(!hide);
    };

    return (
        <div
            className={`corona-widget__container ${hide ? 'hidden' : ''}`}
            data-position={position}
        >
            <h4>Important!</h4>
            <p>
                For the latest official Corona Virus news and regulatory
                information, please visit:
            </p>
            <p>
                <a href={infoURL}>{infoURL}</a>
            </p>
            <button onClick={handleHide}>Hide</button>
        </div>
    );
};
