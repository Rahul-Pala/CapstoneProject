import React from 'react'
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {

    return (
        <>
            {/* Footer */}
            <Box sx={{ bgcolor: 'wheat', p: 0 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Adventure Galaxy
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    All rights reserved.
                </Typography>

                <Typography>
                    
                </Typography>
            </Box>
            {/* End footer */}
        </>
    )
}