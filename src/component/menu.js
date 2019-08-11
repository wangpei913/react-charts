import React from 'react'
import {
    Link,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import {menuArray} from '../utils/constan';
import BorderBox from './borderBox';
import '../styles/menu.scss';

class NavMenu extends React.PureComponent{
    render () {
        const { location: {pathname} } = this.props;
        return (
            <ul className="menuBox">
                {
                    menuArray.map(item => {
                        return(
                            <Link key={item.name} to={item.path}>
                                <BorderBox isBorder={item.path === pathname}>
                                    <li>
                                        <span>
                                            <i className={`iconfont ${item.icon}`}></i>
                                        </span>
                                        <span>{item.name}</span>
                                    </li>
                                </BorderBox>
                            </Link>
                        )
                    })
                }
            </ul>
        )
    }
}

export default connect()(withRouter(NavMenu))