import httpTrigger from "./index";
import context from "../testing/defaultContext"

it('works', async () => {

    const request = {
        query: { name: 'Michael' }
    };

    //@ts-ignore
    await httpTrigger(context, request);

    expect(context.log.info.mock.calls.length).toBe(2);
    expect(context.res.body).toEqual('Hello Michael');
});

test('something', async () => {
    const request = {
        query: {}
    };

    //@ts-ignore
    await httpTrigger(context, request);

    expect(context.log.info.mock.calls.length).toBe(1);
    expect(context.log.warn.mock.calls.length).toBe(1);
    expect(context.res.body).toEqual('Please pass a name on the query string or in the request body');
    expect(context.res.status).toBe(400);
});
