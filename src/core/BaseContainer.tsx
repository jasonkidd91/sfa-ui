import * as React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import { useColorScheme } from "@mui/joy";
import { SkeletonTheme, SkeletonThemeProps } from "react-loading-skeleton";

// Skeleton
import ColorSchemeToggle from "./Theme";
import Menu from "./Menu";
import Layout from "./Layout";

// Icons import
import MenuIcon from "@mui/icons-material/Menu";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";

export default function BaseContainer(props: any) {
  const { mode } = useColorScheme();

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [skeletonProps, setSkeletonProps] = React.useState<SkeletonThemeProps>(
    {}
  );

  React.useEffect(() => {
    if (mode === "dark") {
      setSkeletonProps({
        baseColor: "#10171E",
        highlightColor: "#15202B",
      });
    } else {
      setSkeletonProps({});
    }
  }, [mode]);

  return (
    <SkeletonTheme {...skeletonProps}>
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Menu />
        </Layout.SideDrawer>
      )}
      <Layout.Root
        sx={{
          ...(drawerOpen && {
            height: "100vh",
            overflow: "hidden",
          }),
        }}
      >
        <Layout.Header>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <IconButton
              variant="outlined"
              size="sm"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              size="sm"
              variant="solid"
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            >
              <SavingsRoundedIcon />
            </IconButton>
            <Typography component="h1" fontWeight="xl">
              Simple Financial Application
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
            <ColorSchemeToggle />
          </Box>
        </Layout.Header>
        <Layout.SideNav>
          <Menu />
        </Layout.SideNav>
        <Layout.Main>{props.children}</Layout.Main>
      </Layout.Root>
    </SkeletonTheme>
  );
}
