import React from "react";
import { Card, CardContent, Box, Typography, Avatar, Divider } from "@mui/joy";
import Skeleton from "react-loading-skeleton";

// Icons import
import ShowChartIcon from "@mui/icons-material/ShowChart";

const CustomerSummaryCard = ({
  customerName,
  customerId,
  totalValue,
  portfolios,
}: any) => {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      style={{ cursor: "pointer" }}
      sx={{
        gap: 2,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pb: 1.5, gap: 1 }}>
          <Box
            sx={{
              position: "relative",
              "&:before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                m: "-2px",
                borderRadius: "50%",
                background:
                  "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
              },
            }}
          >
            <Avatar
              size="sm"
              sx={{
                p: 0.5,
                border: "2px solid",
                borderColor: "background.body",
              }}
            >
              {customerId}
            </Avatar>
          </Box>
          <Typography fontWeight="lg">
            {customerName && customerName.toUpperCase()}
          </Typography>
          <Typography level="h2" fontSize="lg" sx={{ ml: "auto" }}>
            MYR {totalValue}
          </Typography>
        </Box>

        <Divider sx={{ "--Divider-childPosition": `2%` }}>PORTFOLIOS</Divider>

        {portfolios.map((portfolio: any) => (
          <Box
            key={portfolio.customerPortfolioId}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
          >
            <Box display="flex" alignItems="center">
              <ShowChartIcon />
              <Typography fontSize="md" marginLeft={1}>
                {`[ ID: ${portfolio.customerPortfolioId} ] ${portfolio.portfolioName}`}
              </Typography>
            </Box>
            <Typography fontSize="md" fontWeight="bold">
              {`MYR ${portfolio.balance}`}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

const CustomerSummaryCardSkeleton = () => (
  <Skeleton
    borderRadius={12}
    height={80}
    count={2}
    style={{ marginBlock: "8px" }}
  />
);

export { CustomerSummaryCardSkeleton };

export default CustomerSummaryCard;
