import React, { useEffect, useState } from "react";
import Container from "@mui/joy/Container";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import OverviewCard, { OverviewCardSkeleton } from "../components/OverviewCard";
import PortfolioCard, {
  PortfolioCardSkeleton,
} from "../components/PortfolioCard";
import { fetchUserPortfolioSummary } from "../services";

const DashboardScreen = () => {
  const [portfolioData, setPortfolioData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile data from API
        const response = await fetchUserPortfolioSummary();
        setPortfolioData(response); // Set the fetched data into state
      } catch (error) {
        console.error("Failed to fetch user portfolios:", error);
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
          Overview
        </Typography>
        <Box marginY={2}>
          {portfolioData ? (
            <OverviewCard
              currency={"MYR"}
              totalValue={portfolioData.totalValue}
              investmentReturns={portfolioData.totalInvestmentReturns}
            />
          ) : (
            <OverviewCardSkeleton />
          )}
        </Box>
      </Box>
      <Box marginY={2}>
        <Typography level="h2" fontSize="lg">
          My Portfolio
        </Typography>
        {portfolioData ? (
          portfolioData.customerPortfolios.map((portfolio: any) => (
            <Box key={portfolio.customerPortfolioId} marginY={2}>
              <PortfolioCard
                portfolioName={portfolio.portfolioName}
                portfolioDesc={portfolio.portfolioDesc}
                currency={"MYR"}
                investmentReturns={portfolio.investmentReturns}
                onClick={() => console.log("Portfolio 1 clicked")}
              />
            </Box>
          ))
        ) : (
          <PortfolioCardSkeleton />
        )}
      </Box>
    </Container>
  );
};

export default DashboardScreen;
