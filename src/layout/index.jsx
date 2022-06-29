import React, { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout as LayoutAntd, Menu } from 'antd';
import { LIST_HEADER } from '../constant/header';
import useRoute from '../hook/useRoute';

const { Header, Content } = LayoutAntd;

const Layout = () => {
  const { goTo } = useRoute();
  const { pathname } = useLocation();

  const defaultActive = useMemo(() => {
    return pathname.length === 1 ? pathname : pathname.replace('/', '');
  }, [pathname])

  return (
    <LayoutAntd>
      <Header className='fixed z-[1] w-full'>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[defaultActive]}
          items={LIST_HEADER}
          onClick={(e) => goTo(e.key)}
        />
      </Header>
      <Content className="mt-[64px] py-[36px] px-[64px]">
        <Outlet />
      </Content>
    </LayoutAntd>
  )
}

export default Layout