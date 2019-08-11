import React from "react";
import {
  AppBar,
  MenuItem,
  Toolbar,
  Button,
  IconButton,
  Menu
} from "@material-ui/core";

import auth0 from "../services/auth0";
import connect from "react-redux/es/connect/connect";
import { Language } from "@material-ui/icons";
import { langSelector, setLang } from "../reducers/lang";

class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AnchorEl: false
    };
  }

  handleMenu(event) {
    this.setState({
      AnchorEl: event.currentTarget
    });
  }

  handleClose(event, lang) {
    this.setState({
      AnchorEl: false
    });
    console.log("lang2", lang);
    this.props.setLang(lang);
  }
  render() {
    const open = Boolean(this.state.AnchorEl) || false;
    return (
      <div>
        <AppBar position="static">
          <Toolbar style={{ justifyContent: "flex-end" }}>
            <Button color="inherit" onClick={() => auth0.login()}>
              Login
            </Button>
            <Button color="inherit">Logout</Button>

            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={e => this.handleMenu(e)}
              color="inherit"
            >
              <Language />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={this.state.AnchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              style={{ top: 0 }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={e => this.handleClose(e)}
            >
              <MenuItem onClick={e => this.handleClose(e, "en")}>
                English
              </MenuItem>
              <MenuItem onClick={e => this.handleClose(e, "ru")}>
                Русский
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.defaultProps = {
  anchorEl: null
};

const mapStateToProps = state => ({
  lang: langSelector(state)
});

const mapDispatchToProps = {
  setLang
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonAppBar);
