import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const StyledRoot = styled(Box)(({ theme }) => ({
  width: 320,
  height: 240,
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.neutral,
}));

// ----------------------------------------------------------------------

export default function HealthIllustration({ hideBackground }: { hideBackground?: boolean }) {
  return (
    <StyledRoot>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 320 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        {!hideBackground && (
          <rect
            width="320"
            height="240"
            rx="16"
            fill="url(#healthGradient)"
          />
        )}

        {/* Doctor illustration */}
        <g stroke="none" strokeWidth="1">
          <path
            d="M160 120c-22.091 0-40-17.909-40-40s17.909-40 40-40 40 17.909 40 40-17.909 40-40 40z"
            fill="#fff"
          />
          <path
            d="M140 160c-22.091 0-40-17.909-40-40s17.909-40 40-40 40 17.909 40 40-17.909 40-40 40z"
            fill="#fff"
          />
          <path
            d="M160 100c-22.091 0-40-17.909-40-40s17.909-40 40-40 40 17.909 40 40-17.909 40-40 40z"
            fill="#fff"
          />
          <path
            d="M160 180c-22.091 0-40-17.909-40-40s17.909-40 40-40 40 17.909 40 40-17.909 40-40 40z"
            fill="#fff"
          />
          <path
            d="M160 200c-22.091 0-40-17.909-40-40s17.909-40 40-40 40 17.909 40 40-17.909 40-40 40z"
            fill="#fff"
          />
        </g>

        {/* Medical icons */}
        <g fill="#00ab55">
          <circle cx="80" cy="80" r="10" />
          <circle cx="240" cy="80" r="10" />
          <circle cx="160" cy="160" r="10" />
        </g>

        {/* Gradient definition */}
        <defs>
          <linearGradient id="healthGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#00ab55" />
            <stop offset="1" stopColor="#00d2ff" />
          </linearGradient>
        </defs>
      </svg>
    </StyledRoot>
  );
}
