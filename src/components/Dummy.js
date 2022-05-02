
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';
import Paper from '@mui/material/Paper';


const lists = [
  { id: 1, item: 'Home' },
  { id: 2, item: 'Explore' },
  { id: 3, item: 'Shorts' },
  { id: 4, item: 'Subscription' },
  { id: 5, item: 'Library' },
  { id: 6, item: 'History' },
  { id: 7, item: 'Your Videos' },
  { id: 8, item: 'Watch later' }
]


const Dummy = () => {

  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Box sx={{ marginTop: '60px' }}>
        <Grid sx={{ position: 'relative' }} container spacing={3}>
          <Grid item sx={{ width: 300, position: 'fixed', top: 0, bottom: 0 }}>
            <Box sx={{ mt: 2 }}>
              <List>
                {
                  lists.map(listItem => (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={listItem.item} />
                      </ListItemButton>
                    </ListItem>
                  ))
                }
              </List>
            </Box>
          </Grid>

          <Grid sx={{ marginLeft: '300px', overflowY: 'auto' }} container item>
            <Paper sx={{
              minHeight: '200px', m: 2,
              backgroundColor: 'background.custom',
              display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'
            }} elevation={7}>
              <Typography variant="h5" component="p">
                A banner
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Box>
    </Box>
  )
}

export default Dummy
