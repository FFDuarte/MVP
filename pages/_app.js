import '../styles.css';
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab  } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faCoffee, faHome , faRssSquare, faSitemap} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCoffee , faHome , faSitemap , faAddressBook , faRssSquare )
import 'bootstrap/dist/css/bootstrap.min.css';


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}