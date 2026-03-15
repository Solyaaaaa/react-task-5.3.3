import {
  AppShell,
  Container,
  Grid,
  Group,
  Image,
  Indicator,
  Text,
} from '@mantine/core';
import logo from '../../assets/image.svg';
import { IconUserCircle } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

export const HeaderVacancy = () => {
  return (
    <AppShell.Header>
      <Container size="xl" h="100%" maw={1440}>
        <Grid align="center" h="100%" m={0} gutter={0}>
          <Grid.Col span={{ base: 6, sm: 4 }}>
            <Group gap={10} wrap="nowrap" align="center" h={60}>
              <Image src={logo} alt="logo" w={30} h={30} />
              <Text fw={700}>.FrontEnd</Text>
            </Group>
          </Grid.Col>

          <Grid.Col span={{ base: 6, sm: 4 }}>
            <Group justify="center" gap="xl" wrap="nowrap" align="center">
              <Group gap={8} wrap="nowrap" align="center">
                <NavLink
                  to="/vacancies"
                  style={({ isActive }) => ({
                    color: isActive ? 'rgba(0,0,0,1)' : 'rgba(15,15,16,0.5)',
                    textDecoration: 'none',
                  })}
                >
                  {({ isActive }) => (
                    <Group gap={8} wrap="nowrap" align="center">
                      Вакансии FE
                      {isActive && (
                        <Indicator position="middle-center" size={6} />
                      )}
                    </Group>
                  )}
                </NavLink>
              </Group>
              <Group gap={4} wrap="nowrap" align="center">
                <IconUserCircle
                  size={24}
                  color="rgba(15, 15, 16, 0.5)"
                  stroke={1.2}
                />
                <NavLink
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? 'rgba(0,0,0,1)' : 'rgba(15,15,16,0.5)',
                    textDecoration: 'none',
                  })}
                >
                  {({ isActive }) => (
                    <Group gap={8} wrap="nowrap" align="center">
                      Обо мне
                      {isActive && (
                        <Indicator position="middle-center" size={6} />
                      )}
                    </Group>
                  )}
                </NavLink>
              </Group>
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 0, sm: 4 }} visibleFrom="sm"></Grid.Col>
        </Grid>
      </Container>
    </AppShell.Header>
  );
};
