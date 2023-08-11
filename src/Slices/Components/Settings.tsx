import SettingsIcon from "@mui/icons-material/Settings";
import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const Settings = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Settings
        </Typography>
        <Divider />

        <List sx={{ marginTop: "20px" }}>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="General Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Account Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Privacy Settings" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default Settings;
