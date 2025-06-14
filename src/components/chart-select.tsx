"use client";

import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

interface ChartSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function ChartSelect({ options, value, onChange }: ChartSelectProps) {
  return (
    <FormControl size="small">
      <InputLabel>View</InputLabel>
      <Select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        label="View"
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
