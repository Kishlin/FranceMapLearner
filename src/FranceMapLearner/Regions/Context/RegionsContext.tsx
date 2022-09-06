import React, { createContext, ReactNode } from 'react';

import REGIONS from './regions';

const contextValue: RegionsContextType = {
    regions: REGIONS,
};

export const RegionsContext = createContext<RegionsContextType>(contextValue);

export function RegionsProvider({ children }: { children: ReactNode }) {
    return (
        <RegionsContext.Provider value={contextValue}>
            {children}
        </RegionsContext.Provider>
    );
}
