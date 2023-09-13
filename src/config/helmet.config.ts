// helmetConfig.ts
import { HelmetOptions } from 'helmet';

const helmetConfig: HelmetOptions = {
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            // Define other directives as needed
        },
    },
    hidePoweredBy: true, // Hide X-Powered-By header
    // Add more configuration options as needed
};

export default helmetConfig;
