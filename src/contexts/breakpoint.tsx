import { BreakpointContextInterface, BreakpointProviderProps } from './types';
import { createContext, useEffect, useState } from 'react';

export const BreakpointContext =
  createContext<BreakpointContextInterface | null>(null);

export const BreakpointProvider = ({ children }: BreakpointProviderProps) => {
  const [breakpoint, setBreakpoint] = useState<string>('');

  const handleBreakpoint = () => {
    if (window.innerWidth < 768) breakpoint != 'xs' && setBreakpoint('xs');
    else if (window.innerWidth < 1024)
      breakpoint != 'sm' && setBreakpoint('sm');
    else if (window.innerWidth < 1440)
      breakpoint != 'md' && setBreakpoint('md');
    else breakpoint != 'lg' && setBreakpoint('lg');
  };

  useEffect(() => {
    handleBreakpoint();

    function handleResize() {
      handleBreakpoint();
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BreakpointContext.Provider value={{ breakpoint }}>
      {children}
    </BreakpointContext.Provider>
  );
};
