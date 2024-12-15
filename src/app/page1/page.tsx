'use client';

import { Controller, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField } from '@mui/material';
import React from 'react';
import { useResolverForm } from '@/core/useResolverForm';
import { KInput } from 'vite-app/UI-Base/src';

const schema = yup.object({
  firstName: yup.string().required('Please enter your first name'), // Cập nhật thông báo rõ ràng hơn
  age: yup
    .number()
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .required('Please enter your age'),
});

export default function Dashboard() {
  const methods = useResolverForm({
    schema: schema,
    configs: {
      values: {
        firstName: '',
      },
    },
  });

  const [firstName14] = useWatch({
    control: methods.control,
    name: ['firstName'],
  });

  const onSubmit = (data: unknown) => {
    console.log(data, 'Form Data');
  };

  return (
    <div className="mt-40">
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={methods.control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => (
            <KInput.TextField
              {...field}
              error={!!error?.message}
              message={error?.message}
            />
            // <TextField
            //   {...field}
            //   id="age"
            //   label="firstName"
            //   variant="outlined"
            //   fullWidth
            //   margin="normal"
            //   error={!!error?.message}
            //   helperText={error?.message}
            // />
          )}
        />
        <input type="submit" value="Submit" style={{ marginTop: '20px' }} />
      </form>
    </div>
  );
}
