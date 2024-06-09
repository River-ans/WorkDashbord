interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <body className='container flex flex-col h-dvh container-padding relative'>
      {children}
    </body>
  );
}

export default AuthLayout;
