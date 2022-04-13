import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Favorite } from '@mui/icons-material';

const UserForm = ({ title, min, max }) => {
  const [favNumber, setFavNumber] = useState('');
  const [errorText, setErrorText] = useState('');
  const [selected, setSelected] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setSelected(false);

    if (value === '10') {
      setFavNumber(value);
      setErrorText('Not allowed');
    } else {
      setErrorText('');
    }

    if (value === '-') {
      setFavNumber(value);
    } else if (/^-?\.$/.test(value)) {
      setFavNumber(value.startsWith('-') ? '-0.' : '0.');
    } else if (/^-?((0|([1-9]\d{0,}))(\.\d{0,})?)?$/.test(value)) {
      if (typeof min === 'number' && value < min) {
        return setFavNumber(min);
      }
      if (typeof max === 'number' && value > max) {
        return setFavNumber(max);
      }

      setFavNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelected(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate={true}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 5px lightgreen',
            width: { xs: '300px', md: '500px' },
          }}
        >
          <Typography
            variant='h5'
            sx={{ color: 'lightgreen' }}
            gutterBottom={true}
          >
            {title}
          </Typography>

          <TextField
            id='favorite-number'
            name='favoriteNumber'
            error={!!errorText}
            label='Favorite number'
            value={favNumber}
            helperText={errorText}
            onChange={handleChange}
            variant='standard'
            InputLabelProps={{ shrink: true }}
          />

          <Button
            type='submit'
            disabled={favNumber === '' || !!errorText}
            sx={{ marginBlock: 0.5 }}
          >
            Select
          </Button>
        </Box>
      </form>

      {selected && (
        <Box sx={{ textAlign: 'center', marginBlock: 1 }}>
          <Favorite sx={{ color: 'rgb(12, 245, 45)' }} />
          <Typography>Fav num is {favNumber}</Typography>
        </Box>
      )}
    </>
  );
};

export default UserForm;
