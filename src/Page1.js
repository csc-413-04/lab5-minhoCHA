import React, { Component } from 'react';
import { connect } from 'react-redux';


class Page1 extends Component {
    render() {
        return (
            <div>
                <h1>Page 1</h1>
                <p>
                    Here is content for page1!
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page1);