import Sidebar from './sidebar';
import Header from './header';

export default function MainLayout(props) {
  const { children } = props;

  return (
    <>
      <Header />
      <Sidebar />
      <main className="pl-[16%] pt-[12%] pr-5">{children}</main>
    </>
  );
}
