import React from 'react';
import { useQuery } from 'react-query';

export const useInternalQuery = (key:string|string[], constructedEndpoint:string, options:any = {}) =>{

    const { isLoading, data, error } = useQuery(key, () =>
      fetch(constructedEndpoint).then((res) => res.json())
    , options);

    return {isLoading, data, error}

}