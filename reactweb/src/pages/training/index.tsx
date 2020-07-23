import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import { DatePicker } from 'antd';
import './index.css';

interface time {
    date: String
}
interface state {
    date: String
}


function onChange(date: any, dateString: any) {
    console.log(date, dateString);
}

class Training extends Component<time, state> {
    render() {
        return (<>
            <DatePicker onChange={onChange} />
        </>
        )
    }
}

export default Training;
