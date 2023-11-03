import React, { useCallback, useState } from 'react';
import { Avatar, Button, Drawer, Dropdown, Layout, MenuProps } from 'antd';
import { cyan } from '@ant-design/colors';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { MenuOutlined, TranslationOutlined, UserOutlined } from '@ant-design/icons';

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
  const { t } = useTranslation();
  const [lang, setLang] = useState('en');
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const onDrawerClose = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const handleMenuClick = useCallback((e: Parameters<NonNullable<MenuProps['onClick']>>[0]) => {
    setLang(e.key)
    setOpen(false);
    i18n.changeLanguage(e.key)
  }, []);

  const handleOpenChange = useCallback((flag: boolean) => {
    setOpen(flag);
  }, []);

  return (
    <>
      <AntHeader style={headerStyle}>
        <Button type='link' style={{ color: '#fff' }} size='small' shape='circle' icon={<MenuOutlined />} onClick={showDrawer} />
        {t('header')}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
          <Dropdown
            menu={{
              items,
              onClick: handleMenuClick,
              activeKey: lang
            }}
            onOpenChange={handleOpenChange}
            open={open}
          >
            <Button type='primary' size='small' shape='circle' icon={<TranslationOutlined />} />
          </Dropdown>

          {/* <Dropdown
            menu={{
              items,
              onClick: handleMenuClick,
              activeKey: lang
            }}
            onOpenChange={handleOpenChange}
            open={open}
          >
            <Button type='primary' size='small' shape='circle' icon={<UserOutlined />} />
          </Dropdown> */}
        </div>
      </AntHeader>
      <Drawer
        title='Basic Drawer'
        placement='left'
        closable={false}
        onClose={onDrawerClose}
        open={drawerOpen}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}
