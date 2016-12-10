/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
    >> modified to support Apache Cordova for Windows Phone
*/
/**
 * (c) http://www.xenarius.net - Mobile applications for your data, built without coding.
 */
declare module Bootstrapper {
    var resourceFingerprint: string;
    interface IBootstrapperResource {
        src: string;
        id?: string;
        rel?: string;
        fileType?: string;
    }
    class SimpleDeferred {
        private callbacks;
        private isResolved;
        resolve(): void;
        done(callback: any): void;
    }
    class TaskProgressReporter {
        private approximateCount;
        private onProgress;
        private onTotalComplete;
        private completedCount;
        private realCount;
        private totalCount;
        constructor(approximateCount?: number, onProgress?: (progress: any) => void, onTotalComplete?: () => void);
        enqueue(count?: number): void;
        report(count?: number): void;
        clear(): void;
        private getCurrentProgress();
        private areTotalCompleted();
        private update();
    }
    class Bootstrapper {
        private progressReporter;
        private lab;
        constructor(progressReporter?: TaskProgressReporter);
        private get(url, done, fail);
        private initHtmlElement(element, resource);
        private appendHtml(parent, html);
        private normalize(resources, rootPath);
        private bootstrapResource(resource, onload?);
        insertFingerprint(path: string): string;
        bootstrap(resources: (string | IBootstrapperResource)[], rootPath?: string): SimpleDeferred;
    }
}
