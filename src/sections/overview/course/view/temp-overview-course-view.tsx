'use client';

import Box from '@mui/material/Box';
import { varAlpha } from 'minimal-shared/utils';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Pagination } from '@mui/material';
import { DashboardContent } from 'src/layouts/dashboard';

export function OverviewCourseView() {
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

  return (
    <DashboardContent
      maxWidth={false}
      disablePadding
      sx={[
        (theme) => ({
          borderTop: { lg: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}` },
        }),
      ]}
    >
      <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: { xs: 'column', lg: 'row' } }}>
        <Box
          sx={[
            (theme) => ({
              display: 'flex',
              minWidth: { lg: 0 },
              py: { lg: 3, xl: 5 },
              flexDirection: 'column',
              flex: { lg: '1 1 auto' },
              px: { xs: 2, sm: 3, xl: 5 },
              borderRight: {
                lg: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
              },
            }),
          ]}
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Medical Records
            </Typography>
          </Box>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                '& > *': { mr: 1 }
              }}>
                <DateRangeIcon sx={{ color: 'text.secondary' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Start date
                </Typography>
                <TextField
                  size="small"
                  sx={{ width: 120 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <DateRangeIcon sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                '& > *': { mr: 1 }
              }}>
                <DateRangeIcon sx={{ color: 'text.secondary' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  End date
                </Typography>
                <TextField
                  size="small"
                  sx={{ width: 120 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <DateRangeIcon sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                '& > *': { mr: 1 }
              }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Type
                </Typography>
                <TextField
                  size="small"
                  sx={{ width: 120 }}
                  placeholder="Search number..."
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            <Typography variant="h6" sx={{ mb: 2 }}>
              Medical Records
            </Typography>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Clinic</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Number</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {medicalRecords.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.clinic}</TableCell>
                      <TableCell>{record.location}</TableCell>
                      <TableCell>{record.type}</TableCell>
                      <TableCell>{record.number}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 3
            }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                '& > *': { mr: 1 }
              }}>
                <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2">Rows per page:</Typography>
                <TextField
                  size="small"
                  sx={{ width: 60 }}
                  defaultValue="5"
                />
              </Box>
              <Pagination count={1} size="small" />
            </Box>
          </Box>

          <Box
            sx={{
              width: 1,
              display: 'flex',
              flexDirection: 'column',
              px: { xs: 2, sm: 3, xl: 5 },
              pt: { lg: 8, xl: 10 },
              pb: { xs: 8, xl: 10 },
              flexShrink: { lg: 0 },
              '& > *': { mb: { xs: 3, lg: 5, xl: 8 } },
              maxWidth: { lg: 320, xl: 360 },
              bgcolor: { lg: 'background.neutral' },
            }}
          >
            {/* Remove course-related components */}
          </Box>
        </Box>
      </Box>
    </DashboardContent>
  );
}
