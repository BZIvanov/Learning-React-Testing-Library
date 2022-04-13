import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { UserForm } from './components/UserForm';

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Routes>
        <Route path='/' element={<UserForm title='My Awesome Form' />} />
      </Routes>
    </Box>
  );
};

export default App;
