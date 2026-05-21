import {Inter} from 'next/font/google';
import Lusitana from 'next/font/local'
import type { AppProps } from 'next/app'


export const inter = Inter({subsets: ['latin']});
export const lusitana = Lusitana({
  src: [
    {
      path: './fonts/Lusitana-Regular.ttf', // <-- use the correct relative path
      weight: '400',
    },
    {
      path: './fonts/Lusitana-Bold.ttf',
      weight: '700',
    },
  ],
})

