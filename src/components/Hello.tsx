import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}


// declare a interface the name must start with I
interface IProps {
    title: string,
    age: number,
    work?: string
}

interface IState {
    count: number
}
//implement the interface by generic
export default class Hello extends React.Component<IProps, IState>{
    public constructor(props: any) {
        super(props);
        this.state = {
            count: 1000
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    //implement IState interface
    // public readonly state: Readonly<IState> = {
    //     count:1
    // }

    public clickHandler() {
        this.setState({
            count: 200
        })
    }
    public render() {
        const { title, age } = this.props;
        return (
            <div>
                <div>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgressWithLabel value={20} />
                    </Box>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                    </FormGroup>
                    Hello:{title}{age}
                </div>
                <div>
                    {this.state.count}
                    <button onClick={this.clickHandler}>button</button>
                </div>
            </div>
        )
    }
}