"use client";
import { TextField, Button, Box, Typography } from '@mui/material';
import clsx from 'clsx';

export default function Contact() {
  return (
    <>
    <Box className={clsx('space-y-4')}>
      <Typography variant="h4" fontWeight="bold">Contact Us</Typography>
      <TextField label="Name" variant="outlined" fullWidth />
      <TextField label="Email" variant="outlined" fullWidth />
      <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
      <Button variant="contained" color="primary">Submit</Button>
    </Box>
    </>

  );
}