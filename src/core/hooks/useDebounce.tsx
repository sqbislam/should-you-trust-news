import React from "react";

export default function useDebounce(value: string, delay: number = 500):[value:any, isDebouncing:boolean]{
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  const [isDebouncing, setIsDebouncing] = React.useState(true);

  React.useEffect(() => {
      
    const handler: NodeJS.Timeout = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebouncing(false);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue, isDebouncing];
}
