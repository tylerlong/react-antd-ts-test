import * as React from "react";
import { Input } from 'antd';

export interface HelloProps { compiler: string; framework: string; }
export interface HelloState { value: string }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props)
        this.setState({value: 'Initial value'})
    }
    render() {
        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}! - {this.state.value}</h1>
            <Input />
        </div>;
    }
}