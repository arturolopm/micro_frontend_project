import React from 'react';
interface HeaderProps {
  app: { name: string };
}
const Header: React.FC<HeaderProps> = ({ app }) => {
  return (
    <div className=' p-5 bg-black text-white text-3xl font-bold'>
      Fidget spinner world! | {app.name}
    </div>
  );
};

export default Header;
