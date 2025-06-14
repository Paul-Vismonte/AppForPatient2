"use client";

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

interface MeasurementInputProps {
  title: string;
  unit: string;
  measurements: Array<{ value: number; date: string }>;
  onMeasurementsChange: (measurements: Array<{ value: number; date: string }>) => void;
}

const MeasurementInput: React.FC<MeasurementInputProps> = ({
  title,
  unit,
  measurements,
  onMeasurementsChange
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [localValue, setLocalValue] = useState(0);
  const [localDate, setLocalDate] = useState(new Date().toISOString().split('T')[0]);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    const newValue = rawValue ? parseFloat(rawValue) : 0;
    setLocalValue(newValue);
  };

  const handleSave = () => {
    if (!isNaN(localValue)) {
      const newMeasurement = {
        value: localValue,
        date: localDate
      };
      onMeasurementsChange([...measurements, newMeasurement]);
      setLocalValue(0);
      setLocalDate(new Date().toISOString().split('T')[0]);
    }
    setDialogOpen(false);
  };

  const handleCancel = () => {
    setLocalValue(value);
    setDialogOpen(false);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {measurements.length > 0 && (
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>Recent Measurements:</Typography>
            {measurements.map((measurement, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}>
                <Typography>{measurement.value} {unit}</Typography>
                <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                  {new Date(measurement.date).toLocaleDateString()}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
        <Button 
          variant="outlined" 
          size="small"
          onClick={() => setDialogOpen(true)}
          sx={{ 
            color: 'primary.main',
            borderColor: 'primary.main'
          }}
        >
          Insert
        </Button>
      </Box>

      <Dialog open={dialogOpen} onClose={handleCancel} maxWidth="sm" fullWidth>
        <DialogTitle>{title} Input</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                label={`Enter ${title}`}
                type="number"
                value={localValue || ''}
                onChange={handleValueChange}
                InputProps={{
                  endAdornment: <Typography sx={{ ml: 1 }}>{unit}</Typography>
                }}
              />
            </Box>
            <TextField
              fullWidth
              label="Date"
              type="date"
              value={localDate}
              onChange={(e) => setLocalDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="error">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MeasurementInput;
