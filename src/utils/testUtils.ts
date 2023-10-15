declare global {
    var IS_REACT_ACT_ENVIRONMENT: boolean;
}

export function ignoreActWarnings() {
    let prev: any;
    beforeAll(() => {
        prev = global.IS_REACT_ACT_ENVIRONMENT;
        global.IS_REACT_ACT_ENVIRONMENT = false;
    });
    afterAll(() => {
        global.IS_REACT_ACT_ENVIRONMENT = prev; 
    });
};