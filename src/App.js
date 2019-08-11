import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import {  Row, Col } from 'antd'
import LinePage from '../src/pages/line';
import BarPage from '../src/pages/bar';
import ScatterPage from '../src/pages/scatter';
import PiePage from '../src/pages/pie';
import MapPage from '../src/pages/map';
import LinesPage from '../src/pages/lines';
import RadarPage from '../src/pages/radar';
import CandlestickPage from '../src/pages/candlestick';
import BoxplotPage from '../src/pages/boxplot';
import HeatMapPage from '../src/pages/heatmap';
import GraphPage from '../src/pages/graph';
import TreeMap from '../src/pages/treemap';
import ParallelPage from '../src/pages/parallel';
import SankeyPage from '../src/pages/sankey';
import FunnelPage from '../src/pages/funnel';
import GaugePage from '../src/pages/gauge';
import NavMenu from './component/menu';
import './App.scss';
import arrowDown from '../src/assets/images/arrow-down.svg';
import arrowUp from '../src/assets/images/arrow-up.svg'

 class App extends React.PureComponent {
  state = {
    isShowMark: false
  }

  componentDidMount () {
    window.addEventListener('click', this.closeMark, true);
  }

  componentWillUnmount(){
    window.removeEventListener('click');
  }

  clickArrow = (e) => {
    e.stopPropagation()
    const { isShowMark } = this.state;
    this.setState({
      isShowMark: !isShowMark
    })
  }

  closeMark = (e) => {
    this.setState({
      isShowMark: false
    })
  }

  render () {
    const { isShowMark } = this.state;
    const clickStyle = {
      height: '210px'
    }
    const defStyle = {
      height: 0,
      top: -1
    }
    return (
      <div className="appContent">
        <div>
          <Switch>
              <Route path="/line" component={LinePage}></Route>
              <Route path="/bar" component={BarPage}></Route>
              <Route path="/scatter" component={ScatterPage}></Route>
              <Route path="/pie" component={PiePage}></Route>
              <Route path="/map" component={MapPage}></Route>
              <Route path="/lines" component={LinesPage}></Route>
              <Route path="/radar" component={RadarPage}></Route>
              <Route path="/candlestick" component={CandlestickPage}></Route>
              <Route path="/boxplot" component={BoxplotPage}></Route>
              <Route path="/heatmap" component={HeatMapPage}></Route>
              <Route path="/graph" component={GraphPage}></Route>
              <Route path="/treemap" component={TreeMap}></Route>
              <Route path="/parallel" component={ParallelPage}></Route>
              <Route path="/sankey" component={SankeyPage}></Route>
              <Route path="/funnel" component={FunnelPage}></Route>
              <Route path="/gauge" component={GaugePage}></Route>
              <Redirect to="/line"></Redirect>
          </Switch>
        </div>
        <Row className="markbox">
          <Col className="upCol" style={isShowMark ? clickStyle : defStyle}>
            {
              isShowMark ? <NavMenu /> : null
            }
          </Col>
          <Col className="downCol">
            <span className="arrowContent" onMouseEnter={this.clickArrow}  onClick={this.clickArrow}>
              <img src={isShowMark ? arrowUp : arrowDown} alt="arrow"></img>
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(App);
