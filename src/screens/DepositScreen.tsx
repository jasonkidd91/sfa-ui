import React, { useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import ScheduledDepositCard, {
  ScheduledDepositCardSkeleton,
} from "../components/ScheduledDepositCard";
import {
  createTransction,
  deleteTransction,
  fetchActivePaymentMethods,
  fetchScheduledDeposits,
  fetchUserActivePortfolios,
} from "../services";

// Icons import
import AddIcon from "@mui/icons-material/Add";
import DepositModal from "../components/DepositModal";

const DepositScreen = () => {
  const [scheduledDepositsData, setScheduledDepositsData] = useState<any>(null);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [customerPortfolios, setCustomerPortfolios] = useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile data from API
        const response = await fetchScheduledDeposits();
        setScheduledDepositsData(response); // Set the fetched data into state
      } catch (error) {
        console.error("Failed to fetch user deposits data:", error);
      }
    };

    fetchData(); // Invoke the fetchData function to fetch data on component mount

    // Clean up effect on unmount (if needed)
    return () => {
      // Add cleanup logic here (if needed)
    };
  }, []);

  useEffect(() => {
    // Function to fetch data from API 1
    const fetchData1 = async () => {
      try {
        const response = await fetchUserActivePortfolios();
        setCustomerPortfolios(response);
      } catch (error) {
        console.error("Failed to fetch user active portfolios", error);
        // Handle error as needed
      }
    };

    // Function to fetch data from API 2
    const fetchData2 = async () => {
      try {
        const response = await fetchActivePaymentMethods();
        setPaymentMethods(response);
      } catch (error) {
        console.error("Failed to fetch active payment methods", error);
        // Handle error as needed
      }
    };

    // Call the fetch functions
    if (isModalOpen) {
      fetchData1();
      fetchData2();
    }
  }, [isModalOpen]);

  const handleDeposit = async (transactionData: any) => {
    // Handle deposit logic here
    try {
      // Call the function to create customer transaction
      const response = await createTransction(transactionData);
      // Handle success response
      console.log("Transaction created successfully:", response);
      // Handle success response or update state or perform other actions as needed
      window.location.reload();
    } catch (error) {
      // Handle error response
      console.error("Failed to create transaction:", error);
      // Update state or show error message or perform other error handling actions as needed
    }
  };

  const handleRemove = async (id: any) => {
    // Handle remove logic here
    try {
      // Call the function to create customer transaction
      const response = await deleteTransction(id);
      // Handle success response
      console.log("Transaction delete successfully:", response);
      // Handle success response or update state or perform other actions as needed
      window.location.reload();
    } catch (error) {
      // Handle error response
      console.error("Failed to delete transaction:", error);
      // Update state or show error message or perform other error handling actions as needed
    }
  };

  // Function to handle modal open
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // Function to handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginY={2}
      >
        <Typography level="h2" fontSize="lg">
          Scheduled Deposits
        </Typography>
        <IconButton onClick={handleModalOpen} size="sm">
          <AddIcon />
        </IconButton>
        {/* Render your modal component here */}
        <DepositModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleDeposit}
          paymentMethods={paymentMethods}
          customerPortfolios={customerPortfolios}
        />
      </Box>

      <Box marginY={2}>
        {scheduledDepositsData ? (
          scheduledDepositsData.map((scheduledDeposit: any) => (
            <Box key={scheduledDeposit.customerTransactionId} marginY={2}>
              <ScheduledDepositCard
                portfolioName={scheduledDeposit.portfolioName}
                depositPlan={scheduledDeposit.frequency}
                currency={"MYR"}
                amountDeposit={scheduledDeposit.transactionAmount}
                nextDepositDate={scheduledDeposit.transactionNextDate}
                onRemove={() => handleRemove(scheduledDeposit.customerTransactionId)}
              />
            </Box>
          ))
        ) : (
          <ScheduledDepositCardSkeleton />
        )}
      </Box>
    </Container>
  );
};

export default DepositScreen;
