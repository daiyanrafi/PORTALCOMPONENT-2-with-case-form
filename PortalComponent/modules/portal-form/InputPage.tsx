import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, FormHelperText, Grid } from '@mui/material';
import { UserData } from './ColumnPage';

interface InputPageProps {
  onSubmit: (data: FormInputs) => void;
  onNext: () => void;
  editItem?: UserData | null;
}

interface FormInputs {
  title: string;
  description: string;
  status: string;
  school: string;
  college: string;
}

const InputPage: React.FC<InputPageProps> = ({ onSubmit, onNext, editItem }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>();

  React.useEffect(() => {
    if (editItem) {
      setValue('title', editItem.title);
      setValue('description', editItem.description);
      setValue('status', editItem.status);
      setValue('school', editItem.school || ''); // Set default value or empty string
      setValue('college', editItem.college || ''); // Set default value or empty string
    }
  }, [editItem, setValue]);

  const handleFormSubmit: SubmitHandler<FormInputs> = (data) => {
    onSubmit(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <TextField
        label="Title"
        fullWidth
        {...register('title', { required: 'Title is required' })}
        error={!!errors.title}
      />
      {errors.title && (
        <FormHelperText error>
          {errors.title.message}
        </FormHelperText>
      )}

      <TextField
        label="Description"
        fullWidth
        {...register('description', { required: 'Description is required' })}
        error={!!errors.description}
      />
      {errors.description && (
        <FormHelperText error>
          {errors.description.message}
        </FormHelperText>
      )}

      <TextField
        label="Status"
        fullWidth
        {...register('status', { required: 'Status is required' })}
        error={!!errors.status}
      />
      {errors.status && (
        <FormHelperText error>
          {errors.status.message}
        </FormHelperText>
      )}

      <TextField
        label="School"
        fullWidth
        {...register('school', { required: 'School is required' })}
        error={!!errors.school}
      />
      {errors.school && (
        <FormHelperText error>
          {errors.school.message}
        </FormHelperText>
      )}

      <TextField
        label="College"
        fullWidth
        {...register('college', { required: 'College is required' })}
        error={!!errors.college}
      />
      {errors.college && (
        <FormHelperText error>
          {errors.college.message}
        </FormHelperText>
      )}

      <Grid container spacing={2}>
        <Grid item>
          <Button type="button" variant="contained" color="primary" onClick={onNext} style={{ marginTop: '16px' }}>
            Back
          </Button>
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default InputPage;
