'use client';

import { Grid, Typography, Card, CardContent, Box, Chip, Pagination, Avatar, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { styled } from '@mui/material/styles';
import { useState } from 'react';

// Styled components for better customization
const DoctorCard = styled(Card)(({ theme }) => ({
  borderRadius: 8,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.2s',
  '&:hover': { transform: 'scale(1.02)' },
}));

const ClinicCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8,
  marginBottom: theme.spacing(2),
}));

const ClinicImage = styled('img')({
  width: 64,
  height: 64,
  marginRight: 16,
});

const BookAppointmentButton = styled('button')(({ theme }) => ({
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '8px 16px',
  borderRadius: 4,
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 500,
  '&:hover': { backgroundColor: '#0056b3' },
}));

export function OverviewAnalyticsView() {
  const doctors = [
    {
      name: 'Doctor Irion, MD',
      specialization: 'ANESTHESIOLOGIST',
      hmo: ['Asian Health Systems, Inc.', 'Cocolife'],
      clinics: [
        {
          name: 'Mediko Kapitolyo',
          location: 'Antipolo, Rizal',
          days: ['Mon', 'Sun', 'Tue', 'Fri', 'Sat', 'Thu', 'Wed'],
          types: ['Telemedicine', 'Face to Face'],
        },
        {
          name: 'Manila East Medical Center',
          location: 'Taytay, Rizal',
          days: ['Mon', 'Sun', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          types: ['Telemedicine', 'Face to Face'],
        },
        {
          name: 'Metrodocs Hospital',
          location: 'Cainta, Rizal',
          days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          types: ['Telemedicine', 'Face to Face'],
        },
        {
          name: 'Tricity Hospital',
          location: 'Pasig, Metro Manila',
          days: ['Mon', 'Sun', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          types: ['Telemedicine', 'Face to Face'],
        },
      ],
    },
    {
      name: 'Ryan Tipon, MD',
      specialization: 'INTERNAL MEDICINE',
      hmo: ['Asian Health Systems, Inc.'],
      clinics: [
        {
          name: 'Mediko Kapitolyo',
          location: 'Antipolo',
          days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          types: ['Face to Face'],
        },
        {
          name: 'Antipolo Doctors Hospital',
          location: 'Antipolo',
          days: ['Mon', 'Sat', 'Wed'],
          types: ['Face to Face'],
        },
        {
          name: 'Manila East Medical Center',
          location: 'Taytay',
          days: ['Mon', 'Wed', 'Fri'],
          types: ['Face to Face'],
        },
        {
          name: 'Metro Rizal Doctors',
          location: 'Cainta',
          days: ['Tue'],
          types: ['Face to Face'],
        },
      ],
    },
    {
      name: 'Dr. Maria Santos, MD',
      specialization: 'CARDIOLOGIST',
      hmo: ['Asian Health Systems, Inc.', 'Philhealth'],
      clinics: [
        {
          name: 'HeartCare Center',
          location: 'Mandaluyong',
          days: ['Mon', 'Wed', 'Fri'],
          types: ['Telemedicine', 'Face to Face'],
        },
        {
          name: 'Metro Manila Heart Institute',
          location: 'Manila',
          days: ['Tue', 'Thu'],
          types: ['Face to Face'],
        },
      ],
    },
    {
      name: 'Dr. John Tan, MD',
      specialization: 'DERMATOLOGIST',
      hmo: ['Cocolife', 'Philhealth'],
      clinics: [
        {
          name: 'SkinCare Plus',
          location: 'Makati',
          days: ['Mon', 'Wed', 'Fri'],
          types: ['Face to Face'],
        },
        {
          name: 'Dermatology Center',
          location: 'Pasig',
          days: ['Tue', 'Thu'],
          types: ['Telemedicine', 'Face to Face'],
        },
      ],
    },
    {
      name: 'Dr. Sarah Lim, MD',
      specialization: 'OBSTETRICIAN',
      hmo: ['Asian Health Systems, Inc.', 'Cocolife'],
      clinics: [
        {
          name: 'WomenCare Clinic',
          location: 'Taguig',
          days: ['Mon', 'Wed', 'Fri'],
          types: ['Face to Face'],
        },
        {
          name: 'Maternity Center',
          location: 'Pasay',
          days: ['Tue', 'Thu', 'Sat'],
          types: ['Face to Face'],
        },
      ],
    },
    {
      name: 'Dr. Michael Chen, MD',
      specialization: 'OPHTHALMOLOGIST',
      hmo: ['Philhealth'],
      clinics: [
        {
          name: 'EyeCare Center',
          location: 'Parañaque',
          days: ['Mon', 'Wed', 'Fri'],
          types: ['Face to Face'],
        },
        {
          name: 'Vision Care',
          location: 'Muntinlupa',
          days: ['Tue', 'Thu'],
          types: ['Telemedicine', 'Face to Face'],
        },
      ],
    },
    {
      name: 'Dr. James Reyes, MD',
      specialization: 'ORTHOPEDIC SURGEON',
      hmo: ['Cocolife', 'Philhealth'],
      clinics: [
        {
          name: 'BoneCare Clinic',
          location: 'Las Piñas',
          days: ['Mon', 'Wed', 'Fri'],
          types: ['Face to Face'],
        },
        {
          name: 'OrthoMed Center',
          location: 'Valenzuela',
          days: ['Tue', 'Thu'],
          types: ['Face to Face'],
        },
      ],
    },
    {
      name: 'Dr. Patricia Wong, MD',
      specialization: 'NEUROLOGIST',
      hmo: ['Asian Health Systems, Inc.', 'Cocolife'],
      clinics: [
        {
          name: 'BrainCare Center',
          location: 'Caloocan',
          days: ['Mon', 'Wed', 'Fri'],
          types: ['Face to Face'],
        },
        {
          name: 'NeuroMed Clinic',
          location: 'Quezon City',
          days: ['Tue', 'Thu'],
          types: ['Telemedicine', 'Face to Face'],
        },
      ],
    },
    {
      name: 'Dr. Kenneth Tan, MD',
      specialization: 'GASTROENTEROLOGIST',
      hmo: ['Philhealth'],
      clinics: [
        {
          name: 'Digestive Health Center',
          location: 'Marikina',
          days: ['Mon', 'Wed', 'Fri'],
          types: ['Face to Face'],
        },
        {
          name: 'GastroMed Clinic',
          location: 'San Juan',
          days: ['Tue', 'Thu'],
          types: ['Face to Face'],
        },
      ],
    },
    {
      name: 'Dr. Linda Lim, MD',
      specialization: 'PEDIATRICIAN',
      hmo: ['Cocolife', 'Philhealth'],
      clinics: [
        {
          name: 'ChildCare Center',
          location: 'Mandaluyong',
          days: ['Mon', 'Wed', 'Fri'],
          types: ['Face to Face'],
        },
        {
          name: 'KidsMed Clinic',
          location: 'Makati',
          days: ['Tue', 'Thu'],
          types: ['Telemedicine', 'Face to Face'],
        },
      ],
    },
  ];

  // State to control clinic visibility
  const [showAllClinics, setShowAllClinics] = useState(true);

  // Initialize with default values
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  // Track if pagination is initialized
  const [isPaginationInitialized, setIsPaginationInitialized] = useState(false);

  // Filter state
  const [doctorNameFilter, setDoctorNameFilter] = useState<string>('');
  const [hospitalNameFilter, setHospitalNameFilter] = useState<string>('');
  const [specializationFilter, setSpecializationFilter] = useState<string>('');
  const [hmoFilter, setHmoFilter] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState<string>('');

  // Filtered doctors logic
  const filteredDoctors = doctors.filter((doctor) => {
    return (
      (doctor.name.toLowerCase().includes(doctorNameFilter.toLowerCase())) &&
      (doctor.clinics.some(clinic =>
        clinic.name.toLowerCase().includes(hospitalNameFilter.toLowerCase())
      )) &&
      (doctor.specialization.toLowerCase().includes(specializationFilter.toLowerCase())) &&
      (doctor.hmo?.some(hmo =>
        hmo.toLowerCase().includes(hmoFilter.toLowerCase())
      ) || !hmoFilter) &&
      (doctor.clinics.some(clinic =>
        clinic.location.toLowerCase().includes(locationFilter.toLowerCase())
      ))
    );
  });

  return (
    <Box sx={{ maxWidth: 'xl', mx: 'auto', px: 2 }}>
      {/* Filter Bar */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" align="center" sx={{ mb: 2 }}>
          MY DOCTORS
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={2}>
            <TextField
              label="Doctor name..."
              value={doctorNameFilter}
              onChange={(e) => setDoctorNameFilter(e.target.value)}
              fullWidth
              size="small"
              variant="outlined"
              InputProps={{
                startAdornment: <SearchIcon fontSize="small" />,
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              label="Hospital name..."
              value={hospitalNameFilter}
              onChange={(e) => setHospitalNameFilter(e.target.value)}
              fullWidth
              size="small"
              variant="outlined"
              InputProps={{
                startAdornment: <SearchIcon fontSize="small" />,
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              label="Specialization..."
              value={specializationFilter}
              onChange={(e) => setSpecializationFilter(e.target.value)}
              fullWidth
              size="small"
              variant="outlined"
              InputProps={{
                startAdornment: <SearchIcon fontSize="small" />,
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth size="small">
              <InputLabel id="hmo-select-label">Select HMO</InputLabel>
              <Select
                labelId="hmo-select-label"
                value={hmoFilter}
                onChange={(e) => setHmoFilter(e.target.value)}
                label="Select HMO"
              >
                <MenuItem value="">All HMOs</MenuItem>
                <MenuItem value="Asian Health Systems, Inc.">Asian Health Systems, Inc.</MenuItem>
                <MenuItem value="Cocolife">Cocolife</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              label="Select Location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              fullWidth
              size="small"
              variant="outlined"
              InputProps={{
                startAdornment: <LocationOnIcon fontSize="small" />,
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Doctor Details */}
      {filteredDoctors.length > 0 ? (
        filteredDoctors
          .slice((page - 1) * rowsPerPage, page * rowsPerPage)
          .map((doctor, doctorIndex) => (
            <Box key={doctorIndex} sx={{ mb: 4 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  borderRadius: 8,
                  border: '1px solid #e0e0e0'
                }}
              >
              <Avatar 
                src={doctor.image || ''}
                sx={{ 
                  width: 64, 
                  height: 64,
                  bgcolor: 'primary.main',
                  color: 'white',
                  fontSize: '1.2rem'
                }}
              >
                {doctor.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </Avatar>
              <Box sx={{ ml: 2 }}>
                <Typography variant="h5">{doctor.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Specialization: {doctor.specialization}
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <BookAppointmentButton>Book Appointment</BookAppointmentButton>
            </Box>

            {/* HMO Accreditation */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                HMO ACCREDITATION
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {doctor.hmo?.map((hmo, index) => (
                  <Chip 
                    key={index} 
                    label={hmo} 
                    size="small" 
                    color="info" 
                    onClick={() => console.log('HMO clicked:', hmo)}
                  />
                ))}
              </Box>
            </Box>

            {/* Clinics & Schedules */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                CLINICS & SCHEDULES
              </Typography>
              <Grid container spacing={3}>
                {doctor.clinics.slice(0, showAllClinics ? undefined : 2).map((clinic, index) => (
                  <Grid key={index} item xs={12} md={6}>
                    <ClinicCard>
                      <ClinicImage src={`/clinic-${index + 1}.png`} alt={`${clinic.name} logo`} />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle2" fontWeight="bold">
                          {clinic.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {clinic.location}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                          <AccessTimeIcon fontSize="small" color="action" />
                          <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                            Days: {clinic.days.join(', ')}
                          </Typography>
                        </Box>
                        <Box sx={{ mt: 1 }}>
                          {clinic.types.map((type, typeIndex) => (
                            <Chip
                              key={typeIndex}
                              label={type}
                              size="small"
                              color="success"
                              sx={{ mr: 1 }}
                              onClick={() => console.log('Type clicked:', type)}
                            />
                          ))}
                        </Box>
                      </Box>
                    </ClinicCard>
                  </Grid>
                ))}
              </Grid>

              {/* View More/Less Button */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <BookAppointmentButton onClick={() => setShowAllClinics(!showAllClinics)}>
                  {showAllClinics ? 'View Less' : 'View More'}
                </BookAppointmentButton>
              </Box>
            </Box>
          </Box>
        ))
      ) : (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6">No doctors found matching your criteria.</Typography>
        </Box>
      )}

      {/* Pagination */}
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2, flexWrap: 'wrap' }}>
          <Pagination 
            count={Math.ceil(filteredDoctors.length / rowsPerPage)} 
            page={page}
            onChange={(_, newPage) => {
              setPage(newPage);
              setIsPaginationInitialized(true);
            }}
            color="primary"
          />
          <Typography variant="caption" alignSelf="center">
            Doctors per page: {rowsPerPage}
          </Typography>
          <Typography variant="caption" alignSelf="center">
            {Math.max(1, (page - 1) * rowsPerPage + 1)}–{Math.min(page * rowsPerPage, filteredDoctors.length)} of {filteredDoctors.length}
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
}