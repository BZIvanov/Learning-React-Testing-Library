import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller } from 'react-hook-form';
import {
  Box,
  Typography,
  TextField,
  Autocomplete,
  Button,
} from '@mui/material';
import data from './form-data';

const schema = yup
  .object({ fruits: yup.object().required('Fruits is required').nullable() })
  .required();

const UserForm = ({ title }) => {
  const [result, setResult] = useState(data[0]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: { fruits: data[0] },
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ fruits }) => {
    setResult(fruits);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
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

          <Controller
            control={control}
            name='fruits'
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                onChange={(event, item) => {
                  onChange(item);
                }}
                value={value}
                options={data}
                fullWidth={true}
                getOptionLabel={(item) => (item.text ? item.text : '')}
                isOptionEqualToValue={(v, a) => {
                  return v.id === a.id;
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label='Fruits'
                    error={!!errors.fruits}
                    helperText={errors.fruits && errors.fruits.message}
                  />
                )}
              />
            )}
          />
          <Button type='submit'>Complete</Button>
        </Box>
      </form>

      <Box mt={3}>
        {result && (
          <Typography variant='body2'>
            Submitted fruit is: {result.text}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default UserForm;
