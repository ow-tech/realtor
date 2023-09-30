import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to the top function
function scrollToTop() {
  window.scrollTo(0, 0);
}

// Custom wrapper component to handle scroll to top behavior
const ScrollToTopWrapper = ({ children }) => {
  const location = useLocation();

  // Effect to scroll to the top when the component mounts or URL changes
  useEffect(() => {
    // Scroll to the top of the page whenever the URL changes
    scrollToTop();
  }, [location]);

  useEffect(() => {
    // Disable scroll restoration so that the page doesn't remember the scroll position on refresh
    window.history.scrollRestoration = 'manual';
  }, []);

  return <>{children}</>;
};

export default ScrollToTopWrapper;
