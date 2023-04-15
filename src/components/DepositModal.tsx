import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Select from "@mui/joy/Select";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Option from "@mui/joy/Option";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import moment from "moment";
import { Divider, FormControl, FormLabel, ModalOverflow } from "@mui/joy";

const DepositModal = ({
  isOpen,
  onClose,
  onSubmit,
  paymentMethods,
  customerPortfolios,
}: any) => {
  const [transactionData, setTransactionData] = useState({
    transactionAmount: "",
    paymentMethodId: "",
    frequency: "",
    transactionStartDate: "",
    transactionEndDate: "",
    customerPortfolioId: "",
    customerId: "",
  });

  const today = moment().add(1, "days").format("YYYY-MM-DD");

  // Function to handle input change and update state with user input
  const handleInputChange = (e: any, setInputData: any) => {
    const { name, value } = e.target;
    setInputData((prevInputData: any) => ({ ...prevInputData, [name]: value }));
  };

  // Usage: Call the function with transaction data from user input
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    onSubmit(transactionData);
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalOverflow>
        <ModalDialog size="lg" sx={{ minWidth: "500px" }}>
          <ModalClose />
          <Typography
            id="layout-modal-title"
            level="h2"
            fontSize="lg"
            marginBottom={2}
          >
            Schedule Deposit
          </Typography>
          <Divider />
          <Box padding={2} width="100%">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Transaction Amount</FormLabel>
                <Input
                  name="transactionAmount"
                  type="number"
                  startDecorator={"MYR"}
                  onChange={(e) => handleInputChange(e, setTransactionData)}
                />
              </FormControl>
              <Box marginTop={2}>
                <FormControl>
                  <FormLabel>Payment Method</FormLabel>
                  <Select
                    name="paymentMethodId"
                    placeholder="-- Select One --"
                    onChange={(e, newValue) =>
                      handleInputChange(
                        {
                          target: { name: "paymentMethodId", value: newValue },
                        },
                        setTransactionData
                      )
                    }
                  >
                    {paymentMethods.map((paymentMethod: any) => (
                      <Option
                        key={paymentMethod.paymentId}
                        value={paymentMethod.paymentId}
                      >
                        {paymentMethod.paymentName}
                      </Option>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box marginTop={2}>
                <FormControl>
                  <FormLabel>Frequency</FormLabel>
                  <Select
                    name="frequency"
                    placeholder="-- Select One --"
                    onChange={(e, newValue) =>
                      handleInputChange(
                        { target: { name: "frequency", value: newValue } },
                        setTransactionData
                      )
                    }
                  >
                    <Option value="ONE_TIME">One-Time</Option>
                    <Option value="MONTHLY">Monthly</Option>
                  </Select>
                </FormControl>
              </Box>
              <Box marginTop={2}>
                <FormControl>
                  <FormLabel>Transaction Date</FormLabel>
                  <Input
                    name="transactionStartDate"
                    type="date"
                    slotProps={{ input: { min: today } }}
                    onChange={(e) => handleInputChange(e, setTransactionData)}
                  />
                </FormControl>
              </Box>
              {transactionData.frequency === "MONTHLY" ? (
                <Box marginTop={2}>
                  <FormControl>
                    <FormLabel>End Date</FormLabel>
                    <Input
                      name="transactionEndDate"
                      placeholder="-- Select One --"
                      type="date"
                      slotProps={{ input: { min: today } }}
                      onChange={(e) => handleInputChange(e, setTransactionData)}
                    />
                  </FormControl>
                </Box>
              ) : null}
              <Box marginTop={2}>
                <FormControl>
                  <FormLabel>Portfolio</FormLabel>
                  <Select
                    name="customerPortfolioId"
                    placeholder="-- Select One --"
                    onChange={(e, newValue) =>
                      handleInputChange(
                        {
                          target: {
                            name: "customerPortfolioId",
                            value: newValue,
                          },
                        },
                        setTransactionData
                      )
                    }
                  >
                    {customerPortfolios.map((portfolio: any) => (
                      <Option
                        key={portfolio.customerPortfolioId}
                        value={portfolio.customerPortfolioId}
                      >
                        {portfolio.portfolioName}
                      </Option>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box marginTop={2}>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  fullWidth
                >
                  Continue
                </Button>
              </Box>
            </form>
          </Box>
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  );
};

export default DepositModal;
