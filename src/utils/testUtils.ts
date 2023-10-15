export function ignoreActWarnings() {
    let prev;
    beforeAll(() => {
        prev = global.IS_REACT_ACT_ENVIRONMENT;
        global.IS_REACT_ACT_ENVIRONMENT = false;
    });
    afterAll(() => {
        global.IS_REACT_ACT_ENVIRONMENT = prev; 
    });
};