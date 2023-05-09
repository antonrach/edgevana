import MetaDataLayout from '@/components/MetaDataLayout';
import '@/styles/globals.css'
import { edgevanaTheme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MetaDataLayout
      title="Edgevana"
      description="Edgevana"
      keywords={['edgevana', 'business', 'development']}
    >
      <ThemeProvider theme={edgevanaTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </MetaDataLayout>
  );
}
