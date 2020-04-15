import httpTrigger from "./index";
import context from "../testing/defaultContext"

it('works', async () => {

    const request = {
        query: { name: 'Michael' }
    };

    // @ts-ignore
    await httpTrigger(context, request);

    expect(context.log.mock.calls.length).toBe(1);
    expect(context.res.body).toEqual('Hello Michael');
});