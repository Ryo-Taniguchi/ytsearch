import React from 'react';
import _ from 'lodash';

export default class Header extends React.Component {

    state = {keyword: ''};
    
    handleChangeInput = (e) => {
        this.setState({keyword: e.target.value});
        this.debounceSearchWord(e.target.value)
    }

    debounceSearchWord = _.debounce(value => {
        this.props.searchWord(value);
    },500);

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
                    <input 
                      className="mb-3" 
                      onChange={this.handleChangeInput}
                      value={this.state.keyword}
                    />
                </div>
            </div>
        )
    }
}