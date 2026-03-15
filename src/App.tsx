import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from '@mantine/core';
import { VacancyList } from './components/VacancyList/VacancyList';
import AboutPage from './pages/AboutPage';
import Layout from './components/Layout/Layout';

const VacanciesPage = lazy(() => import('./pages/VacanciesPage'));
const VacancyPage = lazy(() => import('./pages/VacancyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

export default function App() {
  return (
    <Suspense fallback={<Loader color="blue" type="dots" />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/vacancies" />} />

          <Route path="vacancies" element={<VacanciesPage />}>
            <Route index element={<Navigate to="moscow" replace />} />
            <Route path="moscow" element={<VacancyList />} />
            <Route path="petersburg" element={<VacancyList />} />
          </Route>
          <Route
            path="vacancies/:id"
            element={<VacancyPage />}
            errorElement={<NotFoundPage />}
          />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="404" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
