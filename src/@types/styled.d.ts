import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
        fontFamily: string;
    };

    colors: {
      main: string;
      primary: string;
      secondary: string;
    };
  }
}