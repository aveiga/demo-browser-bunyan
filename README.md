# Demo Browser Bunyan
This is a demo project for how to use the Bunyan logger with custom Streams. Check Bunyan out (and the official documentation) at: https://github.com/philmander/browser-bunyan

## Getting started
1. Run: `npm install`
1. Run an `http-server` no the root of the project
1. The `packages/demo-browser-bunyan/index.html` is your starting point:
```javascript
import { AlertStream } from "../alert-stream/alert-stream.js";

let appName = 'User Manager';

let rawLogger = bunyan.createLogger({
    name: 'raw',
    src: true,
    streams: [
        {
            level: 'trace',
            stream: new AlertStream(appName),
        }
    ]
});

//will show one alert
rawLogger.error('This is a error log');

rawLogger.addStream({
    level: 'error',
    stream: new AlertStream('Security Manager'),
});

//will show two alerts (because I've added another AlertStream), but the second alert will be coming from the Security Manager, instead of the App Manager
rawLogger.error('This is a error log');

//will show only one alert becase the 'Security Manager' is only used for ERROR level and above
rawLogger.info('This is an info');
```
4. The `packages/alert-stream/alert-stream.js` file is a good, simple example on how to create a custom Stream