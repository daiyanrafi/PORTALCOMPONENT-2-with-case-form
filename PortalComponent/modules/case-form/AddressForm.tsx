/* eslint-disable no-unused-vars */

// AddressForm.tsx
import { TextField, Typography, Grid } from '@mui/material';
import React from 'react';

type AddressFormProps = {
  street: string;
  city: string;
  state: string;
  zip: string;
  updateFields: (fields: Partial<{ street: string; city: string; state: string; zip: string }>) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom>
        Address
      </Typography>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '20px' }}>Please Enter Address below</p>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoFocus
            label="Street"
            required
            type="text"
            value={street}
            onChange={(e) => updateFields({ street: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="City"
            required
            type="text"
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="State"
            required
            type="text"
            value={state}
            onChange={(e) => updateFields({ state: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Zip"
            required
            type="text"
            value={zip}
            onChange={(e) => updateFields({ zip: e.target.value })}
          />
        </Grid>
      </Grid>
    </div>
  );
}
