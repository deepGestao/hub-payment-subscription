import axios from 'axios';
import { getAccessToken } from '../getAccessToken/getAccessToken';

const getHeaders = (token) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
});

const getConfig = (token) => ({
  headers: getHeaders(token),
  timeout: 20000,
});

const requestGateway = async (content) => {
  const token = await getAccessToken();
  const { data } = await axios.post(
    process.env.MERCADO_PAGO_SUBSCRIPTION,
    {
      payer_email: content.email,
      preapproval_plan_id: content.planId,
      card_token_id: content.cardToken,
      external_reference: content.token,
    },
    getConfig(token),
  );
  return {
    id: data.id,
    url: data.init_point,
  };
};

export { requestGateway };
