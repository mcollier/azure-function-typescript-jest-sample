import { forceType } from "./helpers";
import { Context } from "@azure/functions";

const testObj = {
    log: {
        info: jest.fn(),
        warn: jest.fn()
    },
    res: {
        body: jest.fn(),
        status: jest.fn()
    }
};

export default forceType<Context>(testObj)