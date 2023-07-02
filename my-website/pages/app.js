The file `my-website/pages/app.js` does not exist in the provided guide. However, if you want to create an `app.js` file in the `pages` directory, it could look something like this:

```javascript
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'GA_TRACKING_ID', {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
```

This is a basic setup for a Next.js application with Google Analytics tracking. Please replace `'GA_TRACKING_ID'` with your actual Google Analytics tracking ID.