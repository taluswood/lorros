import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Grid from '@material-ui/core/Grid'
import logo from '../images/Lorros_lrg-wht-2.png'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  logoDiv: {
    marginTop: '15vh', 
    textAlign: 'center',
    height: '25vh',
  },
  button: {
    margin: theme.spacing.unit,
    fontSize: '24px',
    padding: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 8,
    paddingRight: theme.spacing.unit * 8,
  },
  responsive: {
    maxWidth: '100%',
    height: 'auto'
  },
  link: {
    textDecoration: 'none',
  },
})

class IndexPage extends Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    const { data, classes } = this.props
    return (
      <div className={classes.root}>
        <Img style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          // opacity: 0.7,
        }}
          sizes={data.background.sizes}
        />
        <Grid container justify="center" spacing={24}>
          <Grid item xs={12} sm={8}>
            <div className={classes.logoDiv}>
              <Img style={{
                width: '100%',
              }}
                sizes={data.whiteLogo.sizes}
              />
              <Link to="/about/">
              <Button variant="contained" size="large" color="secondary" className={classes.button}>
                Guide
              </Button>
              </Link>
            </div>
          </Grid>
          </Grid>
      </div>
    )
  }
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(IndexPage)

export const query = graphql`
  query indexPage {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: {regex: "/jason-blackeye-295313-unsplash.jpg/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    whiteLogo: imageSharp(id: {regex: "/Lorros_lrg-wht-2.png/"}) {
      sizes(maxWidth: 960) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`