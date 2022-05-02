## Explore React Material UI Library

![OH (7)](https://user-images.githubusercontent.com/5024456/166176134-03c5bdb5-acda-4a04-a345-0df9c2c98bd6.png)


### Installation 

```
npx create-react-app mui-yt-demo
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

In index.html , add styles 

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

npm start
```

### Create a `components` folder and a `Dummy.js` file

Button reference : [here](https://mui.com/material-ui/react-button/)
```
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Dummy = () => {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
}
export default Dummy;

```
In App.js, import and use the component 

```

import './App.css';
import Dummy from './components/Dummy';

function App() {
  return (
    <div >
      <Dummy />
    </div>
  );
}

export default App;
```
The material UI bootstrapping should be done.

Every component comes from its own module / namespace and need to be imported separately. 

Go to API section, and check the available props 
The docs are pretty good. We need to learn the art of navigating through the docs to get what we need. 
Inspect and find out the classes attached to the DOM 

If you get the hang of one component, then the pattern is pretty much the same. 


### Box and typography

Box- is a wrapper component for CSS utility needs. 
material ui exposes a bunch of system props that we can apply via a prop called `sx`

https://mui.com/system/basics/
https://mui.com/material-ui/react-box/

```
import React from 'react';
import Box from '@mui/material/Box';

const Dummy = () => {
  return (
    <Box
      sx={{
        m: 10, // values are multiples of 8
        width: 300,
        height: 300,
        backgroundColor: '#000',
        '&:hover': {
          backgroundColor: '#bbbbbb'
        },
      }}
    />
  );
}
export default Dummy;


```
### Typography

Reference: [here](https://mui.com/material-ui/react-typography/)
```
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

const Dummy = () => {
  return (
    <Box sx={{ maxWidth: 500, m: 10, border: '1px solid black' }}>
      <Typography variant="h2" component="h1" gutterBottom noWrap>
        Heading which has a longer text that makes sure the same should be showing ellipsis 
      </Typography>
    </Box>
  );
}
export default Dummy;

```

### Container and CssBaseLine

Reference [here](https://mui.com/material-ui/react-container/)
```
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Dummy = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg"> 
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
export default Dummy;

```
Use `fixed` if we need to switch the maxWidth to respective breakpoints.

with css baseline, it adds certain set of default styles ( normalize.css / reset.css ). Check the body tag before and after.

Default breakpoints [here](https://mui.com/material-ui/customization/breakpoints/#default-breakpoints)

```
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
```


### Grids & Cards 

component implements grid system with Flexbox under the hood.
References [here](https://mui.com/material-ui/react-grid/)
```
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const photos = [
  { id: 1, url: 'https://placeimg.com/640/480/animals', name: 'Animals', desc: 'description 1' },
  { id: 2, url: 'https://placeimg.com/640/480/arch', name: 'Architecture', desc: 'description 2' },
  { id: 3, url: 'https://placeimg.com/640/480/nature', name: 'Nature', desc: 'description 3' },
  { id: 4, url: 'https://placeimg.com/640/480/people', name: 'People', desc: 'description 4' },
  { id: 5, url: 'https://placeimg.com/640/480/tech', name: 'Tech', desc: 'description 5' }
]

const Dummy = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {
          photos.map(photo => {
            return (
              <Grid key={photo.id} item xs={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="240"
                    image={photo.url}
                    alt={photo.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {photo.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {photo.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  );
}
export default Dummy;

```



to make it responsive

```
<Grid key={photo.id} item xs={6} sm={4} lg={3}>

```

Custom row and column spacing

```
<Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 4, lg: 8 }}>
```


### Stack 

The Stack component manages layout of immediate children along the vertical or horizontal axis

```
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const Dummy = () => {
  return (
    <Box sx={{ ml: 5 }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        orientation="vertical"
        spacing={2}>

        <Button variant="text">Home</Button>
        <Button variant="text">About</Button>
        <Button variant="text">Contact</Button>

      </Stack>
    </Box>
  );
}
export default Dummy;
```

### ImageList 
References [here](https://mui.com/material-ui/react-image-list/)
```
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];


const Dummy = () => {
  return (
    <ImageList sx={{ width: '100%', height: '530px' }}
      cols={3} rowHeight={264}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.id}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
export default Dummy;
```
As and when we scroll, images are loaded lazily 

### Modal & Paper

In Category.js 

```
import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Dummy = () => {
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <Paper sx={{ minHeight: '200px', m: 5, pt: 5 }} elevation={7}>
      <Button variant="contained"
        onClick={openModal}> Open Modal </Button>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You are about to delete the category
          </Typography>
        </Box>
      </Modal>
    </Paper>
  );
}
export default Dummy;
```
### Theming 

The app we have in this repo is the example of Theming with default dark/ light mode

## To use custom material ui theme

```
import { deepOrange, deepPurple, amber, grey } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: deepOrange,
        divider: deepOrange[200],
        text: {
          primary: grey[900],
          secondary: amber[800],
        },
      }
      : {
        // palette values for dark mode
        primary: deepPurple,
        divider: deepPurple[700],
        background: {
          default: deepPurple[900],
          paper: deepPurple[900],
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
});

const theme = createTheme(getDesignTokens(mode))

```
### Custom theme builder  

```
https://bareynol.github.io/mui-theme-creator/
```

### Customize components

```
components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
    }
  },

```

### Media Query

```
import useMediaQuery from '@mui/material/useMediaQuery';
const matches = useMediaQuery('(max-width:699px)');

{`${matches}` === 'true' && <MenuIcon />}
```

### Setting & Using custom theme variables 

```
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: deepOrange,
        divider: amber[200],
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
        background: {
          custom: '#cccccc'
        },
      }
      : {
        // palette values for dark mode
        primary: deepPurple,
        divider: deepPurple[700],
        background: {
          default: deepPurple[900],
          paper: deepPurple[900],
          custom: '#b90b10'
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
});
```

and within component, use the custom value

```
<Paper sx={{
  backgroundColor: 'background.custom',
}}
```
