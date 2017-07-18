import * as React from "react";
import { Input } from 'antd';

export interface HelloProps { compiler: string; framework: string; }
export interface HelloState { value: string }

export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props)
        this.state = { value: 'Initial value' }
    }
    render() {
        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}! - {this.state.value}</h1>
            <Input onChange={(event) =>  this.setState({ value: event.target.value })}/>
        </div>;
    }
}
