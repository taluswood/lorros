import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const styles = theme => ({
  root: {
    flexGrow: 1,
    // justifyContent: 'center',
  },
  photoCredit: {
    color: theme.palette.secondary.light,
  },
  topSpace: {
    paddingTop: theme.spacing.unit * 2,
  },
  bottomSpace: {
    paddingBottom: theme.spacing.unit * 2,
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  links: {
    textDecoration: 'none',
  },
});

class about extends Component {
  render() {
    const { classes, data } = this.props
    return (
      <React.Fragment>
        <Grid container className={classes.root} justify="center" spacing={24}>
          <Grid item xs={12} sm={4}>
            <Img style={{
              width: '100%',
            }}
              sizes={data.greyLogo.sizes}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.root} justify="center" spacing={24}>
          <Grid item xs={12} sm={8}>
            <Typography gutterBottom>
            <p>LORROS is <b>really easy to get started</b>, so don't spend a lot of time going through all the details in the manual ... (yet). Let's just get you started to  see if you are going to use it. Once you are using it, come back to the manual and play around with all the great features LORROS has to offer.</p>
            </Typography>
            <Typography variant="title" gutterBottom className={classes.topSpace}>
            OK - let's get started. 
            </Typography>
            <Typography gutterBottom>
            <p>There's only a couple of simple things you need to get going:</p>
            </Typography>
          </Grid>
          </Grid>
          
          <Grid container className={classes.root} justify="center" spacing={24}>
          <Grid item xs={12} sm={8}>
          <Link className={classes.links} to='/posts/GettingStarted/register/'>
            <Button variant="outlined" size="large" color="secondary" className={classes.button}>
              Register
              <ArrowForwardIcon className={classes.rightIcon} />
            </Button>
            </Link>
            <Link className={classes.links} to='/posts/GettingStarted/start-group/'>
            <Button variant="outlined" size="large" color="secondary" className={classes.button}>
              Start a Group
              <ArrowForwardIcon className={classes.rightIcon} />
            </Button>
            </Link>
            <Link className={classes.links} to='/posts/Discussions/start-discussion/'>
            <Button variant="outlined" size="large" color="secondary" className={classes.button}>
              Start a Discussion
              <ArrowForwardIcon className={classes.rightIcon} />
            </Button>
            </Link>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

about.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(about)

export const query = graphql`
  query aboutPage {
    greyLogo: imageSharp(id: {regex: "/Lorros_grey1.png/"}) {
      sizes(maxWidth: 960) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
