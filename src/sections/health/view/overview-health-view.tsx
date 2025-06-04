'use client';

import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

import { BankingOverview } from '../banking-overview';
import { BankingRecentTransitions } from '../banking-recent-transitions';
import { BankingExpensesCategories } from '../banking-expenses-categories';
import { BankingContacts } from '../banking-contacts';
import { BankingInviteFriends } from '../banking-invite-friends';
import { BankingCurrentBalance } from '../banking-current-balance';
import { BankingQuickTransfer } from '../banking-quick-transfer';

import { CONFIG } from 'src/global-config';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify/iconify';
import { _healthLatestAnnouncements, _healthClinicPartners } from 'src/_mock/_health';

// ----------------------------------------------------------------------

export function OverviewHealthView() {
  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} md={7} lg={8}>
          <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
            <BankingOverview />

            <BankingExpensesCategories
              title="Health Announcements"
              chart={{
                series: _healthLatestAnnouncements.map((announcement) => ({
                  label: announcement.title,
                  value: 1, // Using a constant value for visualization
                })),
                icons: [
                  <Iconify key="announcement" icon="solar:letter-bold" />,
                ],
              }}
            />

            <BankingRecentTransitions
              title="Recent Announcements"
              tableData={_healthLatestAnnouncements.map((announcement) => ({
                id: announcement.id.toString(),
                type: 'announcement',
                status: 'active',
                amount: 0,
                message: announcement.content,
                date: new Date(announcement.date).toISOString(), // Converting to ISO string to match IDateValue type
                category: 'health',
                name: null,
                avatarUrl: null,
              }))}
              headCells={[
                { id: 'message', label: 'Content' },
                { id: 'date', label: 'Date' },
                { id: '', label: '' },
              ]}
            />
          </Box>
        </Grid>

        <Grid xs={12} md={5} lg={4}>
          <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
            <BankingCurrentBalance list={_healthClinicPartners.map((partner) => ({
              id: partner.id,
              cardType: 'clinic',
              balance: 0,
              cardHolder: partner.name,
              cardNumber: '',
              cardValid: '',
            }))} />

            <BankingQuickTransfer
              title="Quick Connect"
              list={_healthClinicPartners.map((partner) => ({
                id: partner.id,
                name: partner.name,
                email: '',
                avatarUrl: partner.logo,
              }))}
            />

            <BankingContacts
              title="Clinic Partners"
              subheader="Your connected healthcare partners"
              list={_healthClinicPartners.map((partner) => ({
                id: partner.id,
                name: partner.name,
                email: '',
                avatarUrl: partner.logo,
              })).slice(-5)}
            />

            <BankingInviteFriends
              title="Chat History"
              description="View your past conversations with healthcare providers"
              imgUrl={`${CONFIG.assetsDir}/assets/illustrations/illustration-chat.webp`}
            />
          </Box>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
