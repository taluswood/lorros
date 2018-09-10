import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

class PostPage extends Component {
  render() {
    const { data } = this.props
    const { classes } = this.props
    return (
      <Grid container className={classes.root} spacing={24}>
        <Grid item xs={12} sm={8}>
            <Typography variant="display1" gutterBottom>{data.markdownRemark.frontmatter.title}</Typography>
            <Typography gutterBottom>
              <span dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html
              }} />
            </Typography>
        </Grid>
      </Grid>
    )
  }
}

PostPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PostPage)

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`