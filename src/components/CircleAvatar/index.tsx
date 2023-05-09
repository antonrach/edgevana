import { Box, IconButton } from '@mui/material';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import React from 'react';

interface CircleAvatarProps {
  src: string;
  alt: string;
  onClick?: () => void;
};

const CircleAvatar: React.FC<CircleAvatarProps> = ({
  src,
  alt,
  onClick,
}) => {
  return (
    <IconButton
      title="Change Avatar"
      onClick={onClick}
      sx={{
        height: '40px',
        width: '40px',
        borderRadius: '50%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          opacity: 0,
          display: 'flex',
          transition: '.3s',
          zIndex: 1,
          color: 'white',
          '&:hover': {
            opacity: 1,
            transition: '.3s',
          }
        }}
      >
        <LinkedCameraIcon
          sx={{
            margin: 'auto',
          }}
        />
      </Box>
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          height: '40px',
          width: '40px',
        }}
      />
    </IconButton>
  );
};

export default CircleAvatar;
