const schema = {
  type: 'object',
  additionalProperties: false,
  required: ['id'],
  properties: {
    id: { type: 'string', minLength: 1, maxLength: 255 },
    token: { type: 'string', minLength: 1, maxLength: 255 },
  },
};

export { schema };
