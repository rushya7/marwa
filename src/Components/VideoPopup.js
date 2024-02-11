import React, { useEffect, useRef } from 'react';
import GLightbox from 'glightbox';

import 'glightbox/dist/css/glightbox.min.css';

const VideoPopup = ({ videoId }) => {
  const lightboxRef = useRef(null);

  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      closeButton: true,
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="text-center mt-3">
      <a
        href={`https://www.youtube.com/watch?v=X2JYmZCZcW4`}
        className="glightbox"
        data-glightbox="type: video"
        ref={lightboxRef}
        style={{ position: 'relative', display: 'inline-block' }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Add a background color for visibility
            borderRadius: '50%', // Make it a circle
            padding: '10px', // Adjust padding as needed
            cursor: 'pointer',
          }}
        >
          {/* Assuming you have a custom play button */}
          {/* <img src="/path/to/play-button.png" alt="Play" style={{ width: '50px', height: '50px' }} /> */}
          <div class="text-center">
        
        <a 
        class="animated-btn text-white" 
        href={`https://www.youtube.com/watch?v=X2JYmZCZcW4}`}
        data-glightbox="type: video"
        ref={lightboxRef}
        >
          <i class="fa fa-play"></i>
          </a>
    </div>
        </div>
      </a>
    </div>
  );
};

export default VideoPopup;