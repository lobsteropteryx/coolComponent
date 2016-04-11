import * as React from 'react';
import {CoolComponentProps, ICoolComponentProps,ICoolComponentState} from '../models/coolComponentProps';

export class CoolComponent extends React.Component<ICoolComponentProps, ICoolComponentState> {
    constructor(props:ICoolComponentProps) {
        super(props);
    }

    public render() {
        return <div>
            {this.props.someProperty}
        </div>
    }
}