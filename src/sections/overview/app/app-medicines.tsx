'use client';

import {
  Box,
  Card,
  Typography,
  CardContent,
  TextField,
  InputAdornment,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Select,
  MenuItem,
  Avatar,
  Chip,
  Slider,
  Button,
  Grid,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { Iconify } from 'src/components/iconify';

interface Medicine {
  id: string;
  name: string;
  type: string;
  status: string;
  distance: string;
  dosage?: string;
  frequency?: string;
  startDate?: string;
  endDate?: string;
}

export function AppMedicines() {
  const [medicines, setMedicines] = useState<Medicine[]>([
    {
      id: '1',
      name: 'Mercury Drugstore',
      type: 'Pharmacy',
      status: 'Active',
      distance: '6.71 km',
    },
    {
      id: '2',
      name: 'Watsons',
      type: 'Pharmacy',
      status: 'Active',
      distance: '8.45 km',
    },
    {
      id: '3',
      name: 'Mediko Pharmacy',
      type: 'Pharmacy',
      status: 'Expired',
      distance: '10.2 km',
    },
  ]);

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dense, setDense] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const open = Boolean(anchorEl);

  const filteredMedicines = medicines.filter((medicine) => {
    const matchesSearch = medicine.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || medicine.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const statusColors: Record<string, string> = {
    Active: 'success',
    Expired: 'error',
    Pending: 'warning',
    Inactive: 'primary',
  };

  const getStatusColor = (status: string) => {
    return statusColors[status] || 'primary';
  };

  return (
    <Card sx={{ boxShadow: 4, borderRadius: 2 }}>
      <CardContent>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5">Stores near in</Typography>
          <Typography variant="body2" sx={{ ml: 1 }}>
            Antipolo City Police, Sumulong Highway, Hopeville, Santa Cruz...
          </Typography>
          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
            <Button variant="outlined" size="small">
              Get Location
            </Button>
            <Button variant="outlined" size="small" sx={{ ml: 1 }}>
              View Addresses
            </Button>
            <Button variant="outlined" size="small" sx={{ ml: 1 }}>
              Add Address Manually
            </Button>
          </Box>
        </Box>

        {/* Distance Slider */}
        <Box sx={{ mb: 3 }}>
          <Slider
            value={50}
            min={0}
            max={100}
            step={1}
            marks={[
              { value: 0, label: '0km' },
              { value: 100, label: '100km' },
            ]}
            sx={{ width: '100%' }}
          />
        </Box>

        {/* Search and Filter */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              placeholder="Search Store Name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="ic:round-search" sx={{ width: 20, height: 20 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as string)}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ width: '100%' }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Expired">Expired</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </Grid>
        </Grid>

        {/* Store Cards */}
        <Box sx={{ mt: 3, height: 400, overflow: 'auto' }}>
          {filteredMedicines
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((medicine) => (
              <Card key={medicine.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar alt={medicine.name} src="/logo.png" sx={{ mr: 2 }} />
                    <Typography variant="h6">{medicine.name}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {medicine.type}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Chip
                      label={medicine.status}
                      color={getStatusColor(medicine.status)}
                      size="small"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        backgroundColor:
                          getStatusColor(medicine.status) === 'success'
                            ? 'success.light'
                            : getStatusColor(medicine.status) === 'error'
                            ? 'error.light'
                            : 'primary.light',
                        color:
                          getStatusColor(medicine.status) === 'success'
                            ? 'success.main'
                            : getStatusColor(medicine.status) === 'error'
                            ? 'error.main'
                            : 'primary.main',
                        '& .MuiChip-label': {
                          fontWeight: 'medium',
                        },
                      }}
                    />
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Distance: {medicine.distance}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
        </Box>

        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredMedicines.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>
    </Card>
  );
}