import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import { Chip } from "@mui/joy";
import Skeleton from "react-loading-skeleton";

// Icons import
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const OverviewCard = ({
  currency,
  totalValue,
  investmentReturns,
  onClick,
}: any) => {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      onClick={onClick}
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
          <Typography level="h2" fontSize="lg">
            Total Value
          </Typography>
          <Typography fontSize="sm">Investment Returns</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography fontSize="md">
            {currency} {totalValue}
          </Typography>
          <Chip
            variant="outlined"
            color={investmentReturns >= 0 ? "success" : "danger"}
            size="sm"
            sx={{ pointerEvents: "none", alignSelf: "end" }}
            startDecorator={
              investmentReturns >= 0 ? <TrendingUpIcon /> : <TrendingDownIcon />
            }
          >
            {currency} {investmentReturns}
          </Chip>
        </Box>
      </CardContent>
    </Card>
  );
};

const OverviewCardSkeleton = () => <Skeleton borderRadius={12} height={80} />;

export { OverviewCardSkeleton };

export default OverviewCard;
