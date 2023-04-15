import React from "react";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Skeleton from "react-loading-skeleton";

// Icons import
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ProfileCard = ({ name, referenceCode }: any) => {
  // Function to handle copying the reference code to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(referenceCode);
  };

  return (
    <Box display="flex" alignItems="center" paddingY={2}>
      <Avatar>{name && name.slice(0, 2).toUpperCase()}</Avatar>
      <Box marginLeft={2} flexGrow={1}>
        <Typography level="h2" fontSize="lg">
          {name && name.toUpperCase()}
        </Typography>
        <Box display="flex" alignItems="center" marginTop={1}>
          <Typography fontSize="sm" sx={{ color: "text.tertiary" }}>
            {referenceCode && referenceCode.toUpperCase()}
          </Typography>
          <IconButton
            onClick={handleCopy}
            variant="plain"
            size="sm"
            aria-label="Copy"
            sx={{ marginLeft: "3px" }}
          >
            <ContentCopyIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

const ProfileCardSkeleton = () => (
  <Box display="flex" alignItems="center" paddingY={2}>
    <div style={{ width: "40px", height: "40px" }}>
      <Skeleton circle height="100%" />
    </div>
    <Box marginLeft={2} flexGrow={1}>
      <Skeleton height={22} />
      <Box marginTop={1}>
        <Skeleton height={32} />
      </Box>
    </Box>
  </Box>
);

export { ProfileCardSkeleton };

export default ProfileCard;
