/* eslint-disable no-unused-vars */
// ComplaintForm.tsx
import React from 'react';
import { TextField, Typography, Grid, Select, MenuItem, TextareaAutosize } from '@mui/material';

type ComplaintFormProps = {
  supplier: string;
  service: string;
  accountNumber: string;
  complaintDescription: string;
  resolutionDescription: string;
  updateFields: (fields: Partial<{
    supplier: string;
    service: string;
    accountNumber: string;
    complaintDescription: string;
    resolutionDescription: string;
  }>) => void;
};

export function ComplaintForm({
  supplier,
  service,
  accountNumber,
  complaintDescription,
  resolutionDescription,
  updateFields,
}: ComplaintFormProps) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom>
        Complaint Information
      </Typography>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '20px' }}>Please fill-up you complaint below</p>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Typography variant="body1" gutterBottom style={{ color: '#073c82', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '16px' }}>
        Name of supplier you wish to complain about
          </Typography>
          <TextField
            fullWidth
            autoFocus
            label="Select Supplier"
            required
            select
            value={supplier}
            onChange={(e) => updateFields({ supplier: e.target.value })}
          >
            <MenuItem value="a">Option A</MenuItem>
            <MenuItem value="b">Option B</MenuItem>
            <MenuItem value="c">Option C</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="body1" gutterBottom style={{ color: '#073c82', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '16px' }}>
        What services is the complaint about
          </Typography>
          <TextField
            fullWidth
            label="Select Services"
            required
            select
            value={service}
            onChange={(e) => updateFields({ service: e.target.value })}
          >
            <MenuItem value="x">Option X</MenuItem>
            <MenuItem value="y">Option Y</MenuItem>
            <MenuItem value="z">Option Z</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="body1" gutterBottom style={{ color: '#073c82', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '16px' }}>
        Account Number (If applicable)
          </Typography>
          <TextField
            fullWidth
            label="Account Number"
            value={accountNumber}
            onChange={(e) => updateFields({ accountNumber: e.target.value })}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            fullWidth
            label="Brief Description about the Complaint"
            required
            multiline
            value={complaintDescription}
            onChange={(e) => updateFields({ complaintDescription: e.target.value })}
          />
        </Grid> */}

        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ color: '#073c82', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '16px' }}>
          Please brief describe the complaint including on outline of any responses the provider has given so far
          </Typography>
          <TextField
            fullWidth
            label="Please write here."
            multiline
            rows={4}
            value={complaintDescription}
            onChange={(e) => updateFields({ complaintDescription: e.target.value })}
          />
        </Grid>

        {/* <Grid item xs={12}>
          <TextField
            fullWidth
            label="Customer Seeking to Resolve"
            required
            multiline
            value={resolutionDescription}
            onChange={(e) => updateFields({ resolutionDescription: e.target.value })}
          />
        </Grid> */}
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ color: '#073c82', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '16px' }}>
          What are you ot the customer seeking to resolve this complaint?
          </Typography>
          <TextField
            fullWidth
            label="Please write here."
            multiline
            rows={4}
            value={resolutionDescription}
            onChange={(e) => updateFields({ resolutionDescription: e.target.value })}
          />
        </Grid>
      </Grid>
    </div>
  );
}
