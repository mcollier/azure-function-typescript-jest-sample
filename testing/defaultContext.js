module.exports = {
    log: {
        info: jest.fn(),
        warn: jest.fn()
    },
    res: {
        body: jest.fn(),
        status: jest.fn()
    }
};