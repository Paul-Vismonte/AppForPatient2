'use client';

import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderRadius: 0,
  },
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  overflow: 'hidden',
}));

const StyledImageContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000',
});

const StyledDetailsContainer = styled(Box)(({ theme }) => ({
  width: '400px',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
}));

interface ImageModalProps {
  open: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  content?: string[];
}

export default function ImageModal({ open, onClose, imageUrl, title, content }: ImageModalProps) {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth={true}
      PaperProps={{
        sx: {
          margin: 0,
          width: '100vw',
          height: '100vh',
        },
      }}
    >
      <StyledDialogContent>
        <StyledImageContainer>
          <img
            src={imageUrl}
            alt={title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        </StyledImageContainer>
        <StyledDetailsContainer>
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 8, // 1 * 8px (spacing unit)
              right: 8,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
          {content && (
            <Box sx={{ mt: 2 }}>
              {content.map((line, index) => (
                <Typography key={index} paragraph>
                  {line}
                </Typography>
              ))}
            </Box>
          )}
        </StyledDetailsContainer>
      </StyledDialogContent>
    </StyledDialog>
  );
}