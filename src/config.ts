export const config = {
  api: process.env.REACT_APP_API_URL || "http://localhost:8080",
  swaggerUrl: `/swagger-ui/index.html`,
  endpoint: {
    stashaway: {
      fetchAllUserPortfolios: "/all-user-portfolios",
      createDeposits: "/deposits"
    },
    customer: {
      fetchUserProfile: "/customer/v1/me",
      fetchUserPortfolioSummary: "/customer/v1/me/portfolio-summary",
      fetchUserActivePortfolios: "/customer/v1/me/active-portfolios",
    },
    payment: {
      fetchScheduledDeposits: "/payment/v1/me/transactions",
      fetchTransactionHistory: "/payment/v1/me/transactions-history",
      fetchActivePaymentMethods: "/payment/v1/active-payment-methods",
      createTransction: "/payment/v1/create-transaction",
      deleteTransction: "/payment/v1/delete-transaction/{id}",
    },
  },
};
