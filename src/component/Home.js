import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Topnav from './Topnav';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import '../App.css';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Row, Col } from 'react-bootstrap';

class Main extends Component {
  state = {
    start: '',
    target: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Topnav />
        <Card>
          <CardHeader
            title="HI! David Blabal"
          />
          <CardContent>
            <form noValidate autoComplete="off">
            <TextField
              id="outlined-adornment-weight"
              label="Destination"
              value={this.state.weight}
              InputProps={{
              endAdornment: <InputAdornment position="end">
                <Link to="/list">
                  <Button bsStyle="link">
                    <SearchIcon />
                  </Button>
                </Link>
              </InputAdornment>,
              }}
            />
          </form>
        </CardContent>
        </Card>
        <Card style={{marginBottom: 20, backgroundColor: '#2db1fc'}}>
          <CardHeader
            title="Popular Food in Thailand"
          />
        </Card>
        <Row className='justify-content-center'>
          <Col>
            <Card style={{marginLeft: 30, marginRight: 30, marginBottom: 10}} className="d-flex align-items-center">
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Pad Thai
                  </Typography>
                  <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Col>
        <Col>
          <Card style={{marginLeft: 30, marginRight: 30, marginBottom: 10}} className="d-flex align-items-center">
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Khanom Chin
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Col>
          <Col>
            <Card style={{marginLeft: 30, marginRight: 30, marginBottom: 10}} className="d-flex align-items-center">
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Pad Thai
                  </Typography>
                  <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Col>
      </Row>
      </div>
    );
  }
}

export default Main;