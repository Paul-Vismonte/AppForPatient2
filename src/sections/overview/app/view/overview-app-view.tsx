"use client";

import { useState } from 'react';
import { Box, Typography, AppBar, Toolbar, Button, Card, CardContent, CardHeader, IconButton, Grid, Avatar } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Fullscreen } from '@mui/icons-material';
import { Iconify } from 'src/components/iconify';
import WeightChart from 'src/components/WeightChart';
import HeightChart from 'src/components/HeightChartNew';
import MeasurementChart from 'src/components/MeasurementChart';
import { _measurements } from 'src/_mock/_measurements';

const OverviewAppView = () => {
  const [fullScreenOpen, setFullScreenOpen] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Patient Dashboard
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button onClick={() => router.push('/dashboard/analytics')} color="inherit">
              <Iconify icon="ic:round-person" width={24} height={24} />
              My Doctor
            </Button>
            <Button onClick={() => router.push('/dashboard/banking')} color="inherit">
              <Iconify icon="ic:round-calendar-today" width={24} height={24} />
              Appointments
            </Button>
            <Button onClick={() => router.push('/dashboard/course')} color="inherit">
              <Iconify icon="solar:folder-bold" width={24} height={24} />
              Medical Record
            </Button>
            <Button onClick={() => router.push('/dashboard/prescriptions')} color="inherit">
              <Iconify icon="ic:round-description" width={24} height={24} />
              Prescriptions
            </Button>
            <Button onClick={() => router.push('/dashboard/medicines')} color="inherit">
              <Iconify icon="ic:round-medication" width={24} height={24} />
              Medicines
            </Button>
            <Button onClick={() => router.push('/dashboard/chat')} color="inherit">
              <Iconify icon="ic:round-chat" width={24} height={24} />
              Chat
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Card 
            sx={{ 
              mb: 2, 
              maxWidth: '300px',
              borderRadius: 2,
              height: showFullDetails ? 'auto' : '200px',
              transition: 'height 0.3s ease-in-out'
            }}
          >
          <CardHeader 
            title="Patient Profile" 
            sx={{ 
              p: 1,
              bgcolor: 'background.paper'
            }} 
          />
          <CardContent sx={{ p: 1.5 }}>
            <Box
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 0.75,
                cursor: 'pointer'
              }}
              onClick={() => setShowFullDetails(!showFullDetails)}
            >
              <Avatar
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: 'primary.main',
                  mb: 1,
                  boxShadow: 1
                }}
              >
                JP
              </Avatar>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 'bold',
                  color: 'primary.main',
                  mb: 0.75,
                  textTransform: 'capitalize'
                }}
              >
                John Paul Guevarra Vismonte
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 0.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Patient ID:</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>12345</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Age:</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>21</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Gender:</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Male</Typography>
                </Box>
              </Box>

              {showFullDetails && (
                <Box sx={{ mt: 0.5, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Phone:</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>09776117396</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Date of Birth:</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>June 30, 2003</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Religion:</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Catholic</Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </CardContent>
        </Card>
          <Card 
            sx={{ 
              mb: 2,
              borderRadius: 2,
              p: 2,
              height: '200px'
            }}
          >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            p: 2
          }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Book and schedule with the nearest Doctor
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ width: '80%' }}
            >
              Book Now!
            </Button>
          </Box>
        </Card>
        </Box>

        <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <HeightChart />
            </Grid>
            <Grid item xs={12} md={6}>
              <WeightChart />
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ 
                height: '100%', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardHeader title="Vital Signs" />
                <CardContent sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 2,
                  height: '100%',
                  overflow: 'auto'
                }}>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <MeasurementChart 
                      title="Body Mass Index"
                      measurementType="bmi"
                      unit="kg/m²"
                      color="#1976d2"
                      height="100%"
                    />
                    <MeasurementChart 
                      title="Blood Pressure"
                      measurementType="bloodPressure"
                      unit="mmHg"
                      color="#dc3545"
                      height="100%"
                    />
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <MeasurementChart 
                      title="Oxygen Saturation"
                      measurementType="oxygenSaturation"
                      unit="%"
                      color="#28a745"
                      height="100%"
                    />
                    <MeasurementChart 
                      title="Respiratory Rate"
                      measurementType="respiratoryRate"
                      unit="breaths/min"
                      color="#ffc107"
                      height="100%"
                    />
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <MeasurementChart 
                      title="Heart Rate"
                      measurementType="heartRate"
                      unit="bpm"
                      color="#6f42c1"
                      height="100%"
                    />
                    <MeasurementChart 
                      title="Body Temperature"
                      measurementType="bodyTemperature"
                      unit="°C"
                      color="#20c997"
                      height="100%"
                    />
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <MeasurementChart 
                      title="Head Circumference"
                      measurementType="headCircumference"
                      unit="cm"
                      color="#e83e8c"
                      height="100%"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewAppView;
