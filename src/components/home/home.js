import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ThumbCard from '../common/thumbcard';
import './home.css';

import Topico from '../common/topico'
import apresentacaoJson from '../../data/apresentacao.json'


const styles = theme => ({
  card: {
    marginTop: 16,
    marginBottom: 16,
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: apresentacaoJson.titulo,
      conteudo: apresentacaoJson.conteudo,
    };
  }

  render(){
    const classes = this.props.classes;

    return (
      <Grid container spacing={24} align='center'>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Topico titulo={this.state.titulo} conteudo={this.state.conteudo} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);