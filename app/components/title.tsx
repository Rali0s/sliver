import React, { PropsWithChildren } from "react";

interface TitleProps extends PropsWithChildren {
  style?: React.CSSProperties;
}

export const Title: React.FC<TitleProps> = ({ children, style }): JSX.Element => {
  return (
    <h1 className="py-4 text-5xl font-bold text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/60 to-white" style={style}>
      {children}
    </h1>
  );
};
