const logger = {
    log(...whatever: any[]) { 
        console.log(...whatever) 
    },
    error(...whatever: any[]) {
        console.error(...whatever)
    }
};

export default logger;