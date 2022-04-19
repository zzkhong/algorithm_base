import React from 'react';

import { Navbar as ManNavbar } from '@mantine/core';

const Navbar: React.FC = () => {
  return (
    <ManNavbar hidden width={{ base: 300 }} height="100vh" p="xs">
      {/* Navbar content */}
    </ManNavbar>
  );
};

export default Navbar;
