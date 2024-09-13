import React, { useCallback, useState } from 'react';
import { Button, Drawer, Dropdown, Layout, MenuProps, Space } from 'antd';
import { cyan } from '@ant-design/colors';
import { useTranslation } from 'react-i18next';
import { MenuOutlined, TranslationOutlined, UserOutlined } from '@ant-design/icons';
import { UserDrawer } from '../UserDrawer/UserDrawer';

const { Header: AntHeader } = Layout;

const headerStyle: React.CSSProperties = {
  display: 'flex',
  color: '#fff',
  gap: '10px',
  alignItems: 'center',
  height: 64,
  paddingInline: 20,
  backgroundColor: cyan[8],
};

const headerLeftSideStyle: React.CSSProperties = {
  marginLeft: 'auto'
};

const items: MenuProps['items'] = [
  {
    label: 'English',
    key: 'en',
  },
  {
    label: 'Русский',
    key: 'ru',
  },
  {
    label: 'Español',
    key: 'es',
  },
];

export const Header = () => {
  const { t, i18n } = useTranslation();
  console.log(i18n.language)
  const [lang, setLang] = useState(() => i18n.language || 'ru');
  const [langOpen, setLangOpen] = useState(false);
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  const toggleUserDrawerOpen = useCallback(() => setUserDrawerOpen(!userDrawerOpen), [userDrawerOpen]);

  const toggleMenuDrawerOpen = useCallback(() => setMenuDrawerOpen(!menuDrawerOpen), [menuDrawerOpen]);

  const handleMenuClick = useCallback((e: Parameters<NonNullable<MenuProps['onClick']>>[0]) => {
    setLang(e.key)
    setLangOpen(false);
    i18n.changeLanguage(e.key)
  }, []);

  const handleOpenChange = useCallback((flag: boolean) => {
    setLangOpen(flag);
  }, []);

  return (
    <>
      <AntHeader style={headerStyle}>
        <Button
          ghost
          style={{ border: 'none' }}
          size='small'
          shape='circle'
          icon={<MenuOutlined />}
          onClick={toggleMenuDrawerOpen}
        />
        {t('header')}
        <Space style={headerLeftSideStyle}>
          <Dropdown
            menu={{
              items,
              onClick: handleMenuClick,
              activeKey: lang
            }}
            onOpenChange={handleOpenChange}
            open={langOpen}
          >
            <Button type='primary' size='small' shape='circle' icon={<TranslationOutlined />} />
          </Dropdown>
          <Button
            size='small'
            shape='circle'
            ghost
            icon={<UserOutlined />}
            onClick={toggleUserDrawerOpen}
          />
        </Space>
      </AntHeader>

      <UserDrawer open={userDrawerOpen} onClose={toggleUserDrawerOpen} />

      <Drawer
        title='Basic Drawer'
        placement='left'
        onClose={toggleMenuDrawerOpen}
        open={menuDrawerOpen}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}
