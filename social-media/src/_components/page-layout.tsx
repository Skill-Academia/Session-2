import React from "react";

const PageLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex flex-col">
      <div className="border-b px-4 py-3">
        <span className="font-semibold text-lg">{title}</span>
      </div>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default PageLayout;
