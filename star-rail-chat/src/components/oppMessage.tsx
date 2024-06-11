"use client";

import React from "react";

interface OppMessageProps {
    name: string;
    message: string;
}

const OppMessage: React.FC<OppMessageProps> = ({ name, message }) => {
    return (
        <div className="px-10 grid grid-cols-7 gap-20">
            <div className="col-span-1"><div className="overflow-hidden w-16 h-16 icon-background pl-1 rounded-full"><img className="w-full h-full rounded-full object-cover" src="/images/icons/dr-ratio-character_side_icon.png"/></div></div>
            <div className="col-span-6 flex flex-col gap-1">
                <h1 className="text-base chat-sub-text">{name}</h1>
                <div className="text-lg chat-main-text text-background mr-20 py-2 pl-4 pr-8 rounded-r-xl rounded-bl-xl opp-box-shadow">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
}

export default OppMessage;