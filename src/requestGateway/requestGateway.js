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
  const { data } = await axios.get(
    `${process.env.MERCADO_PAGO_SUBSCRIPTION}/${content.id}`,
    getConfig(token),
  );
  // await axios.patch(
  //   `${process.env.MERCADO_PAGO_PLAN}/${data.preapproval_plan_id}`,
  //   {
  //     status: 'cancelled',
  //   },
  //   getConfig(token),
  // );
  return {
    id: data.id,
    planId: data.preapproval_plan_id,
  };
};

export { requestGateway };
