import * as React from 'react';
import {
  Grid,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from '@mui/material';
import InputPage from './InputPage';

export interface UserData {
  id: number;
  title: string;
  description: string;
  status: string;
  createdDate: Date;
  school?: string;
  college?: string;
}

const ColumnPage: React.FC = () => {
  const [data, setData] = React.useState<UserData[]>(() => {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [currentPage, setCurrentPage] = React.useState(0);
  const [currentEditItem, setCurrentEditItem] = React.useState<UserData | null>(null);

  const handleDeleteClick = (id: number) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData));
  };

  const handleEditClick = (id: number) => {
    const itemToEdit = data.find((item) => item.id === id);
    setCurrentEditItem(itemToEdit ?? null);
    setCurrentPage(1);
  };

  const handleInputSubmit = (inputData: { title: string; description: string; status: string }) => {
    if (currentEditItem) {
      const updatedData = data.map((item) =>
        item.id === currentEditItem.id ? { ...item, ...inputData } : item
      );
      setData(updatedData);
    } else {
      const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
      const newDate = new Date();
      const formattedData: UserData = { id: newId, createdDate: newDate, ...inputData };
      const newDataArray = [...data, formattedData];
      setData(newDataArray);
      localStorage.setItem('userData', JSON.stringify(newDataArray));
    }

    setCurrentPage(0);
  };

  return (
    <Grid container justifyContent="center" alignItems="flex-start" style={{ height: '100vh', marginTop: '40px' }}>
      <Grid item xs={8}>
      <div style={{ textAlign: 'center', backgroundColor: '#dded98', padding: '10px' }}>
        <Typography variant="h4" gutterBottom>
          Form Case
        </Typography>
      </div>
        {currentPage === 0 && (
          <Button variant="contained" color="primary" onClick={() => setCurrentPage(1)} sx={{ marginTop: '10px' }}>
            Add Details
          </Button>
        )}
        {currentPage === 1 && (
          <InputPage
            onSubmit={handleInputSubmit}
            onNext={() => setCurrentPage(0)}
            editItem={currentEditItem}
          />
        )}
        {currentPage !== 1 && (
          <TableContainer component={Paper} style={{ marginTop: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>School</TableCell>
                  <TableCell>College</TableCell>
                  <TableCell>Created Date</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.school || '-'}</TableCell>
                    <TableCell>{row.college || '-'}</TableCell>
                    <TableCell>{row.createdDate.toLocaleString()}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ width: '60%', marginBottom: '8px' }}
                        onClick={() => handleEditClick(row.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{ width: '60%' }}
                        onClick={() => handleDeleteClick(row.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Grid>
    </Grid>
  );
};

export default ColumnPage;
