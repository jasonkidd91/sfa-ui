import React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Chip from "@mui/joy/Chip";
import Skeleton from "react-loading-skeleton";
import moment from "moment";

// Icons import
import LooksOneIcon from "@mui/icons-material/LooksOne";
import RepeatIcon from "@mui/icons-material/Repeat";
import DeleteIcon from "@mui/icons-material/Delete";

const ScheduledDepositCard = ({
  portfolioName,
  currency,
  amountDeposit,
  depositPlan,
  nextDepositDate,
  onRemove,
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
        <Box display="flex" alignItems="center">
          <IconButton>
            {depositPlan === "One-Time" ? <LooksOneIcon /> : <RepeatIcon />}
          </IconButton>
          <Box marginLeft={2} flex={1}>
            <Typography level="h2" fontSize="lg">
              {portfolioName}
            </Typography>
            <Typography fontSize="md" noWrap>
              {currency} {amountDeposit}
            </Typography>
            <Box display="flex">
              <Chip
                variant="outlined"
                color="primary"
                size="sm"
                sx={{ pointerEvents: "none" }}
              >
                {depositPlan}
              </Chip>
              <Typography
                marginLeft={1}
                fontSize="sm"
                sx={{ color: "text.tertiary" }}
                noWrap
              >
                Next Deposit Date: {moment(nextDepositDate).format("DD-MM-YYYY")}
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={onRemove} color="danger" size="sm">
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

const ScheduledDepositCardSkeleton = () => (
  <Skeleton
    borderRadius={12}
    height={100}
    count={2}
    style={{ marginBlock: "8px" }}
  />
);

export { ScheduledDepositCardSkeleton };

export default React.memo(ScheduledDepositCard);
