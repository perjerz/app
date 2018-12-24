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
import yaowarat from '../assets/yaowarat.jpg';
import rotfai from '../assets/rotfai.jpg';
import terminal from '../assets/terminal21.jpg';

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
            title="Popular Place in Thailand"
          />
        </Card>
        <Row className='justify-content-center'>
          <Col>
            <Card style={{marginLeft: 30, marginRight: 30, marginBottom: 10}} className="d-flex align-items-center">
              <CardActionArea>
                <CardContent>
                  <img src={yaowarat} style={{width: '100%'}} />
                  <Typography gutterBottom variant="h5" component="h2">
                    Yao Warat
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Col>
        <Col>
          <Card style={{marginLeft: 30, marginRight: 30, marginBottom: 10}} className="d-flex align-items-center">
            <CardActionArea>
              <CardContent>
                <img src={rotfai} style={{width: '100%'}} />
                <Typography gutterBottom variant="h5" component="h2">
                Rot Fai Train Night Market
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Col>
          <Col>
            <Card style={{marginLeft: 30, marginRight: 30, marginBottom: 10}} className="d-flex align-items-center">
              <CardActionArea>
                <CardContent>
                  <img src={terminal} style={{width: '100%'}} />
                  <Typography gutterBottom variant="h5" component="h2">
                    Terminal 21
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