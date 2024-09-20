const schema = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'origin', 'email', 'backUrl', 'planId'],
  properties: {
    id: { type: 'string', minLength: 1, maxLength: 255 },
    origin: { type: 'string', minLength: 1, maxLength: 255 },
    email: { type: 'string', minLength: 1, maxLength: 255 },
    backUrl: { type: 'string', minLength: 1, maxLength: 255 },
    planId: { type: 'string', minLength: 1, maxLength: 255 }
  },
};

export { schema };
