'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GetAppIcon from '@mui/icons-material/GetApp';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import Pagination from '@mui/material/Pagination';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MedicalNotesIcon from '@mui/icons-material/Note';
import LabImagingIcon from '@mui/icons-material/Image';
import VitalIcon from '@mui/icons-material/HealthAndSafety';
import AppointmentHistoryIcon from '@mui/icons-material/EditCalendar';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Chart from 'react-apexcharts'; // For charts
import Switch from '@mui/material/Switch';
import UploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';

export function OverviewCourseView() {
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0); // Default to "Medical Note"
  const [vitalModalOpen, setVitalModalOpen] = useState(false); // Modal state for Vital
  const [labImagingModalOpen, setLabImagingModalOpen] = useState(false); // Modal state for Lab Imaging
  const [dense, setDense] = useState(false); // Dense toggle for Lab Imaging

  // Sample Data
  const medicalRecords = [
    {
      date: 'November 19, 2024',
      clinic: 'Skye Clinic',
      location: 'Skye Clinic',
      type: 'Medical Note',
      number: '#30'
    },
    {
      date: 'November 19, 2024',
      clinic: 'Best Clinic',
      location: 'Malabon',
      type: 'Medical Certificate',
      number: '#24'
    },
    {
      date: 'November 19, 2024',
      clinic: 'Best Clinic',
      location: 'Malabon',
      type: 'Medical Certificate for Pediatric COVID-19 Vaccine',
      number: '#23'
    },
    {
      date: 'November 19, 2024',
      clinic: 'Skye Clinic',
      location: 'Skye Clinic',
      type: 'Medical Note',
      number: '#12'
    },
    {
      date: 'November 19, 2024',
      clinic: 'Skye Clinic',
      location: 'Skye Clinic',
      type: 'Medical Note',
      number: '#11'
    }
  ];

  const labImagingRecords = [
    {
      date: '2025-02-06',
      clinic: 'Patient Upload',
      laboratoryName: 'Test again',
      resultDate: '2025-02-06',
      type: 'Biopsy',
    },
    {
      date: '2025-02-06',
      clinic: 'Patient Upload',
      laboratoryName: 'test now',
      resultDate: '2025-02-06',
      type: 'Biopsy',
    },
    {
      date: '2024-11-22',
      clinic: 'Best Clinic',
      laboratoryName: 'test',
      resultDate: '2024-11-22',
      type: 'Gastroenterology-Others',
    },
    {
      date: '2024-11-22',
      clinic: 'Best Clinic',
      laboratoryName: '23',
      resultDate: '2024-11-22',
      type: 'Biopsy-Others',
    },
    {
      date: '2024-11-19',
      clinic: 'Patient Upload',
      laboratoryName: 'Lab Name',
      resultDate: '2024-11-19',
      type: 'Audiometry',
    },
  ];

  const vitalsData = [
    {
      date: '2023-11-01',
      weight: 70,
      height: 175,
      bmi: 22.86,
      bloodPressureSystolic: 120,
      bloodPressureDiastolic: 80,
      oxygenSaturation: 98,
      respiratoryRate: 16,
      heartRate: 72,
      bodyTemperature: 36.5,
      bloodSugar: 100,
      headCircumference: 55,
      headSize: 55,
    },
    {
      date: '2023-11-15',
      weight: 71,
      height: 175,
      bmi: 23.0,
      bloodPressureSystolic: 122,
      bloodPressureDiastolic: 82,
      oxygenSaturation: 97,
      respiratoryRate: 18,
      heartRate: 74,
      bodyTemperature: 36.6,
      bloodSugar: 105,
      headCircumference: 56,
      headSize: 56,
    },
  ];

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const openVitalModal = () => {
    setVitalModalOpen(true);
  };

  const closeVitalModal = () => {
    setVitalModalOpen(false);
  };

  const openLabImagingModal = () => {
    setLabImagingModalOpen(true);
  };

  const closeLabImagingModal = () => {
    setLabImagingModalOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Header */}
      <AppBar position="fixed" color="primary" sx={{ boxShadow: 'none' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mediko Connect
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 240,
            top: 64,
            height: 'calc(100% - 64px)',
          }
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Health Bites" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="My Doctors" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Appointment" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Chat" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Calendar" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Medical Record" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Prescription" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Medicines" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          pt: 10, // Offset for fixed header
          overflowY: 'auto',
        }}
      >
        {/* Dashboard Navigation Bar */}
        <Box sx={{ mb: 3 }}>
          <Tabs
            value={tabValue}
            onChange={handleChangeTab}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="dashboard-tabs"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: 'primary.main',
              },
            }}
          >
            <Tab
              label="Medical Note"
              icon={<MedicalNotesIcon />}
              iconPosition="start"
              value={0}
            />
            <Tab
              label="Lab Imaging"
              icon={<LabImagingIcon />}
              iconPosition="start"
              value={1}
            />
            <Tab
              label="Vital"
              icon={<VitalIcon />}
              iconPosition="start"
              value={2}
            />
            <Tab
              label="Appointment History"
              icon={<AppointmentHistoryIcon />}
              iconPosition="start"
              value={3}
            />
          </Tabs>
        </Box>

        {/* Tab Content */}
        {tabValue === 0 && (
          <>
            {/* Medical Note Content */}
          </>
        )}

        {tabValue === 1 && (
          <>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5">Lab Imaging</Typography>
            </Box>

            {/* New Record Button */}
            <Button
              variant="contained"
              color="primary"
              sx={{ float: 'right' }}
              onClick={openLabImagingModal}
            >
              + New Record
            </Button>

            {/* Filters */}
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' },
              gap: 2,
              mb: 4,
              alignItems: 'center'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mr: 1 }}>
                  Hospital
                </Typography>
                <TextField
                  size="small"
                  fullWidth
                  select
                  defaultValue=""
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="skyeclinic">Skye Clinic</MenuItem>
                  <MenuItem value="bestclinic">Best Clinic</MenuItem>
                  <MenuItem value="patientupload">Patient Upload</MenuItem>
                </TextField>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DateRangeIcon sx={{ color: 'text.secondary', mr: 1 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', mr: 1 }}>
                  Start date
                </Typography>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Select"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <DateRangeIcon sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DateRangeIcon sx={{ color: 'text.secondary', mr: 1 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', mr: 1 }}>
                  End date
                </Typography>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Select"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <DateRangeIcon sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Search lab name..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

            </Box>

            {/* Table */}
            <TableContainer component={Paper}>
              <Table size={dense ? 'small' : 'medium'}>
                <TableHead>
                  <TableRow>
                    <TableCell>Hospital/Clinic</TableCell>
                    <TableCell>Laboratory Name</TableCell>
                    <TableCell>Result Date</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {labImagingRecords.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar alt="Clinic Logo" src="/clinic-logo.png" sx={{ mr: 1, width: 24, height: 24 }} />
                          {record.clinic}
                        </Box>
                      </TableCell>
                      <TableCell>{record.laboratoryName}</TableCell>
                      <TableCell>{record.resultDate}</TableCell>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.type}</TableCell>
                      <TableCell>
                        <IconButton size="small">
                          <GetAppIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Pagination & Toggle */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 3,
              flexWrap: 'wrap'
            }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                <Typography variant="body2">Rows per page:</Typography>
                <TextField
                  size="small"
                  sx={{ width: 60 }}
                  defaultValue="5"
                />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Switch checked={dense} onChange={() => setDense(!dense)} />
                  <Typography variant="body2">Dense</Typography>
                </Box>
              </Box>
              <Pagination count={3} size="small" />
            </Box>

            {/* Lab Imaging Modal */}
            <Dialog open={labImagingModalOpen} onClose={closeLabImagingModal} maxWidth="sm">
              <DialogTitle>Create New Record</DialogTitle>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Type"
                      type="text"
                      placeholder="Enter Type"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Laboratory Name"
                      type="text"
                      placeholder="Enter Laboratory Name"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Result Date"
                      type="date"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Remarks"
                      multiline
                      rows={4}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ border: '1px dashed #ccc', borderRadius: 1, p: 4, textAlign: 'center' }}>
                      <UploadIcon fontSize="large" sx={{ color: '#1976d2', mb: 2 }} />
                      <Typography variant="body1">Drop or Select File</Typography>
                      <Typography variant="caption">Drag files here or click browse through your machine</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeLabImagingModal}>Cancel</Button>
                <Button variant="contained" color="primary">Create</Button>
              </DialogActions>
            </Dialog>
          </>
        )}

        {tabValue === 2 && (
          <>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5">Vitals</Typography>
            </Box>

            {/* New Record Button */}
            <Button
              variant="contained"
              color="primary"
              sx={{ float: 'right' }}
              onClick={openVitalModal}
            >
              + New Record
            </Button>

            {/* Vital Charts */}
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6">Weight</Typography>
                    <Typography variant="body2">by kilogram</Typography>
                    <Chart 
                      type="line" 
                      series={[{ data: [70, 71] }]} 
                      options={{ 
                        xaxis: { categories: ['Nov 1', 'Nov 15'] }, 
                        yaxis: { title: 'Weight (kg)' } 
                      }} 
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6">Height</Typography>
                    <Typography variant="body2">by centimeter</Typography>
                    <Chart 
                      type="line" 
                      series={[{ data: [175, 175] }]} 
                      options={{ 
                        xaxis: { categories: ['Nov 1', 'Nov 15'] }, 
                        yaxis: { title: 'Height (cm)' } 
                      }} 
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6">Body Mass Index</Typography>
                    <Typography variant="body2">by kg/m²</Typography>
                    <Chart 
                      type="line" 
                      series={[{ data: [22.86, 23.0] }]} 
                      options={{ 
                        xaxis: { categories: ['Nov 1', 'Nov 15'] }, 
                        yaxis: { title: 'BMI (kg/m²)' } 
                      }} 
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6">Blood Pressure</Typography>
                    <Typography variant="body2">by mm Hg</Typography>
                    <Chart 
                      type="line" 
                      series={[
                        { name: 'Systolic', data: [120, 122] }, 
                        { name: 'Diastolic', data: [80, 82] }
                      ]} 
                      options={{ 
                        xaxis: { categories: ['Nov 1', 'Nov 15'] }, 
                        yaxis: { title: 'Blood Pressure (mm Hg)' } 
                      }} 
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6">Oxygen Saturation</Typography>
                    <Typography variant="body2">by percentage</Typography>
                    <Chart 
                      type="line" 
                      series={[{ data: [98, 97] }]} 
                      options={{ 
                        xaxis: { categories: ['Nov 1', 'Nov 15'] }, 
                        yaxis: { title: 'Oxygen Saturation (%)' } 
                      }} 
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6">Respiratory Rate</Typography>
                    <Typography variant="body2">by breaths per minute</Typography>
                    <Chart 
                      type="line" 
                      series={[{ data: [16, 18] }]} 
                      options={{ 
                        xaxis: { categories: ['Nov 1', 'Nov 15'] }, 
                        yaxis: { title: 'Respiratory Rate (breaths/min)' } 
                      }} 
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6">Heart Rate</Typography>
                    <Typography variant="body2">by beats per minute</Typography>
                    <Chart 
                      type="line" 
                      series={[{ data: [72, 74] }]} 
                      options={{ 
                        xaxis: { categories: ['Nov 1', 'Nov 15'] }, 
                        yaxis: { title: 'Heart Rate (bpm)' } 
                      }} 
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6">Body Temperature</Typography>
                    <Typography variant="body2">by °C</Typography>
                    <Chart 
                      type="line" 
                      series={[{ data: [36.5, 36.6] }]} 
                      options={{ 
                        xaxis: { categories: ['Nov 1', 'Nov 15'] }, 
                        yaxis: { title: 'Body Temperature (°C)' } 
                      }} 
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6">Head Circumference</Typography>
                    <Typography variant="body2">by cm</Typography>
                    <Chart 
                      type="line" 
                      series={[{ data: [55, 56] }]} 
                      options={{ 
                        xaxis: { categories: ['Nov 1', 'Nov 15'] }, 
                        yaxis: { title: 'Head Circumference (cm)' } 
                      }} 
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6">Head Size</Typography>
                    <Typography variant="body2">by cm</Typography>
                    <Chart 
                      type="line" 
                      series={[{ data: [55, 56] }]} 
                      options={{ 
                        xaxis: { categories: ['Nov 1', 'Nov 15'] }, 
                        yaxis: { title: 'Head Size (cm)' } 
                      }} 
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Box>

            {/* Vital Modal */}
            <Dialog open={vitalModalOpen} onClose={closeVitalModal} maxWidth="sm">
              <DialogTitle>Add New Vital Reading</DialogTitle>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Weight"
                      type="number"
                      placeholder="0"
                      fullWidth
                      InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Height"
                      type="number"
                      placeholder="0"
                      fullWidth
                      InputProps={{
                        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Blood Pressure (Systolic)"
                      type="number"
                      placeholder="0"
                      fullWidth
                      InputProps={{
                        endAdornment: <InputAdornment position="end">mm Hg</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Blood Pressure (Diastolic)"
                      type="number"
                      placeholder="0"
                      fullWidth
                      InputProps={{
                        endAdornment: <InputAdornment position="end">mm Hg</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Oxygen Saturation"
                      type="number"
                      placeholder="0"
                      fullWidth
                      InputProps={{
                        endAdornment: <InputAdornment position="end">%</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Respiratory Rate"
                      type="number"
                      placeholder="0"
                      fullWidth
                      InputProps={{
                        endAdornment: <InputAdornment position="end">breaths/min</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Heart Rate"
                      type="number"
                      placeholder="0"
                      fullWidth
                      InputProps={{
                        endAdornment: <InputAdornment position="end">bpm</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Body Temperature"
                      type="number"
                      placeholder="0"
                      fullWidth
                      InputProps={{
                        endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Head Circumference"
                      type="number"
                      placeholder="0"
                      fullWidth
                      InputProps={{
                        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Head Size"
                      type="number"
                      placeholder="0"
                      fullWidth
                      InputProps={{
                        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                      }}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeVitalModal}>Cancel</Button>
                <Button variant="contained" color="primary">Create</Button>
              </DialogActions>
            </Dialog>
          </>
        )}

        {tabValue === 3 && (
          <>
            {/* Appointment History Content */}
          </>
        )}
      </Box>
    </Box>
  );
}

export default OverviewCourseView;