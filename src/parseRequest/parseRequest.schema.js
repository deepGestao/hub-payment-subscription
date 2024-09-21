const schema = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'origin', 'email', 'planId', 'paymentMethod', 'cardToken'],
  properties: {
    id: { type: 'string', minLength: 1, maxLength: 255 },
    origin: { type: 'string', minLength: 1, maxLength: 255 },
    email: { type: 'string', minLength: 1, maxLength: 255 },
    planId: { type: 'string', minLength: 1, maxLength: 255 },
    paymentMethod: { type: 'string', minLength: 1, maxLength: 255 },
    cardToken: { type: 'string', minLength: 1, maxLength: 255 },
    token: { type: 'string', minLength: 1, maxLength: 255 },
  },
};

export { schema };
