import React from 'react';

function Button({ children, onClick, type = 'button', className }) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`bg-blue-500 text-white rounded-md p-2 ${
                className || ''
            }`}
        >
            {children}
        </button>
    );
}

export default Button;
