"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, AppBar, Button, Avatar, Toolbar, Typography, Card, CardHeader, CardContent, Grid } from '@mui/material';
import { Iconify } from 'src/components/iconify';
import WeightChart from '@/components/WeightChart';
import HeightChart from '@/components/HeightChart';
import MeasurementChart from '@/components/MeasurementChart';
import MeasurementInput from '@/components/MeasurementInput';

function OverviewAppView() {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const router = useRouter();

  // Measurement states
  const [weightMeasurements, setWeightMeasurements] = useState([{ value: 70, date: new Date().toISOString().split('T')[0] }]);
  const [heightMeasurements, setHeightMeasurements] = useState([{ value: 170, date: new Date().toISOString().split('T')[0] }]);
  const [bloodPressureMeasurements, setBloodPressureMeasurements] = useState([{ value: 120, date: new Date().toISOString().split('T')[0] }]);
  const [bloodTypeMeasurements, setBloodTypeMeasurements] = useState([{ value: 1, date: new Date().toISOString().split('T')[0] }]);
  const [heartRateMeasurements, setHeartRateMeasurements] = useState([{ value: 72, date: new Date().toISOString().split('T')[0] }]);
  const [respiratoryRateMeasurements, setRespiratoryRateMeasurements] = useState([{ value: 16, date: new Date().toISOString().split('T')[0] }]);
  const [bmiMeasurements, setBmiMeasurements] = useState([{ value: 24.5, date: new Date().toISOString().split('T')[0] }]);
  const [oxygenSaturationMeasurements, setOxygenSaturationMeasurements] = useState([{ value: 98, date: new Date().toISOString().split('T')[0] }]);
  const [bodyTemperatureMeasurements, setBodyTemperatureMeasurements] = useState([{ value: 36.8, date: new Date().toISOString().split('T')[0] }]);
  const [headCircumferenceMeasurements, setHeadCircumferenceMeasurements] = useState([{ value: 56, date: new Date().toISOString().split('T')[0] }]);

  return (
    <Box sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
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
                    width: 25,
                    height: 25,
                    bgcolor: 'primary.main',
                    mb: 1,
                    boxShadow: 1
                  }}
                >
                  PV
                </Avatar>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 'bold',
                    color: 'primary.main',
                    mb: 0.85,
                    textTransform: 'capitalize'
                  }}
                >
                  John Paul G. Vismonte
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 0.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Phone:</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>09776117396</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Age:</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>21</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Gender:</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Male</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Date of Birth:</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>30 June 2003</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Location:</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Sto. Tomas San Luis Pampanga</Typography>
                  </Box>
                </Box>
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

        <Box sx={{ 
          width: '100%', 
          maxWidth: '1400px', 
          mx: 'auto', 
          p: 4
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Basic Measurements */}
            <Box sx={{ 
              width: '100%',
              height: 'auto', 
              display: 'flex', 
              flexDirection: 'column',
              border: '1px solid #000000',
              borderRadius: 4,
              p: 3,
              mb: 4
            }}>
              <Box 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid #000000',
                  mb: 3,
                  pb: 2
                }}
              >
                <Typography variant="h6">
                  Basic Measurements
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 4
                }}
              >
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #000000',
                        borderRadius: 2,
                        p: 2,
                        backgroundColor: 'transparent'
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" sx={{ color: '#666' }}>
                          Weight
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          {weightMeasurements[0]?.value || 0} kg
                        </Typography>
                      </Box>
                      <MeasurementChart 
                        title="Weight" 
                        measurementType="weight" 
                        unit="kg" 
                        color="#ffc107" 
                        data={weightMeasurements.map(m => ({ date: m.date, value: m.value }))}
                        maxValue={150} 
                      />
                      <MeasurementInput 
                        title="Weight" 
                        measurements={weightMeasurements}
                        onMeasurementsChange={setWeightMeasurements}
                        unit="kg"
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #000000',
                        borderRadius: 2,
                        p: 2,
                        backgroundColor: 'transparent'
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" sx={{ color: '#666' }}>
                          Height
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          {heightMeasurements[0]?.value || 0} cm
                        </Typography>
                      </Box>
                      <MeasurementChart 
                        title="Height" 
                        measurementType="height" 
                        unit="cm" 
                        color="#6f42c1" 
                        data={heightMeasurements.map(m => ({ date: m.date, value: m.value }))}
                        maxValue={220} 
                      />
                      <MeasurementInput 
                        title="Height" 
                        measurements={heightMeasurements}
                        onMeasurementsChange={setHeightMeasurements}
                        unit="cm"
                      />
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/* Vital Signs */}
            <Box sx={{ 
              width: '100%',
              height: 'auto', 
              display: 'flex', 
              flexDirection: 'column',
              border: '1px solid #000000',
              borderRadius: 4,
              p: 3
            }}>
              <Box 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid #000000',
                  mb: 3,
                  pb: 2
                }}
              >
                <Typography variant="h6">
                  Vital Signs
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 4
                }}
              >
                <Grid container spacing={4}>
                  {/* First Row */}
                  <Grid item xs={12}>
                    <Card 
                      sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #000000',
                        borderRadius: 2,
                        p: 2,
                        bgcolor: 'background.paper',
                        height: '100%'
                      }}
                    >  
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" sx={{ color: '#666' }}>
                          Blood Pressure
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          {bloodPressureMeasurements[0]?.value || 0} mmHg
                        </Typography>
                      </Box>
                      <MeasurementChart 
                        title="Blood Pressure" 
                        measurementType="bloodPressure" 
                        unit="mmHg" 
                        color="#dc3545" 
                        data={bloodPressureMeasurements.map(m => ({ date: m.date, value: m.value }))}
                        maxValue={180} 
                      />
                      <MeasurementInput 
                        title="Blood Pressure" 
                        measurements={bloodPressureMeasurements}
                        onMeasurementsChange={setBloodPressureMeasurements}
                        unit="mmHg"
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #000000',
                        borderRadius: 2,
                        p: 2,
                        backgroundColor: 'transparent'
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" sx={{ color: '#666' }}>
                          Heart Rate
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          {heartRateMeasurements[0]?.value || 0} bpm
                        </Typography>
                      </Box>
                      <MeasurementChart 
                        title="Heart Rate" 
                        measurementType="heartRate" 
                        unit="bpm" 
                        color="#ffc107" 
                        data={heartRateMeasurements.map(m => ({ date: m.date, value: m.value }))}
                        maxValue={150} 
                      />
                      <MeasurementInput 
                        title="Heart Rate" 
                        measurements={heartRateMeasurements}
                        onMeasurementsChange={setHeartRateMeasurements}
                        unit="bpm"
                      />
                    </Card>
                  </Grid>

                  {/* Second Row */}
                  <Grid item xs={12} md={6}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #000000',
                        borderRadius: 2,
                        p: 2,
                        backgroundColor: 'transparent'
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" sx={{ color: '#666' }}>
                          Respiratory Rate
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          {respiratoryRateMeasurements[0]?.value || 0} breaths/min
                        </Typography>
                      </Box>
                      <MeasurementChart 
                        title="Respiratory Rate" 
                        measurementType="respiratoryRate" 
                        unit="breaths/min" 
                        color="#28a745" 
                        data={respiratoryRateMeasurements.map(m => ({ date: m.date, value: m.value }))}
                        maxValue={30} 
                      />
                      <MeasurementInput 
                        title="Respiratory Rate" 
                        measurements={respiratoryRateMeasurements}
                        onMeasurementsChange={setRespiratoryRateMeasurements}
                        unit="breaths/min"
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #000000',
                        borderRadius: 2,
                        p: 2,
                        backgroundColor: 'transparent'
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" sx={{ color: '#666' }}>
                          Oxygen Saturation
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          {oxygenSaturationMeasurements[0]?.value || 0}%
                        </Typography>
                      </Box>
                      <MeasurementChart 
                        title="Oxygen Saturation" 
                        measurementType="oxygenSaturation" 
                        unit="%" 
                        color="#dc3545" 
                        data={oxygenSaturationMeasurements.map(m => ({ date: m.date, value: m.value }))}
                        maxValue={100} 
                      />
                      <MeasurementInput 
                        title="Oxygen Saturation" 
                        measurements={oxygenSaturationMeasurements}
                        onMeasurementsChange={setOxygenSaturationMeasurements}
                        unit="%"
                      />
                    </Card>
                  </Grid>

                  {/* Third Row */}
                  <Grid item xs={12} md={6}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #000000',
                        borderRadius: 2,
                        p: 2,
                        backgroundColor: 'transparent'
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" sx={{ color: '#666' }}>
                          Body Temperature
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          {bodyTemperatureMeasurements[0]?.value || 0}°C
                        </Typography>
                      </Box>
                      <MeasurementChart 
                        title="Body Temperature" 
                        measurementType="bodyTemperature" 
                        unit="°C" 
                        color="#6f42c1" 
                        data={bodyTemperatureMeasurements.map(m => ({ date: m.date, value: m.value }))}
                        maxValue={42} 
                      />
                      <MeasurementInput 
                        title="Body Temperature" 
                        measurements={bodyTemperatureMeasurements}
                        onMeasurementsChange={setBodyTemperatureMeasurements}
                        unit="°C"
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #000000',
                        borderRadius: 2,
                        p: 2,
                        backgroundColor: 'transparent'
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" sx={{ color: '#666' }}>
                          Head Circumference
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          {headCircumferenceMeasurements[0]?.value || 0} cm
                        </Typography>
                      </Box>
                      <MeasurementChart 
                        title="Head Circumference" 
                        measurementType="headCircumference" 
                        unit="cm" 
                        color="#20c997" 
                        data={headCircumferenceMeasurements.map(m => ({ date: m.date, value: m.value }))}
                        maxValue={65} 
                      />
                      <MeasurementInput 
                        title="Head Circumference" 
                        measurements={headCircumferenceMeasurements}
                        onMeasurementsChange={setHeadCircumferenceMeasurements}
                        unit="cm"
                      />
                    </Card>
                  </Grid>

                  {/* Fourth Row */}
                  <Grid item xs={12} md={8}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #000000',
                        borderRadius: 2,
                        p: 2,
                        backgroundColor: 'transparent'
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" sx={{ color: '#666' }}>
                          BMI
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          {bmiMeasurements[0]?.value || 0}
                        </Typography>
                      </Box>
                      <MeasurementChart 
                        title="BMI" 
                        measurementType="bmi" 
                        unit="" 
                        color="#17a2b8" 
                        data={bmiMeasurements.map(m => ({ date: m.date, value: m.value }))}
                        maxValue={40} 
                      />
                      <MeasurementInput 
                        title="BMI" 
                        measurements={bmiMeasurements}
                        onMeasurementsChange={setBmiMeasurements}
                        unit=""
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #000000',
                        borderRadius: 2,
                        p: 2,
                        backgroundColor: 'transparent'
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" sx={{ color: '#666' }}>
                          Blood Type
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          {bloodTypeMeasurements[0]?.value || 0}
                        </Typography>
                      </Box>
                      <MeasurementChart 
                        title="Blood Type" 
                        measurementType="bloodType" 
                        unit="" 
                        color="#6c757d" 
                        data={bloodTypeMeasurements.map(m => ({ date: m.date, value: m.value }))}
                        maxValue={4} 
                      />
                      <MeasurementInput 
                        title="Blood Type" 
                        measurements={bloodTypeMeasurements}
                        onMeasurementsChange={setBloodTypeMeasurements}
                        unit=""
                      />
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewAppView;
