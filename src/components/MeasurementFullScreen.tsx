"use client";

import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { Fullscreen, FullscreenExit } from '@mui/icons-material';

interface MeasurementFullScreenProps {
  children: React.ReactNode;
}

const MeasurementFullScreen: React.FC<MeasurementFullScreenProps> = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <Box 
      sx={{ 
        position: 'relative',
        width: '100%',
        height: '100%'
      }}
    >
      <IconButton 
        onClick={() => setIsFullScreen(!isFullScreen)}
        size="small"
        sx={{ 
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1
        }}
      >
        {isFullScreen ? <FullscreenExit /> : <Fullscreen />}
      </IconButton>

      <Box 
        sx={{ 
          height: isFullScreen ? '90vh' : '100%',
          width: isFullScreen ? '90vw' : '100%',
          position: 'fixed',
          top: isFullScreen ? '5vh' : 'auto',
          left: isFullScreen ? '5vw' : 'auto',
          zIndex: isFullScreen ? 1000 : 0,
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MeasurementFullScreen;
