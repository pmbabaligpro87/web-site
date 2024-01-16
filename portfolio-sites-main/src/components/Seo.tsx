import { Helmet } from 'react-helmet';
import config from '../config';

const Seo = () => {
    return (
        <Helmet>
            <title>Home | CanDoğanK</title>
            <link rel="icon" type="image/x-icon" href="/logo.jpg" />

            <meta name='robots' content='index, follow'/>
            <meta name='googlebot' content='index,follow'/>

            <meta name="description" content="he/him ・ Full-Stack Streaming" />

            <meta property='og:url' content='https://candoganwashere.vercel.app.vercel.app/' />
            <meta property='og:type' content='website'/>
            <meta property="og:title" content={`${config.github.username} | Full-Stack Developer`} />
            <meta name="og:description" content="he/him ・ Full-Stack Streaming" />

            <meta property="og:image" content="/logo.jpg" />
            <meta property="og:image:alt" content="candoganwashere.vercel.app/" />
            <meta property="og:locale" content="en_GB" />
            <meta name="theme-color" content="#00afe8" />
        </Helmet>
    );
}

export default Seo;
