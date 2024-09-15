import EditPassword from '@/components/EditPassword';
import React from 'react';
import Editbuttons from '@/components/Editbuttons';

const EditPasswordPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Editbuttons/>
      <div className="mt-8">
        <EditPassword />
      </div>
    </div>
  );
};

export default EditPasswordPage;