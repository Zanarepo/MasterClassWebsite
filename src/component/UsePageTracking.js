// usePageTracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Ensure gtag is available before calling it.
    if (window.gtag) {
      window.gtag('config', 'G-T02YNQ3W0S', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default usePageTracking;
