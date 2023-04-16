import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemButton from "@mui/joy/ListItemButton";
import { Box, Divider } from "@mui/joy";
import { fetchUserProfile } from "../services";

// Components
import ProfileCard, { ProfileCardSkeleton } from "../components/ProfileCard";

// Icons import
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import CodeIcon from "@mui/icons-material/Code";

// Screens
import LogoDevIcon from "@mui/icons-material/LogoDev";
import DashboardScreen from "../screens/DashboardScreen";
import DepositScreen from "../screens/DepositScreen";
import TransactionsScreen from "../screens/TransactionsScreen";
import SwaggerUiScreen from "../screens/SwaggerUiScreen";
import StashAwayTestScreen from "../screens/StashAwayTestScreen";

const routes = [
  {
    name: "Dashboard",
    icon: <SpaceDashboardIcon fontSize="small" />,
    path: "/dashboard",
    component: <DashboardScreen />,
  },
  {
    name: "Deposit",
    icon: <SyncAltIcon fontSize="small" />,
    path: "/deposit",
    component: <DepositScreen />,
  },
  {
    name: "Transactions",
    icon: <ArticleRoundedIcon fontSize="small" />,
    path: "/transactions",
    component: <TransactionsScreen />,
  },
  {
    name: "Developer",
    icon: <CodeIcon fontSize="small" />,
    path: "/developer",
    component: <SwaggerUiScreen />,
  },
  {
    name: "Stash Away Assessment",
    icon: <LogoDevIcon fontSize="small" />,
    path: "/",
    component: <StashAwayTestScreen />,
  },
];

function Menu() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile data from API
        const response = await fetchUserProfile();
        setProfileData(response); // Set the fetched data into state
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    fetchData(); // Invoke the fetchData function to fetch data on component mount

    // Clean up effect on unmount (if needed)
    return () => {
      // Add cleanup logic here (if needed)
    };
  }, []);

  return (
    <Box>
      {profileData ? (
        <ProfileCard
          name={[profileData?.firstName, profileData?.lastName].join(" ")}
          referenceCode={profileData?.referenceCode}
        />
      ) : (
        <ProfileCardSkeleton />
      )}
      <Divider inset="none" />
      <List size="sm" sx={{ "--ListItem-radius": "8px", "--List-gap": "4px" }}>
        {routes.map((route) =>
          window.location.pathname === route.path ? (
            <ListItem key={route.name}>
              <ListItemButton variant="soft" color="primary">
                <ListItemDecorator sx={{ color: "inherit" }}>
                  {route.icon}
                </ListItemDecorator>
                <ListItemContent>{route.name}</ListItemContent>
              </ListItemButton>
            </ListItem>
          ) : (
            <ListItem key={route.name}>
              <ListItemButton onClick={() => navigate(route.path)}>
                <ListItemDecorator sx={{ color: "neutral.500" }}>
                  {route.icon}
                </ListItemDecorator>
                <ListItemContent>{route.name}</ListItemContent>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
}

export { routes };

export default Menu;
