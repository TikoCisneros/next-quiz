interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex justify-center items-center w-auto h-auto min-h-screen bg-sky-500 text-white'>
      {children}
    </div>
  );
};

export default Layout;
