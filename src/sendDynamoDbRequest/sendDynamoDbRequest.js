import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB();

const sendDynamoDbRequest = async (content, gatewayId) => {
  await dynamodb
    .putItem({
      TableName: `hub-payment-subscription-${process.env.AWS_ENV}`,
      Item: {
        token: { S: content.token },
        originId: { S: `${content.origin}|${content.id}` },
        createdAt: { S: `${new Date().toISOString()}` },
        planId: { S: content.planId },
        request: { S: JSON.stringify(content) },
        gatewayId: { S: `mercadopago|${gatewayId}` },
        email: { S: content.email },
      },
    })
    .promise();
};

export { sendDynamoDbRequest };
