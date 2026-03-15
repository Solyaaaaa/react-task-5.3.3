import { AppShell } from '@mantine/core';
import { HeaderVacancy } from '../HeaderVacancy/HeaderVacancy';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <AppShell header={{ height: 60 }}>
      <HeaderVacancy />
      <AppShell.Main bg={'#f6f6f7'} pt={60}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
