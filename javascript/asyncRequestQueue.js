// Async Request Queue

class AsyncRequestQueue {
    constructor() {
        this.queue = [];
        this.isProcessing = false;
    }

    /**
     * Adds an async function (task) to the queue.
     * @param {Function} asyncTask - An async function to be executed.
     */
    add(asyncTask) {
        this.queue.push(asyncTask);
        // If the queue is not currently processing, start processing
        if (!this.isProcessing) {
            this.processNext();
        }
    }

    async processNext() {
        if (this.queue.length === 0) {
            this.isProcessing = false;
            return; // Queue is empty
        }

        this.isProcessing = true;
        const task = this.queue.shift();

        try {
            await task();
            console.log('Task completed.');
        } catch (error) {
            console.error('Task failed:', error);
        } finally {
            this.processNext();
        }
    }
}

// --- Example Usage ---

const fakeAsyncRequest = (id, duration) => {
    return new Promise(resolve => {
        console.log(`Starting task ${id}...`);
        setTimeout(() => {
            console.log(`Task ${id} finished after ${duration}ms.`);
            resolve(`Result from task ${id}`);
        }, duration);
    });
};

const queue = new AsyncRequestQueue();

// Add some tasks to the queue
queue.add(async () => await fakeAsyncRequest(1, 1000));
queue.add(async () => await fakeAsyncRequest(2, 500));
queue.add(async () => await fakeAsyncRequest(3, 1200));
queue.add(async () => await fakeAsyncRequest(4, 700));

console.log("Tasks added to the queue.");

// The queue starts processing automatically when tasks are added.
// You will see the tasks execute one after another, not all at once.
