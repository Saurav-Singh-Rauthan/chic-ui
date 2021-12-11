export type themeType =
  | 'default'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'info'
  | 'light';

export interface ThemeValues {
  regular: string;
  hover: string;
  color?: string;
}

export type Theme = Record<themeType, ThemeValues>;

export const theme: Theme = {
  default: {
    regular: '#1F51FF',
    hover: '#1d47db',
    color: '#ffffff'
  },
  secondary: {
    regular: '#35212A',
    hover: '#2b1b22',
    color: '#ffffff'
  },
  danger: {
    regular: '#FF0075',
    hover: '#de0066',
    color: '#ffffff'
  },
  warning: {
    regular: '#f08e0a',
    hover: '#e08509',
    color: '#ffffff'
  },
  success: {
    regular: '#00bf87',
    hover: '#02a676',
    color: '#ffffff'
  },
  info: {
    regular: '#24c4e0',
    hover: '#22b9d4',
    color: '#ffffff'
  },
  light: {
    regular: '#f2f2f2',
    hover: '#ebebeb',
    color: '#000000'
  }
};
