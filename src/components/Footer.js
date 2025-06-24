import React from 'react';
import { Box, Typography, Link as MuiLink, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => (
  <Box component="footer" sx={{ mt: 6, py: 3, px: 2, background: '#f0f0f0', textAlign: 'center' }}>
    <Typography variant="body1" color="text.secondary">
      &copy; {new Date().getFullYear()} Pet Adoption Website
    </Typography>
    <Box sx={{ mt: 1 }}>
      <IconButton component={MuiLink} href="mailto:contact@petadopt.com" target="_blank" rel="noopener" color="primary">
        <EmailIcon />
      </IconButton>
      <IconButton component={MuiLink} href="https://github.com/" target="_blank" rel="noopener" color="primary">
        <GitHubIcon />
      </IconButton>
    </Box>
  </Box>
);

export default Footer; 