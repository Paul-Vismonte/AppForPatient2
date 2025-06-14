"use client";

import React from 'react';
import { Modal, Box, IconButton, Typography, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

interface ImageModalProps {
  open: boolean;
  onClose: () => void;
  imageUrl?: string;
  title?: string;
}

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.paper,
  borderRadius: 2,
  padding: theme.spacing(3),
  maxWidth: 800,
  maxHeight: '90vh',
  overflow: 'auto',
}));

const ImageModal: React.FC<ImageModalProps> = ({
  open,
  onClose,
  imageUrl,
  title,
}) => {
  if (!open) return null;

  return (
    <StyledModal open={open} onClose={onClose}>
      <ModalContent>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 16, top: 16, color: 'grey.500' }}
        >
          <CloseIcon />
        </IconButton>
        
        <Stack spacing={3}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                objectFit: 'contain',
              }}
            />
          )}
        </Stack>
      </ModalContent>
    </StyledModal>
  );
};

export default ImageModal;
