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
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const PatientCard = styled(Card)(({ theme }) => ({
  borderRadius: 8,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.2s',
  '&:hover': { transform: 'scale(1.02)' },
  marginBottom: theme.spacing(3),
}));

// Patient pictures data with more details
const patientPictures = [
  {
    id: 1,
    src: '/assets/images/health/patientpic1.png',
    caption: 'Patient Picture 1',
    date: '2025-06-10',
    tags: ['Health', 'Wellness'],
  },
  {
    id: 2,
    src: '/assets/images/health/patientpic2.png',
    caption: 'Patient Picture 2',
    date: '2025-06-11',
    tags: ['Health', 'Checkup'],
  },
  {
    id: 3,
    src: '/assets/images/health/patientpic3.png',
    caption: 'Patient Picture 3',
    date: '2025-06-12',
    tags: ['Health', 'Recovery'],
  },
  {
    id: 4,
    src: '/assets/images/health/patientpic4.png',
    caption: 'Patient Picture 4',
    date: '2025-06-13',
    tags: ['Health', 'Treatment'],
  },
  {
    id: 5,
    src: '/assets/images/health/patientpic5.png',
    caption: 'Patient Picture 5',
    date: '2025-06-14',
    tags: ['Health', 'Medicine'],
  },
];

// Create announcements with images
const announcementsWithImages = patientPictures.map((pic) => ({
  id: pic.id,
  title: pic.caption,
  date: pic.date,
  content: '',
  images: [pic],
  tags: pic.tags,
}));

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
              tableData={announcementsWithImages.map((announcement) => ({
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

            {/* Display patient pictures in cards */}
            <Grid container spacing={3}>
              {announcementsWithImages.map((announcement) => (
                <Grid item xs={12} md={6} key={announcement.id}>
                  <PatientCard>
                    <CardContent>
                      <Box sx={{ position: 'relative', mb: 2 }}>
                        <img
                          src={announcement.images[0].src}
                          alt={announcement.images[0].caption}
                          style={{
                            width: '100%',
                            height: '300px',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            p: 2,
                            bgcolor: 'rgba(0,0,0,0.7)',
                            color: 'white',
                          }}
                        >
                          <Typography variant="subtitle1" color="inherit">
                            {announcement.images[0].caption}
                          </Typography>
                          <Typography variant="caption" color="inherit">
                            {new Date(announcement.date).toLocaleDateString()}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                          {announcement.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          {announcement.tags.map((tag, index) => (
                            <Chip
                              key={index}
                              label={tag}
                              size="small"
                              color="primary"
                              sx={{ fontSize: '0.75rem' }}
                            />
                          ))}
                        </Box>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {announcement.content}
                      </Typography>
                    </CardContent>
                  </PatientCard>
                </Grid>
              ))}
            </Grid>
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