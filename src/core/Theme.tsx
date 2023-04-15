import * as React from "react";
import { extendTheme } from "@mui/joy/styles";
import { useColorScheme } from "@mui/joy/styles";
import IconButton from "@mui/joy/IconButton";

// Icons import
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: "var(--joy-palette-neutral-50)",
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: "var(--joy-palette-common-black)",
          surface: "var(--joy-palette-neutral-900)",
        },
      },
    },
  },
  fontFamily: {
    // display: "'Inter', var(--joy-fontFamily-fallback)",
    // body: "'Inter', var(--joy-fontFamily-fallback)",
  },
});

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      color="primary"
      onClick={() => {
        if (mode === "dark") {
          setMode("light");
        } else {
          setMode("dark");
        }
      }}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export { theme };

export default ColorSchemeToggle;
