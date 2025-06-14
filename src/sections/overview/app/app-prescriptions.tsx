'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { Iconify } from 'src/components/iconify';

interface Order {
  id: string;
  store: string;
  modeOfPayment: string;
  deliveryMethod: string;
  paymentStatus: string;
  status: string;
  deliveryStatus: string;
  date: string;
}

const orders: Order[] = [
  {
    id: '#CCV09QMOBWJC',
    store: 'Mediko Pharmacy',
    modeOfPayment: 'Cash',
    deliveryMethod: 'Cod',
    paymentStatus: 'Unpaid',
    status: 'Pending',
    deliveryStatus: 'Pending',
    date: 'June 4, 2025 3:20:30 PM',
  },
  {
    id: '#25KF2EQKQIH25',
    store: 'Mediko Pharmacy',
    modeOfPayment: 'Cash',
    deliveryMethod: 'Pickup',
    paymentStatus: 'Unpaid',
    status: 'Pending',
    deliveryStatus: 'Pending',
    date: 'May 20, 2025 10:50:06 AM',
  },
  {
    id: '#LY1P1M6NTXFPW',
    store: 'Mediko Pharmacy',
    modeOfPayment: 'Cash',
    deliveryMethod: 'Cod',
    paymentStatus: 'Paid',
    status: 'Done',
    deliveryStatus: 'Delivery (Success)',
    date: 'May 5, 2025 1:04:17 AM',
  },
];

export function AppOrders() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dense, setDense] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.store.toLowerCase().includes(search.toLowerCase());

    const matchesDate =
      (!startDate || order.date >= startDate) &&
      (!endDate || order.date <= endDate);

    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;

    return matchesSearch && matchesDate && matchesStatus;
  });

  const statusColors: Record<string, string> = {
    Pending: 'warning',
    Done: 'success',
    Cancelled: 'error',
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'warning';
      case 'Done':
        return 'success';
      case 'Cancelled':
        return 'error';
      default:
        return 'primary';
    }
  };

  return (
    <Card sx={{ boxShadow: 4, borderRadius: 2 }}>
      <CardContent>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2" sx={{ flexGrow: 1 }}>
            Orders
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Switch checked={dense} onChange={() => setDense(!dense)} sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              Dense
            </Typography>
          </Box>
        </Box>

        {/* Status Tabs (Top Section) */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs
            value={statusFilter}
            onChange={(e, val) => setStatusFilter(val)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: 'primary.main',
              },
              '& .MuiTab-root': {
                textTransform: 'capitalize',
                fontWeight: 'medium',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              },
            }}
          >
            <Tab
              value="All"
              sx={{
                '& .circle': {
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                },
              }}
            >
              <Box className="circle" />
              Total
            </Tab>
            <Tab
              value="Pending"
              sx={{
                '& .circle': {
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: 'warning.main',
                },
              }}
            >
              <Box className="circle" />
              Pending
            </Tab>
            <Tab
              value="Approved"
              sx={{
                '& .circle': {
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: 'success.main',
                },
              }}
            >
              <Box className="circle" />
              Approved
            </Tab>
            <Tab
              value="Done"
              sx={{
                '& .circle': {
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: 'success.main',
                },
              }}
            >
              <Box className="circle" />
              Done
            </Tab>
            <Tab
              value="Cancelled"
              sx={{
                '& .circle': {
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: 'error.main',
                },
              }}
            >
              <Box className="circle" />
              Cancelled
            </Tab>
          </Tabs>
        </Box>

        {/* Filter Section */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Start date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="End date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              placeholder="Search Order Id..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="ic:round-search" sx={{ color: 'text.secondary' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        {/* Dense View Toggle */}
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
          <Switch checked={dense} onChange={() => setDense(!dense)} />
          <Typography variant="body2" sx={{ ml: 1 }}>
            Dense
          </Typography>
        </Box>

        {/* Table */}
        <TableContainer sx={{ mt: 3 }}>
          <Table size={dense ? 'small' : 'medium'}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Order ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Store</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Mode of Payment</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Delivery Method</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Payment Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Delivery Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order) => (
                  <TableRow
                    key={order.id}
                    hover
                    sx={{
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  >
                    <TableCell sx={{ fontSize: '0.875rem' }}>{order.id}</TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>{order.store}</TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>{order.modeOfPayment}</TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>{order.deliveryMethod}</TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>
                      <Chip
                        label={order.paymentStatus}
                        color={order.paymentStatus === 'Paid' ? 'success' : 'primary'}
                        size="small"
                        sx={{
                          backgroundColor: order.paymentStatus === 'Paid' ? 'success.light' : 'primary.light',
                          color: order.paymentStatus === 'Paid' ? 'success.main' : 'primary.main',
                          '& .MuiChip-label': {
                            fontWeight: 'medium',
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>
                      <Chip
                        label={order.status}
                        color={getStatusColor(order.status)}
                        size="small"
                        sx={{
                          backgroundColor:
                            getStatusColor(order.status) === 'success'
                              ? 'success.light'
                              : getStatusColor(order.status) === 'error'
                              ? 'error.light'
                              : 'primary.light',
                          color:
                            getStatusColor(order.status) === 'success'
                              ? 'success.main'
                              : getStatusColor(order.status) === 'error'
                              ? 'error.main'
                              : 'primary.main',
                          '& .MuiChip-label': {
                            fontWeight: 'medium',
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>
                      <Chip
                        label={order.deliveryStatus}
                        color={order.deliveryStatus === 'Delivery (Success)' ? 'success' : 'primary'}
                        size="small"
                        sx={{
                          backgroundColor: order.deliveryStatus === 'Delivery (Success)' ? 'success.light' : 'primary.light',
                          color: order.deliveryStatus === 'Delivery (Success)' ? 'success.main' : 'primary.main',
                          '& .MuiChip-label': {
                            fontWeight: 'medium',
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>{order.date}</TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>
                      <IconButton
                        aria-label="more"
                        onClick={handleClick}
                        size="small"
                        sx={{
                          '&:hover': {
                            backgroundColor: 'action.hover',
                          },
                        }}
                      >
                        <MoreVertIcon sx={{ fontSize: '1.25rem' }} />
                      </IconButton>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                        sx={{
                          '& .MuiMenuItem-root': {
                            fontSize: '0.875rem',
                            px: 2,
                            fontWeight: 'medium',
                          },
                        }}
                      >
                        <MenuItem onClick={handleClose} sx={{ color: 'primary.main' }}>
                          View
                        </MenuItem>
                        <MenuItem onClick={handleClose} sx={{ color: 'primary.main' }}>
                          Edit
                        </MenuItem>
                        <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                          Delete
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredOrders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>
    </Card>
  );
}