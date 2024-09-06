import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function GlobalStyle({ children }: Props) {
  // const [loaded, error] = useFonts({
  //   'GeneralSans-Semibold': require('~/assets/fonts/GeneralSans-Variable.ttf'),
  // });
  //   //   const [loaded, error] = useFonts({
  //   //     [fontNames['General Sans'].semibold]:
  //   //       `~/assets/fonts/${fontNames['General Sans'].semibold}.otf`,
  //   //   });

  //   console.log('loaded', loaded);
  //   console.log('error', error);

  // if (!loaded && !error) {
  //   return null;
  // }

  return children;
}
