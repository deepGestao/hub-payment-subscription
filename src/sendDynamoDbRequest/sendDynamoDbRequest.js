import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB();

const sendDynamoDbRequest = async (content, gatewayId, planId, token) => {
  await dynamodb
    .putItem({
      TableName: `hub-payment-subscriptions-${process.env.AWS_ENV}`,
      Item: {
        token: { S: token },
        planId: { S: `mercadopago|${planId}` },
        createdAt: { S: `${new Date().toISOString()}` },
        gatewayId: { S: `mercadopago|${gatewayId}` },
        webhookId: { S: `${content.token}` },
        status: { S: 'active' },
      },
    })
    .promise();
};

export { sendDynamoDbRequest };
