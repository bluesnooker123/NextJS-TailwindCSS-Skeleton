import React from "react";
import NextHead from 'next/head'

interface HeaderProps {
    title: string;
    description: string;
}

const Header: React.FC<HeaderProps> = (props) => {

  return (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title || ''}</title>
        <meta name="description" content={props.description || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>
  );
};

export default Header

