const schema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'id',
    'origin',
    'email',
    'frequency',
    'frequencyType',
    'reason',
    'backUrl',
    'amount',
  ],
  properties: {
    id: { type: 'string', minLength: 1, maxLength: 255 },
    origin: { type: 'string', minLength: 1, maxLength: 255 },
    email: { type: 'string', minLength: 1, maxLength: 255 },
    frequency: {
      type: 'number',
      minimum: 1,
      maximum: 12,
      multipleOf: 1,
    },
    frequencyType: { type: 'string', minLength: 1, maxLength: 255 },
    reason: { type: 'string', minLength: 1, maxLength: 255 },
    amount: { type: 'number', minimum: 1, maximum: 255 },
    backUrl: { type: 'string', minLength: 1, maxLength: 255 },
    token: { type: 'string', minLength: 1, maxLength: 255 },
  },
};

export { schema };
