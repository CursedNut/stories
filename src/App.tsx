import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Stories } from './pages/Stories';
import { ErrorPage } from './pages/ErrorPage';
import { ConfigProvider, Layout } from 'antd';
import { cyan } from '@ant-design/colors';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Header } from './layout/Header/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Stories />,
    errorElement: <ErrorPage />
  },
]);

const layoutStyle: React.CSSProperties = {
  height: '100vh',
  overflow: 'hidden'
};

const contentStyle: React.CSSProperties = {
  minHeight: 200,
  color: '#fff',
  paddingTop: '10px',
  paddingLeft: '10px',
  paddingBottom: '10px',
  paddingRight: '10px',
  overflowY: 'auto'
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          header: 'Stories'
        }
      },
      ru: {
        translation: {
          header: 'Истории'
        }
      },
      es: {
        translation: {
          header: 'Cuentos'
        }
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

const theme = {
  // TODO: theme
  // algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: cyan[7],
    borderRadius: 0
  }
}

export const App = () => (
  <ConfigProvider theme={theme}>
    <Layout style={layoutStyle}>
      <Header />
      <Layout.Content style={contentStyle}>
        <RouterProvider router={router} />
      </Layout.Content>
    </Layout>
  </ConfigProvider>
);
