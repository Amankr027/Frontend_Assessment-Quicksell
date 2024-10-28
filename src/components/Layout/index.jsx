import React, { useMemo } from 'react';
import './index.css';
import Column from '../List/index';

function Layout({ gridData, grouping, userIdToData }) {
    const keys = useMemo(() => Object.keys(gridData), [gridData]);

    return (
        <div className='grid'>
            {keys.map((k) => (
                <Column
                    key={k}
                    tickets={gridData[k]}
                    grouping={grouping}
                    groupBy={k}
                    userIdToData={userIdToData}
                />
            ))}
        </div>
    );
}

export default Layout;
