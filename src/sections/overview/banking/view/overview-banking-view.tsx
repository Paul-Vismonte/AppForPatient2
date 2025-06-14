'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify/iconify';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 8,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
  '& .hospital-code': {
    fontSize: '0.75rem',
    color: theme.palette.text.secondary,
  },
}));

const AppointmentStatus = styled(Box)(({ theme, status }) => ({
  padding: theme.spacing(0.3, 1.25),
  borderRadius: '4px',
  fontSize: '0.75rem',
  fontWeight: 600,
  backgroundColor: {
    pending: '#FFA000',
    approved: '#4CAF50',
    cancelled: '#D32F2F',
    done: '#1976D2',
  }[status],
  color: 'white',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  minWidth: '90px',
  textAlign: 'center',
}));

const StyledTable = styled(Table)({
  '& th': {
    backgroundColor: '#F5F5F5',
    fontWeight: 600,
    fontSize: '0.875rem',
    color: '#212121',
    borderBottom: '1px solid #E0E0E0',
    padding: '10px 16px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    whiteSpace: 'nowrap',
  },
  '& td': {
    borderBottom: '1px solid #E0E0E0',
    padding: '12px 16px',
    fontSize: '0.875rem',
    color: '#212121',
  },
});

const StyledTableCell = styled(TableCell)({
  '&:last-child': {
    paddingRight: 0,
  },
});

const ActionMenu = styled(Menu)({
  '& .MuiPaper-root': {
    marginTop: 8,
    minWidth: 160,
  },
});

export function OverviewBankingView() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [hospital, setHospital] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleStatusFilter = (event) => {
    setStatusFilter(event.target.value);
  };

  const appointments = [
    {
      hospital: 'Antipolo Doctors Hospital',
      code: 'VRHU8A',
      date: '02 Jun 2025',
      time: '01:14 PM',
      type: 'Face-To-Face',
      status: 'Cancelled',
    },
    {
      hospital: 'Binangonan Lakeview Hospital, Inc.',
      code: 'NJU6O0',
      date: '02 Jun 2025',
      time: '02:00 PM',
      type: 'Telemedicine',
      status: 'Pending',
    },
    {
      hospital: 'Antipolo Doctors Hospital',
      code: 'DTTAEG',
      date: '02 Jun 2025',
      time: '11:00 AM',
      type: 'Face-To-Face',
      status: 'Pending',
    },
    {
      hospital: 'Mediko Kapitolyo',
      code: 'J3WD2C',
      date: '30 May 2025',
      time: '08:00 AM',
      type: 'Telemedicine',
      status: 'Cancelled',
    },
    {
      hospital: 'Malabon Medical Center',
      code: 'N8HXSP',
      date: '20 May 2025',
      time: '11:00 AM',
      type: 'Face-To-Face',
      status: 'Approved',
    },
  ];

  const stats = {
    total: 37,
    pending: 12,
    approved: 15,
    done: 4,
    cancelled: 6,
  };

  const filteredAppointments = appointments.filter((appointment) => {
    return (
      (!hospital || appointment.hospital === hospital) &&
      (!startDate || new Date(appointment.date + ' ' + appointment.time) >= new Date(startDate)) &&
      (!endDate || new Date(appointment.date + ' ' + appointment.time) <= new Date(endDate)) &&
      (!searchTerm || appointment.hospital.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === 'all' || appointment.status.toLowerCase() === statusFilter)
    );
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  return (
    <DashboardContent maxWidth="xl">
      {/* Header */}
      <StyledCard>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3 }}>
          <Typography variant="h6" sx={{ color: '#212121', fontWeight: 600 }}>
            Appointments
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            sx={{
              backgroundColor: '#1976D2',
              color: 'white',
              '&:hover': {
                backgroundColor: '#1565C0',
              },
              textTransform: 'capitalize',
              borderRadius: '4px',
              padding: '8px 16px',
              fontSize: '0.875rem',
            }}
          >
            New Appointment
          </Button>
        </Box>
      </StyledCard>

      {/* Search and Filter Bar */}
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: '#666666' }} />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              backgroundColor: '#F5F5F5',
              '& fieldset': {
                borderColor: '#E0E0E0',
              },
              '&:hover fieldset': {
                borderColor: '#1976D2',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1976D2',
              },
            },
            '& .MuiOutlinedInput-input': {
              padding: '8px 12px',
            },
          }}
        />
        <FormControl size="small">
          <InputLabel sx={{ color: '#666666' }}>Hospital</InputLabel>
          <Select
            label="Hospital"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                '& fieldset': {
                  borderColor: '#E0E0E0',
                },
                '&:hover fieldset': {
                  borderColor: '#1976D2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1976D2',
                },
              },
            }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Antipolo Doctors Hospital" sx={{ color: '#424242' }}>Antipolo Doctors Hospital</MenuItem>
            <MenuItem value="St. Luke's Medical Center" sx={{ color: '#424242' }}>St. Luke's Medical Center</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small">
          <InputLabel sx={{ color: '#666666' }}>Start Date</InputLabel>
          <OutlinedInput
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            sx={{
              borderRadius: '8px',
              '& fieldset': {
                borderColor: '#E0E0E0',
              },
              '&:hover fieldset': {
                borderColor: '#1976D2',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1976D2',
              },
            }}
          />
        </FormControl>
        <FormControl size="small">
          <InputLabel sx={{ color: '#666666' }}>End Date</InputLabel>
          <OutlinedInput
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            sx={{
              borderRadius: '8px',
              '& fieldset': {
                borderColor: '#E0E0E0',
              },
              '&:hover fieldset': {
                borderColor: '#1976D2',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1976D2',
              },
            }}
          />
        </FormControl>
      </Stack>

      {/* Status Filter Buttons */}
      <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
        <Button
          variant={statusFilter === 'all' ? 'contained' : 'outlined'}
          onClick={() => setStatusFilter('all')}
          sx={{
            textTransform: 'capitalize',
            letterSpacing: '0.5px',
            fontWeight: 600,
            borderRadius: '4px',
            minWidth: '100px',
            '&.MuiButton-contained': {
              bgcolor: '#1976D2',
              color: 'white',
            },
            '&.MuiButton-outlined': {
              borderColor: '#E0E0E0',
              color: '#212121',
              '&:hover': {
                backgroundColor: '#F5F5F5',
              },
            },
          }}
        >
          All
        </Button>
        <Button
          variant={statusFilter === 'pending' ? 'contained' : 'outlined'}
          onClick={() => setStatusFilter('pending')}
          sx={{
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontWeight: 600,
            borderRadius: '8px',
            minWidth: '100px',
            '&.MuiButton-contained': {
              bgcolor: '#FFA000',
              color: 'white',
            },
            '&.MuiButton-outlined': {
              borderColor: '#E0E0E0',
              color: '#424242',
            },
          }}
        >
          Pending
        </Button>
        <Button
          variant={statusFilter === 'approved' ? 'contained' : 'outlined'}
          onClick={() => setStatusFilter('approved')}
          sx={{
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontWeight: 600,
            borderRadius: '8px',
            minWidth: '100px',
            '&.MuiButton-contained': {
              bgcolor: '#4CAF50',
              color: 'white',
            },
            '&.MuiButton-outlined': {
              borderColor: '#E0E0E0',
              color: '#424242',
            },
          }}
        >
          Approved
        </Button>
        <Button
          variant={statusFilter === 'cancelled' ? 'contained' : 'outlined'}
          onClick={() => setStatusFilter('cancelled')}
          sx={{
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontWeight: 600,
            borderRadius: '8px',
            minWidth: '100px',
            '&.MuiButton-contained': {
              bgcolor: '#D32F2F',
              color: 'white',
            },
            '&.MuiButton-outlined': {
              borderColor: '#E0E0E0',
              color: '#424242',
            },
          }}
        >
          Cancelled
        </Button>
        <Button
          variant={statusFilter === 'done' ? 'contained' : 'outlined'}
          onClick={() => setStatusFilter('done')}
          sx={{
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontWeight: 600,
            borderRadius: '8px',
            minWidth: '100px',
            '&.MuiButton-contained': {
              bgcolor: '#2196F3',
              color: 'white',
            },
            '&.MuiButton-outlined': {
              borderColor: '#E0E0E0',
              color: '#424242',
            },
          }}
        >
          Done
        </Button>
      </Stack>

      {/* Appointments Table */}
      <TableContainer component={Paper} elevation={1}>
        <StyledTable aria-label="appointments-table">
          <TableHead>
            <TableRow>
              <TableCell>Hospital/Clinic</TableCell>
              <TableCell>Schedule</TableCell>
              <TableCell>Payment</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <StyledTableCell>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton size="small" sx={{ color: 'text.secondary' }}>
                    <Iconify icon="eva:refresh-outline" />
                  </IconButton>
                </Box>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAppointments.map((appointment, index) => (
              <TableRow key={index} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Iconify icon="simple-icons:doctorswithoutborders" sx={{ fontSize: '1.5rem', color: '#1976D2' }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#424242' }}>
                        {appointment.hospital}
                      </Typography>
                      <Typography className="hospital-code" sx={{ fontSize: '0.75rem', color: '#666666' }}>
                        {appointment.code}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#424242' }}>
                      {appointment.date}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666666' }}>
                      {appointment.time}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ color: '#1976D2', fontWeight: 600 }}>
                    $150.00
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ color: '#1976D2', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {appointment.type}
                  </Typography>
                </TableCell>
                <TableCell>
                  <AppointmentStatus status={appointment.status.toLowerCase()}>
                    {appointment.status}
                  </AppointmentStatus>
                </TableCell>
                <StyledTableCell>
                  <IconButton size="small" sx={{ color: '#666666' }} onClick={(e) => handleMenu(e)}>
                    <Iconify icon="eva:more-vertical-fill" sx={{ fontSize: '1.25rem' }} />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{
                      '& .MuiPaper-root': {
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                      },
                    }}
                  >
                    <MenuItem sx={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#212121',
                      '&:hover': {
                        backgroundColor: '#F5F5F5',
                      },
                    }}>
                      <Iconify icon="eva:refresh-outline" sx={{ mr: 2, color: '#1976D2' }} />
                      Refresh
                    </MenuItem>
                    <MenuItem sx={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#212121',
                      '&:hover': {
                        backgroundColor: '#F5F5F5',
                      },
                    }}>
                      <Iconify icon="eva:edit-outline" sx={{ mr: 2, color: '#1976D2' }} />
                      Edit
                    </MenuItem>
                    <MenuItem sx={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#212121',
                      '&:hover': {
                        backgroundColor: '#F5F5F5',
                      },
                    }}>
                      <Iconify icon="eva:eye-outline" sx={{ mr: 2, color: '#1976D2' }} />
                      View
                    </MenuItem>
                    <MenuItem sx={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#212121',
                      '&:hover': {
                        backgroundColor: '#F5F5F5',
                      },
                    }}>
                      <Iconify icon="eva:copy-outline" sx={{ mr: 2, color: '#1976D2' }} />
                      Copy
                    </MenuItem>
                    <MenuItem sx={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#212121',
                      '&:hover': {
                        backgroundColor: '#F5F5F5',
                      },
                    }}>
                      <Iconify icon="eva:flag-outline" sx={{ mr: 2, color: '#1976D2' }} />
                      Flag
                    </MenuItem>
                    <MenuItem sx={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#212121',
                      '&:hover': {
                        backgroundColor: '#F5F5F5',
                      },
                    }}>
                      <Iconify icon="eva:list-outline" sx={{ mr: 2, color: '#1976D2' }} />
                      List
                    </MenuItem>
                    <MenuItem sx={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#212121',
                      '&:hover': {
                        backgroundColor: '#F5F5F5',
                      },
                    }}>
                      <Iconify icon="eva:heart-outline" sx={{ mr: 2, color: '#1976D2' }} />
                      Favorite
                    </MenuItem>
                  </Menu>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" sx={{ color: '#666666', fontSize: '0.875rem' }}>
            Rows per page:
          </Typography>
          <Select
            size="small"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            sx={{
              ml: 1,
              minWidth: 60,
              '& .MuiSelect-select': {
                fontSize: '0.875rem',
                color: '#424242',
                fontWeight: 500,
              },
            }}
          >
            <MenuItem value={5} sx={{ fontSize: '0.875rem' }}>5</MenuItem>
            <MenuItem value={10} sx={{ fontSize: '0.875rem' }}>10</MenuItem>
            <MenuItem value={25} sx={{ fontSize: '0.875rem' }}>25</MenuItem>
          </Select>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ color: '#666666', fontSize: '0.875rem' }}>
            {page * rowsPerPage + 1}–{Math.min((page + 1) * rowsPerPage, filteredAppointments.length)} of {filteredAppointments.length}
          </Typography>
        </Box>
      </Box>
    </DashboardContent>
  );
}