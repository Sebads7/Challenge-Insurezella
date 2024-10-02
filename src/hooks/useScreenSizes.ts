import { useEffect, useState } from "react";

function useScreen() {
  const [isTablet, setIsTablet] = useState<null | boolean>(null); // Initial state is null
  const [isLarge, setIsLarge] = useState<null | boolean>(null); // Same for large screens
  const [isMobile, setIsMobile] = useState<null | boolean>(null); // Same for mobile screens

  useEffect(() => {
    // Function to update screen size
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
      setIsLarge(window.innerWidth >= 1024);
    };

    // Set initial screen size
    updateScreenSize();

    // Listen for both resize and orientation change events
    window.addEventListener("resize", updateScreenSize);
    window.addEventListener("orientationchange", updateScreenSize);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenSize);
      window.removeEventListener("orientationchange", updateScreenSize);
    };
  }, []);

  return { isTablet, isLarge, isMobile };
}

export default useScreen;
