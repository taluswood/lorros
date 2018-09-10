import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit,
  },
  links: {
    textDecoration: 'none',
  },
  ripple: {
    backgroundColor: theme.palette.grey[500],
  },
  collapsedList: {
    backgroundColor: theme.palette.grey[100],
  },
  margin: {
    margin: theme.spacing.unit,
  },
})

class NestedOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }
  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <ListItem button onClick={this.handleClick} TouchRippleProps={{ classes: { child: classes.ripple } }}>
          <ListItemText primary="External Links" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={classes.collapsedList} dense={true}>
            <a className={classes.links} href="https://lorros.gitbook.io/lorros-guide/" target="_blank">
              <ListItem button onClick={this.props.handleDrawer} className={classes.nested} TouchRippleProps={{ classes: { child: classes.ripple } }}>
                <ListItemText inset primary="LORROS User Guide" />
              </ListItem>
            </a>
          </List>
        </Collapse>
      </React.Fragment>
    )
  }
}

NestedOne.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NestedOne)