import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'
import Cyan from '@material-ui/core/colors/Cyan'
import NestedList from '../components/lists/NestedList'
import logo from '../images/Lorros-nav-logo.png'

import './index.css'

const drawerWidth = 240
const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navLogo: {
    maxHeight: '50px',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
    minHeight: '99vh'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  contentHome: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  menuButton: {
    color: '#ffffff',
  },
})

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerVisible: false,
      mobileOpen: false,
      open: false,
    }
  }

  componentDidMount = () => {
    if (this.props.location.pathname !== '/') {
      this.setState({drawerVisible: true})
    } else {
      this.setState({drawerVisible: false})
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props
    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname !== '/') {
        this.setState({drawerVisible: true})
      } else {
        this.setState({drawerVisible: false})
      }
    }
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  closeDrawer = () => this.setState({ open: false })

  render() {
    const { classes, theme, data, children } = this.props
    const theme1 = createMuiTheme({
      palette: {
        primary: Cyan,
        secondary: {
          main: '#1565C0',
        },
      },
      status: {
        danger: 'orange',
      },
      typography: {
        fontSize: 14,
      },
    })


    const drawer = (
      <NestedList handleDrawer={this.handleDrawerToggle.bind(this)}/>
    )

    return <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme1}>
        <div className={classes.root}>
          {this.state.drawerVisible ? <div>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerToggle} onKeyDown={this.closeDrawer} className={classes.navIconHide}>
                  <MenuIcon className={classes.menuButton}/>
                </IconButton>
                <Link to="/">
                <img src={logo} alt="logo" className={classes.navLogo} />
                </Link>
              </Toolbar>
            </AppBar>
            <Hidden mdUp>
              <Drawer variant="temporary" anchor={theme.direction === 'rtl' ? 'right' : 'left'} open={this.state.mobileOpen} onClose={this.handleDrawerToggle} // onClick={this.handleDrawerToggle}
                classes={{ paper: classes.drawerPaper }} ModalProps={{ keepMounted: true } // Better open performance on mobile.
                }>
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
              <Drawer variant="permanent" open classes={{ paper: classes.drawerPaper }}>
                {drawer}
              </Drawer>
            </Hidden>
          </div> : undefined}

          {this.state.drawerVisible ?
            <main className={classes.content}>
              <div className={classes.toolbar} />
              {children()}
            </main>
            :
            <main className={classes.contentHome} style={{backgroundColor: theme1.palette.primary.main}}>
              <div className={classes.toolbar} />
              {children()}
            </main>
          }
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  }
}

TemplateWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.func,
}

export default withStyles(styles, { withTheme: true })(TemplateWrapper)

export const query = graphql`
  query SiteTitleQuery1 {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`