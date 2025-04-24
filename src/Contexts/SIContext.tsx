import { createContext, useState, ReactNode, useContext } from 'react';
import { Config } from '../Models/Config';

interface IntegrationContextType {
    config: Config;
    setConfig: (config: Config) => void;
  }

const IntegrationContext = createContext<IntegrationContextType | undefined>(undefined);

export const IntegrationContextProvider = ({ children }: { children: ReactNode }) => {
    const [config, setConfig] = useState<Config>({ fragment: 'main'});
  
    return (
      <IntegrationContext.Provider value={{ config, setConfig }}>
        {children}
      </IntegrationContext.Provider>
    );
};

export const useConfig = (): IntegrationContextType => {
    const context = useContext(IntegrationContext);
    if (context === undefined) {
      throw new Error('useConfig must be used within a IntegrationContextProvider');
    }
    return context;
};