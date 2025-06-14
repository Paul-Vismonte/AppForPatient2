'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { BookingStatistics } from '../booking-statistics';
import { BookingTotalIncomes } from '../booking-total-incomes';
import { BookingWidgetSummary } from '../booking-widget-summary';
import { BookingTransactions } from '../booking-transactions';

import { DashboardContent } from 'src/layouts/dashboard';
import { _bookings, _bookingNew, _bookingReview, _bookingsOverview } from 'src/_mock';
import {
  BookingIllustration,
  CheckInIllustration,
  CheckoutIllustration,
} from 'src/assets/illustrations';

// ----------------------------------------------------------------------

export function OverviewBookingView() {
  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <BookingStatistics
            title="Balance statistics"
            subheader="Statistics on balance over time"
            chart={{
              colors: [
                '#1976D2', // primary.dark
                '#FFC107', // warning.main
              ],
              series: [
                {
                  name: 'Yearly',
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                  data: [
                    { name: 'Income', data: [40000, 37000, 42000, 35000, 45000, 48000] },
                    { name: 'Expenses', data: [25000, 28000, 32000, 29000, 35000, 38000] },
                  ],
                },
              ],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <BookingTotalIncomes
            title="Total balance"
            total={49990}
            percent={2.6}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              series: [{ data: [10, 41, 80, 100, 60, 120] }],
            }}
          />
        </Grid>

        <Grid size={12}>
          <BookingTransactions
            title="Recent transactions"
            subheader="Description	Date	Amount	Status"
          />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
