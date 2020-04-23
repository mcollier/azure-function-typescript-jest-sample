import { Context } from "@azure/functions";

const testContext = {
    log: {
        info: jest.fn(),
        warn: jest.fn()
    },
    res: {
        body: jest.fn(),
        status: jest.fn()
    }
};

export default testContext as any as Context