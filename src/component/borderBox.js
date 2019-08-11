import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import '../styles/border.scss'

class BorderBox extends PureComponent {
    render() {
        const { children, isBorder } = this.props;
        return (
            <div className="borderBox">
                <div>{children}</div>
                <div className={isBorder ? 'borderItemTF' : ''}></div>
                <div className={isBorder ? 'borderItemRB' : ''}></div>
                <div className={isBorder ? 'borderItemLT' : ''}></div>
                <div className={isBorder ? 'borderItemTR' : ''}></div>
            </div>
        )
    }
}

export default connect()(BorderBox)
