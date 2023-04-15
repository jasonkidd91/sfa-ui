import React, { useEffect, useState } from "react";
import Container from "@mui/joy/Container";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import TransactionHistoryCard, {
  TransactionHistoryCardSkeleton,
} from "../components/TransactionHistoryCard";
import { fetchTransactionHistory } from "../services";

const TransactionsScreen = () => {
  const [transactionHistoryData, setTransactionHistoryData] =
    useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile data from API
        const response = await fetchTransactionHistory();
        setTransactionHistoryData(response); // Set the fetched data into state
      } catch (error) {
        console.error("Failed to fetch user transaction history data:", error);
      }
    };

    fetchData(); // Invoke the fetchData function to fetch data on component mount

    // Clean up effect on unmount (if needed)
    return () => {
      // Add cleanup logic here (if needed)
    };
  }, []);

  return (
    <Container maxWidth="md">
      <Box marginY={2}>
        <Typography level="h2" fontSize="lg">
          Transaction History
        </Typography>
        {transactionHistoryData ? (
          transactionHistoryData.map((history: any) => (
            <Box key={history.transactionId} marginY={2}>
              <TransactionHistoryCard
                portfolioName={history.portfolioName}
                currency={"MYR"}
                amount={history.transactionAmount}
                depositPlan={history.transactionStatus}
                transactionType={history.transactionType}
                transactionDate={history.transactionDate}
              />
            </Box>
          ))
        ) : (
          <TransactionHistoryCardSkeleton />
        )}
      </Box>
    </Container>
  );
};

export default TransactionsScreen;
