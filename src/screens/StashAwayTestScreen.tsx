import React, { useEffect, useState } from "react";
import Container from "@mui/joy/Container";
import Box from "@mui/joy/Box";
import { Button } from "@mui/joy";
import { createDeposits, fetchAllUserPortfolios } from "../services";
import CustomerSummaryCard, {
  CustomerSummaryCardSkeleton,
} from "../components/CustomerSummaryCard";

import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

const StashAwayTestScreen = () => {
  const [transactionData, setTransactionData] = useState<any>({
    depositList: [
      {
        customerId: 1,
        customerPortfolioId: 1,
        depositPlan: "ONE_TIME",
        depositAmount: 500,
      },
      {
        customerId: 2,
        customerPortfolioId: 3,
        depositPlan: "MONTHLY",
        depositAmount: 200,
      },
    ],
    floatingList: [
      {
        customerId: 1,
        customerPortfolioId: 2,
        depositAmount: 100,
      },
      {
        customerId: 2,
        customerPortfolioId: 3,
        depositAmount: "-100",
      },
    ],
  });
  const [userPortfolioData, setUserPortfolioData] = useState<any>(null);

  const fetchData = async () => {
    try {
      // Fetch user profile data from API
      const response = await fetchAllUserPortfolios();
      setUserPortfolioData(response); // Set the fetched data into state
    } catch (error) {
      console.error("Failed to fetch user portfolios:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Invoke the fetchData function to fetch data on component mount

    // Clean up effect on unmount (if needed)
    return () => {
      // Add cleanup logic here (if needed)
    };
  }, []);

  const handleDeposit = async () => {
    // Handle deposit logic here
    try {
      // Call the function to create customer transaction
      const response = await createDeposits(transactionData);
      // Handle success response
      console.log("Transaction created successfully:", response);
      window.alert(response);
      // Handle success response or update state or perform other actions as needed
      fetchData();
    } catch (error: any) {
      // Handle error response
      console.error("Failed to create transaction:", error);
      window.alert(error.response.data.errors[0]);
      // Update state or show error message or perform other error handling actions as needed
    }
  };

  return (
    <Container>
      <Box
        display="flex"
        gap={3}
        padding={2}
        flexDirection={{ xs: "column", md: "row" }}
      >
        {/* Left Column */}
        <Box flex={1}>
          {userPortfolioData ? (
            userPortfolioData.map((userPortfolio: any) => (
              <Box key={userPortfolio.customerId} mb={2}>
                <CustomerSummaryCard
                  customerName={userPortfolio.customerName}
                  customerId={userPortfolio.customerId}
                  totalValue={userPortfolio.totalValue}
                  portfolios={userPortfolio.customerPortfolios}
                />
              </Box>
            ))
          ) : (
            <CustomerSummaryCardSkeleton />
          )}
        </Box>
        {/* Right Column */}
        <Box flex={1}>
          <JSONInput
            id="a_unique_id"
            placeholder={transactionData}
            // colors      = { darktheme }
            locale={locale}
            height="100%"
            width="100%"
            onChange={(e: any) => setTransactionData(e.jsObject)}
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            fullWidth
            sx={{ mt: "16px" }}
            onClick={handleDeposit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default StashAwayTestScreen;
