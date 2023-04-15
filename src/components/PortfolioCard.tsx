import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Chip from "@mui/joy/Chip";

// Icons import
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Skeleton from "react-loading-skeleton";

const PortfolioCard = ({
  portfolioName,
  portfolioDesc,
  currency,
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
        <Box display="flex" alignItems="center">
          <Box flexGrow={0} marginRight={2}>
            <IconButton>
              <ShowChartIcon />
            </IconButton>
          </Box>
          <Box flexGrow={1}>
            <Box>
              <Typography level="h2" fontSize="lg">
                {portfolioName}
              </Typography>
              <Typography fontSize="sm" sx={{ color: "text.tertiary" }}>
                {portfolioDesc}
              </Typography>
            </Box>
          </Box>
          <Box flexGrow={0}>
            <Box textAlign={"right"}>
              <Typography fontSize="sm">{"Investment Returns"}</Typography>
              <Chip
                variant="outlined"
                color={investmentReturns >= 0 ? "success" : "danger"}
                size="sm"
                sx={{ pointerEvents: "none", alignSelf: "end" }}
                startDecorator={
                  investmentReturns >= 0 ? (
                    <TrendingUpIcon />
                  ) : (
                    <TrendingDownIcon />
                  )
                }
              >
                {currency} {investmentReturns}
              </Chip>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const PortfolioCardSkeleton = () => (
  <Skeleton
    borderRadius={12}
    height={80}
    count={2}
    style={{ marginBlock: "8px" }}
  />
);

export { PortfolioCardSkeleton };

export default React.memo(PortfolioCard);
