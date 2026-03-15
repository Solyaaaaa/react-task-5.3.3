import { Container, Paper, Stack, Text, Title } from '@mantine/core';

const AboutPage = () => {
  return (
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

  );
};
export default AboutPage;
