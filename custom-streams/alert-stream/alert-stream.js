// import { INFO, WARN, ERROR  } from './node_modules/@browser-bunyan/levels/lib/index.m.js';

export class AlertStream {
    constructor(appName) {
        this.appName = appName;
    }

    write(rec) {
        alert(`[${rec.levelName}] ${this.appName}: ${rec.msg}`);
    }
}