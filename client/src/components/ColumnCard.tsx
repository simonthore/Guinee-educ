import React from 'react';

export default function ColumnCard({title, children}) {
    return (
        <div className="card">
            <div className="card-header">
                <h1>{title}</h1>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}
