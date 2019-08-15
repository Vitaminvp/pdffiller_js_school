import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Language } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { withRouter } from "react-router-dom";
import { withAuth } from "../services";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

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

const HeaderAppBar = withAuth(
  withRouter(({ setLang, history, isAuthorized, logout }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    function handleMenu(event) {
      setAnchorEl(event.currentTarget);
    }
    function handleClose(lang) {
      setAnchorEl(null);
      setLang(lang);
    }
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar style={{ justifyContent: "space-between" }}>
            {
              <>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Travis Howard"
                      src="/static/avatar.png"
                      style={{
                          zoom: "1.5",
                          border: "1px solid",
                          marginRight: 20
                      }}
                    />
                  </ListItemAvatar>
                  <Button color="inherit" onClick={() => history.push("/")}>
                    <FormattedMessage id="home" defaultMessage="Home" />
                  </Button>
                    <Button color="inherit" onClick={() => history.push("/profile")}>
                        <FormattedMessage id="profile" defaultMessage="Profile" />
                    </Button>
                </div>
                <div>
                  {isAuthorized() ? (
                    <Button color="inherit" onClick={() => logout(history)}>
                      <FormattedMessage id="logout" defaultMessage="Logout" />
                    </Button>
                  ) : (
                    <Button
                      color="inherit"
                      onClick={() => history.push("/login")}
                    >
                      <FormattedMessage id="login" defaultMessage="Login" />
                    </Button>
                  )}
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
                    <MenuItem onClick={() => handleClose("en")}>
                      English
                    </MenuItem>
                    <MenuItem onClick={() => handleClose("ru")}>
                      Русский
                    </MenuItem>
                    <MenuItem onClick={() => handleClose("uk")}>
                      Українська
                    </MenuItem>
                  </Menu>
                </div>
              </>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  })
);

export default HeaderAppBar;
