import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';

class ChartContainer extends PureComponent {
    render() {
        const { children } = this.props
        return (
            <div className="carouselContent">
                <Carousel effect="fade">
                    {
                        children && children.length > 0 ? children.map(item => item) : null
                    }
                </Carousel>
            </div>
        )
    }
}
export default connect()(ChartContainer);
