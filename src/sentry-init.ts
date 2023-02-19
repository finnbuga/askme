import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://275c263afc0c425a886ab9adfcb233e5@o4504705907425280.ingest.sentry.io/4504705910112256",
  integrations: [new BrowserTracing()],
  environment: "production",
  debug: true,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
