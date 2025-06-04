import { BankingOverview } from '@/sections/health/banking-overview';
import { BankingExpensesCategories } from '@/sections/health/banking-expenses-categories';
import { BankingRecentTransitions } from '@/sections/health/banking-recent-transitions';
import { BankingCurrentBalance } from '@/sections/health/banking-current-balance';
import { BankingQuickTransfer } from '@/sections/health/banking-quick-transfer';
import { BankingContacts } from '@/sections/health/banking-contacts';
import { BankingInviteFriends } from '@/sections/health/banking-invite-friends';
import { CONFIG } from '@/global-config';
import { DashboardContent } from '@/layouts/dashboard';
import { Iconify } from '@/components/iconify/iconify';
import { _healthLatestAnnouncements, _healthClinicPartners } from '@/_mock/_health';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function OverviewHealthPage() {
  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid key="main-content" size={{ xs: 12, md: 7, lg: 8 }}>
          <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
            <BankingOverview />

            <BankingExpensesCategories
              title="Health Announcements"
              chart={{
                colors: ['#1890ff', '#13c2c2', '#2fc25b', '#facc14', '#f04864'],
                icons: [
                  <Iconify key="announcement" icon="solar:letter-bold" />,
                ],
                series: _healthLatestAnnouncements.map((announcement) => ({
                  label: announcement.title,
                  value: 1, // Using a constant value for visualization
                })),
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
                date: new Date(announcement.date).toISOString(),
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

        <Grid key="sidebar" size={{ xs: 12, md: 5, lg: 4 }}>
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
