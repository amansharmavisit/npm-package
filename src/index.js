import React from 'react';

export default function Test ({
    encrypted,
    clientId,
}) {
    return (
        <div>
            <p>
                Hello this the view you get when you call. 
                Data - {encrypted}
                ClientId - {clientId}
            </p>
        </div>
    );
}


export function testFunction (...params) {
    console.log(params);
    return params;
}

export function testBranchFunction (...params) {
    console.log(params);
    return params;
}
