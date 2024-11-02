import uuid4 from 'uuid4';
import { parseRequest } from './parseRequest/parseRequest';
import { requestGateway } from './requestGateway/requestGateway';
import { sendDynamoDbRequest } from './sendDynamoDbRequest/sendDynamoDbRequest';

const processItem = async (content) => {
  const { id, planId } = await requestGateway(content);
  await sendDynamoDbRequest(content, id, planId, uuid4());
  return { token: content.token, planId };
};

const handler = async (event, context) => {
  console.log(event, context);
  try {
    const content = JSON.parse(event.body).detail;
    const validate = parseRequest(content);
    if (validate) {
      const response = await processItem(content);
      return {
        statusCode: 200,
        body: JSON.stringify({ ...response }),
      };
    }
    return {
      statusCode: 400,
      body: '{}',
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'internal server error' }),
    };
  }
};

export { handler };
