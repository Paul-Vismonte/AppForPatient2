'use client';

import { Box, Typography, Stack, Avatar, IconButton, Card, CardHeader, CardContent, CardActions } from '@mui/material';
import { FavoriteBorder, Close } from '@mui/icons-material';
import { useState } from 'react';

interface ImageModalProps {
  open: boolean;
  onClose: () => void;
  announcement: {
    id: string;
    avatar: string;
    name: string;
    date: string;
    title: string;
    content: string[];
    images: string[];
    likes: number;
  };
  currentImageIndex: number;
}

export default function ImageModal({ open, onClose, announcement, currentImageIndex }: ImageModalProps) {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '2rem',
        zIndex: 1300,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 'calc(100% - 4rem)',
          display: 'flex',
          backgroundColor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          overflow: 'hidden',
        }}
      >
        {/* Left side - Full image */}
        <Box
          sx={{
            width: '50%',
            height: '100%',
            position: 'relative',
            backgroundColor: 'background.default',
          }}
        >
          <img
            src={announcement.images[currentImageIndex]}
            alt={`Announcement ${currentImageIndex + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <Close />
          </IconButton>
        </Box>

        {/* Right side - Post content */}
        <Box sx={{ width: '50%', p: 3 }}>
          <Stack spacing={2}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar src={announcement.avatar} alt={announcement.name} />
                }
                title={
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="subtitle1">{announcement.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {new Date(announcement.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </Typography>
                  </Stack>
                }
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {announcement.title}
                </Typography>
                {announcement.content.map((line, index) => (
                  <Typography key={index} paragraph>
                    {line}
                  </Typography>
                ))}
                {announcement.images.length > 0 && (
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>
                    {announcement.images.length} {announcement.images.length === 1 ? 'image' : 'images'}
                  </Typography>
                )}
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-start', p: 2 }}>
                <IconButton size="small" color="primary">
                  <FavoriteBorder sx={{ fontSize: 20 }} />
                  <Typography variant="caption" sx={{ ml: 0.5 }}>
                    {announcement.likes}
                  </Typography>
                </IconButton>
              </CardActions>
            </Card>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
