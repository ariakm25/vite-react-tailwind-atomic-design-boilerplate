import React, { Fragment } from "react";

const Layout: React.FC<{}> = ({ children }): JSX.Element => {
  return (
    <Fragment>
      <div className="relative">
        <div className="py-4 pl-20 pr-8 w-full">{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
