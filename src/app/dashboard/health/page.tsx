'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Typography, Stack, Card, CardContent, CardHeader, Avatar, IconButton, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { format } from 'date-fns';
import { DashboardContent } from 'src/layouts/dashboard';
import { _healthAnnouncements } from 'src/_mock/health-announcements';
import ImageModal from 'src/components/health/ImageModal';

type AnnouncementLikes = {
  [id: string]: number;
};

type AnnouncementLiked = {
  [id: string]: boolean;
};

type Announcement = typeof _healthAnnouncements[0];

export default function HealthPage() {
  const [likes, setLikes] = useState<AnnouncementLikes>({});
  const [liked, setLiked] = useState<AnnouncementLiked>({});
  const [showEndMessage, setShowEndMessage] = useState(false);
  const [selectedImage, setSelectedImage] = useState<null | { announcement: Announcement; index: number }>(null);

  const handleLike = (id: string) => {
    const announcement = _healthAnnouncements.find(a => a.id === id);
    if (!announcement) return;

    const currentLikes = likes[id] || announcement.likes;
    const isCurrentlyLiked = liked[id] || false;

    setLiked(prevLiked => ({
      ...prevLiked,
      [id]: !isCurrentlyLiked
    }));

    setLikes(prevLikes => ({
      ...prevLikes,
      [id]: isCurrentlyLiked ? currentLikes - 1 : currentLikes + 1
    }));
  };

  const handleImageClick = (announcement: Announcement, index: number) => {
    setSelectedImage({ announcement, index });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShowEndMessage(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const lastPost = document.querySelector('.last-post');
    if (lastPost) {
      observer.observe(lastPost);
    }

    return () => {
      if (lastPost) {
        observer.unobserve(lastPost);
      }
    };
  }, []);

  return (
    <DashboardContent>
      <Container>
        <Stack spacing={5}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h4">Health Bites</Typography>
          </Stack>

          <Stack spacing={3}>
            {_healthAnnouncements.map((announcement, index) => (
              <Card 
                key={announcement.id} 
                sx={{ mb: 3 }}
                className={index === _healthAnnouncements.length - 1 ? 'last-post' : ''}
              >
                <CardHeader
                  avatar={
                    <Avatar src={announcement.avatar} alt={announcement.name} />
                  }
                  title={
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="subtitle1">{announcement.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {format(new Date(announcement.date), 'PPPp')}
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
                    <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {announcement.images.map((imageUrl, index) => (
                        <Box
                          key={index}
                          sx={{
                            position: 'relative',
                            width: 'calc(50% - 4px)',
                            height: 150,
                            borderRadius: 1,
                            overflow: 'hidden',
                            '&:hover': {
                              opacity: 0.85
                            }
                          }}
                        >
                          <img
                            src={imageUrl}
                            alt={`Announcement ${index + 1}`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              cursor: 'pointer'
                            }}
                            onClick={() => handleImageClick(announcement, index)}
                          />
                        </Box>
                      ))}
                    </Box>
                  )}
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-start', p: 2 }}>
                  <IconButton 
                    size="small" 
                    color="primary"
                    onClick={() => handleLike(announcement.id)}
                  >
                    {liked[announcement.id] ? (
                      <FavoriteIcon sx={{ fontSize: 20 }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                    )}
                    <Typography variant="caption" sx={{ ml: 0.5 }}>
                      {likes[announcement.id] || announcement.likes}
                    </Typography>
                  </IconButton>
                </CardActions>
              </Card>
            ))}
            {showEndMessage && (
              <Box sx={{
                textAlign: 'center',
                py: 3,
                color: 'text.secondary',
                fontSize: '0.9rem'
              }}>
                You've reached the end.
              </Box>
            )}
            <ImageModal
              open={selectedImage !== null}
              onClose={handleCloseModal}
              announcement={selectedImage?.announcement || _healthAnnouncements[0]}
              currentImageIndex={selectedImage?.index || 0}
            />
          </Stack>
        </Stack>
      </Container>
    </DashboardContent>
  );
}
