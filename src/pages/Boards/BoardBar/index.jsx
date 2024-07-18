import { Box, Button, Tooltip } from "@mui/material";
import Chip from "@mui/material/Chip";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import sfitLogo from "~/assets/sfit.jpg";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const MENU_STYLE = {
  color: "primary.main",
  border: "none",
  bgcolor: "transparent",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "transparent",
  },
};
function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        borderTop: "1px solid #26a69a",
        paddingX: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          icon={<SpaceDashboardIcon />}
          label="Board Name"
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<FlashOnIcon />}
          label="Automation"
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          sx={MENU_STYLE}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>
          Invite
        </Button>

        <AvatarGroup
          max={4}
          total={5}
          sx={{
            "& .MuiAvatar-root": {
              width: "32px",
              height: "32px",
              fontSize: "16px",
            },
          }}
        >
          <Tooltip title="SFIT">
            <Avatar alt="SFIT Logo" src={sfitLogo} />
          </Tooltip>
          <Tooltip title="SFIT">
            <Avatar alt="SFIT Logo" src={sfitLogo} />
          </Tooltip>
          <Tooltip title="SFIT">
            <Avatar alt="SFIT Logo" src={sfitLogo} />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
