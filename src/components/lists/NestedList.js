import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import SearchIcon from '@material-ui/icons/Search'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import GettingStarted from './GettingStarted'
import Groups from './Groups'
import Discussions from './Discussions'
import Meetings from './Meetings'
import Polls from './Polls'
import Actions from './Actions'
import Activities from './Activities'
import Misc from './Misc'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit,
  },
  links: {
    textDecoration: 'none',
  },
  ripple: {
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.grey[500],
  },
  navHeader: {
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 4,
    boxShadow: theme.shadows[4],
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  collapsedList: {
    backgroundColor: theme.palette.grey[100],
  },
  margin: {
    margin: theme.spacing.unit,
  },
  search: {
    // paddingLeft: theme.spacing.unit,
    // paddingTop: theme.spacing.unit * 1,
    // paddingBottom: theme.spacing.unit * 1,
  },
})

class NestedList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleClick = (n) => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.navHeader}>
          <TextField
            id="input-with-icon-textfield"
            className={classes.search}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                >
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <List component="nav" dense={true}>
          <Link className={classes.links} to='/about'>
            <ListItem button onClick={this.props.handleDrawer} TouchRippleProps={{ classes: { child: classes.ripple } }} >
              <ListItemText primary="Welcome" />
            </ListItem>
          </Link>
          <GettingStarted handleDrawer={this.props.handleDrawer} />
          <Groups handleDrawer={this.props.handleDrawer} />
          <Discussions handleDrawer={this.props.handleDrawer} />
          <Meetings handleDrawer={this.props.handleDrawer} />
          <Polls handleDrawer={this.props.handleDrawer} />
          <Actions handleDrawer={this.props.handleDrawer} />
          <Activities handleDrawer={this.props.handleDrawer} />
          <Misc handleDrawer={this.props.handleDrawer} />
        </List>
      </div>
    )
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NestedList)
