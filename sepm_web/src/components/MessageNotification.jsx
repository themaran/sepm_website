import React from 'react';

const MessageNotification = ({ type, message }) => {
    let bgColor = '';
    if (type === 'success') {
        bgColor = 'bg-green-500';
    } else if (type === 'error') {
        bgColor = 'bg-red-500';
    }

    return (
        <div className={`absolute top-24 right-5 px-4 py-2 rounded-sm text-sm transition-all duration-300 text-white ${bgColor}`}>
            {message}
        </div>
    );
};

export default MessageNotification;
