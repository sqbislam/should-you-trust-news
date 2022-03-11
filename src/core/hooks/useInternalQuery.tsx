import React from 'react';
import { useQuery } from 'react-query';

export const useInternalQuery = (key:string, constructedEndpoint:string) =>{

    const { isLoading, data, error } = useQuery(key, () =>
      fetch(constructedEndpoint).then((res) => res.json())
    );

    return {isLoading, data, error}

}