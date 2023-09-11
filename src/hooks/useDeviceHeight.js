import { useEffect, useState } from "react";

function useDeviceHeight() {

  const [deviceHeight, setDeviceHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setDeviceHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceHeight;
}

export default useDeviceHeight;
