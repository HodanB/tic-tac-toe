import React from 'react';

import "./ResetButton.css";

export const ResetButton = ({ handleRestart }) => {
    return (
        <button className="reset-btn" onClick={handleRestart}>Play Again</button>
    )
}