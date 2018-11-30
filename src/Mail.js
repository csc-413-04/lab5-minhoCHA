import React, { Component } from 'react';
import { connect } from 'react-redux';


class Mail extends Component {
    render() {
        return (
            <div>
                <h1>Mail</h1>
                <p>
                    Here is content for page2!
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
)(Mail);