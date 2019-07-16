import React from 'react';

export default class Header extends React.Component {

    state = {keyword: ''};

    handleChangeInput = (e) => {
        this.setState({keyword: e.target.value})
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div>
                    <h2>Youtube</h2>
                </div>
                <div>
                    <input onChange={this.handleChangeInput} value={this.state.keyword}/>
                </div>
            </div>
        )
    }
}