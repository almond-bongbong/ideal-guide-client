import { useCallback, useEffect, useRef } from 'react';

function useIsDidMount() {
  const isDidMountRef = useRef<boolean>(false);

  useEffect(() => {
    isDidMountRef.current = true;
  }, []);

  return useCallback(() => {
    return isDidMountRef.current;
  }, []);
}

export default useIsDidMount;
