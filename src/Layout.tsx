const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[35rem] my-0 mx-auto py-0 px-1.5 text-center">
      {children}
    </div>
  );
};

export default Layout;
