import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Language } from "@material-ui/icons";
import {Button} from "@material-ui/core";
import auth0 from "../services/auth0";
import {FormattedMessage} from "react-intl";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function HeaderAppBar({ setLang }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(lang) {
    setAnchorEl(null);
    console.log("lang", lang)
    setLang(lang);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "flex-end" }}>
          {
            <div>
              <Button color="inherit" onClick={() => auth0.login()}>
                <FormattedMessage id="login" defaultMessage="Login" />
              </Button>
              <Button color="inherit">
                <FormattedMessage id="logout" defaultMessage="Logout" />
              </Button>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Language />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleClose("en")}>English</MenuItem>
                <MenuItem onClick={() => handleClose("ru")}>Русский</MenuItem>
                <MenuItem onClick={() => handleClose("uk")}>
                  Українська
                </MenuItem>
              </Menu>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
