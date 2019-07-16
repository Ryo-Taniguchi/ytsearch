import React from 'react';

export default class Header extends React.Component {

    state = {keyword: ''};

    handleChangeInput = (e) => {
        this.setState({keyword: e.target.value})
    }

    render() {
        const fontStyle = {
            fontFamily: 'Bahianita',
            fontFamily: 'cursive',
        }
        return (
            <div style={{textAlign: 'center'}}>
                <div>
                    <h2 style={fontStyle}>Youtube</h2>
                </div>
                <div>
                    <input onChange={this.handleChangeInput} value={this.state.keyword}/>
                </div>
            </div>
        )
    }
}