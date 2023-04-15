import React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import Skeleton from "react-loading-skeleton";
import moment from "moment";

const TransactionHistoryCard = ({
  portfolioName,
  currency,
  amount,
  depositPlan,
  transactionType,
  transactionDate,
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
        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            <Typography level="h2" fontSize="lg">
              {portfolioName}
            </Typography>
            <Typography
              marginLeft={1}
              alignSelf="center"
              fontSize="sm"
              sx={{ color: "text.tertiary" }}
            >
              ({transactionType})
            </Typography>
          </Box>
          <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: "none" }}
          >
            {depositPlan}
          </Chip>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography fontSize="md" color={amount >= 0 ? "success" : "danger"}>
            {currency} {amount}
          </Typography>
          <Typography fontSize="sm" sx={{ color: "text.tertiary" }}>
            {moment(transactionDate).format("DD-MM-YYYY h:mm A")}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const TransactionHistoryCardSkeleton = () => (
  <Skeleton
    borderRadius={12}
    height={80}
    count={2}
    style={{ marginBlock: "8px" }}
  />
);

export { TransactionHistoryCardSkeleton };

export default TransactionHistoryCard;
