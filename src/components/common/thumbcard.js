import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import './thumbcard';

let iconsFolderPath = '../../assets/icons/';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 16,
  },
  flex: {
    flex: 1,
  },
  cardContent: {
    height: 180,
    textAlign: 'center',
  },
});

class ThumbCard extends Component {

  render() {
    const { classes, iconName, url } = this.props;
    var iconUrl = '';

    if (iconName) {
      iconUrl = require(`../../assets/icons/${iconName}.png`);
    }

    return (
      <Grid item xs={3}>
        <div className={classes.root}>
          <Button className={classes.button} href={url}>
            <Card className={classes.card}>
              <CardContent>
                <Grid item xs={12}>
                  <Grid
                    container
                    className={classes.cardContent}
                    align='center'
                    direction='column'
                  >
                    <Grid item>
                      <img src={iconUrl} style={{ width: 80, height: 80 }} className="img-responsive"/>
                    </Grid>
                    <Grid item>
                      <Typography type="title" gutterBottom>
                        {this.props.titulo}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Button>
        </div>
      </Grid>
    );
  }
}

ThumbCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ThumbCard));
