import { config } from "../config";
import { makeApiRequest } from "./api";

export const fetchUserProfile = async () => {
  return await makeApiRequest<any>({
    method: "get", // HTTP method
    url: config.endpoint.customer.fetchUserProfile, // API endpoint
  });
};

export const fetchUserPortfolioSummary = async () => {
  return await makeApiRequest<any>({
    method: "get", // HTTP method
    url: config.endpoint.customer.fetchUserPortfolioSummary, // API endpoint
  });
};

export const fetchUserActivePortfolios = async () => {
  return await makeApiRequest<any>({
    method: "get", // HTTP method
    url: config.endpoint.customer.fetchUserActivePortfolios, // API endpoint
  });
};

export const fetchActivePaymentMethods = async () => {
  return await makeApiRequest<any>({
    method: "get", // HTTP method
    url: config.endpoint.payment.fetchActivePaymentMethods, // API endpoint
  });
};

export const fetchScheduledDeposits = async () => {
  return await makeApiRequest<any>({
    method: "get", // HTTP method
    url: config.endpoint.payment.fetchScheduledDeposits, // API endpoint
  });
};

export const fetchTransactionHistory = async () => {
  return await makeApiRequest<any>({
    method: "get", // HTTP method
    url: config.endpoint.payment.fetchTransactionHistory, // API endpoint
  });
};

export const createTransction = async (transactionDate: any) => {
  return await makeApiRequest<any>({
    method: "post", // HTTP method
    url: config.endpoint.payment.createTransction, // API endpoint
    data: transactionDate,
  });
};

export const deleteTransction = async (id: any) => {
  return await makeApiRequest<any>({
    method: "post", // HTTP method
    url: config.endpoint.payment.deleteTransction.replace("{id}", id), // API endpoint
  });
};
