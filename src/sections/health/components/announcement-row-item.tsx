import { Box, TableCell, TableRow, Typography } from '@mui/material';
import { fDate } from 'src/utils/format-time';
import { Iconify } from 'src/components/iconify';
import { IDateValue } from 'src/types/common';
import { Box as MuiBox } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

type RowItemProps = {
  row: {
    id: string;
    type: string;
    status: string;
    amount: number;
    message: string;
    date: IDateValue;
    category: string;
    name: string | null;
    avatarUrl: string | null;
    likes?: number;
  };
};

// ----------------------------------------------------------------------

export function AnnouncementRowItem({ row, onClick }: RowItemProps & { onClick?: () => void }) {
  return (
    <TableRow
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }}
    >
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          {row.avatarUrl && (
            <MuiBox
              component="img"
              alt={row.name || ''}
              src={row.avatarUrl}
              sx={{ width: 40, height: 40, borderRadius: '50%' }}
            />
          )}
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              {row.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {row.message}
            </Typography>
          </Box>
        </Box>
      </TableCell>

      <TableCell align="right">
        {fDate(row.date)}
      </TableCell>

      <TableCell align="right">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Iconify icon="solar:heart-bold" sx={{ color: 'error.main' }} />
          <Typography variant="body2">{row.likes}</Typography>
        </Box>
      </TableCell>

      <TableCell align="right" sx={{ pr: 1 }}>
        <Iconify icon="eva:more-vertical-fill" sx={{ color: 'text.secondary' }} />
      </TableCell>
    </TableRow>
  );
}
