import { AppShell, Container, Paper, Stack, Text, Title } from '@mantine/core';
import { HeaderVacancy } from '../components/HeaderVacancy/HeaderVacancy';

const AboutPage = () => {
  return (
    <AppShell header={{ height: 60 }}>
      <HeaderVacancy />
      <AppShell.Main bg={'#f6f6f7'} pt={60}>
        <Container size={'sm'} p={24}>
          <Paper shadow="xs" radius="md">
            <Stack gap={12} p={24}>
              <Title>Иван Васильев</Title>
              <Text>
                Привет! Я - Frontend-разработчик. Пишу приложения на React +
                TypeScript + Redux Toolkit.
              </Text>
            </Stack>
          </Paper>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
export default AboutPage;
