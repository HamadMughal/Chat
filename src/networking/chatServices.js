import {ApiUrl} from '../constents/ApiUrl';
import {instance} from './config';

export const getConversations = () => {
  const response = instance.get(ApiUrl.conversations);
  return response;
};
export const getChat = params => {
  let url = `${ApiUrl.chat}?senderId=${params.senderId}&receiverId=${params.receiverId}&page=${params.page}&pageSize=${params.pageSize}`;
  const response = instance.get(url);
  return response;
};
export const sendMessage = params => {
  const response = instance.post(ApiUrl.chat, params);
  return response;
};
