import Sidebar from './sidebar';
import Header from './header';

export default function MainLayout(props) {
  const { children } = props;

  return (
    <>
      <Header />
      <Sidebar />
      <main className="pt-28">{children}</main>
    </>
  );
}
