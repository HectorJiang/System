/*
 * @Author: Hector Jing
 * @Date: 2022-06-18 22:59:32
 * @LastEditTime: 2022-06-19 00:19:51
 * @Description: 
 */
import * as React from 'react'
import Hello from './components/Hello'
import PositionedMenu from './components/Header'
import OutlinedCard from './components/Content'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const ariaLabel = { 'aria-label': 'description' };

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Container className="container" maxWidth="sm">
                    <Box className="box">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            // value={age}
                            // onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Input defaultValue="Hello world" inputProps={ariaLabel} />
                    <Button variant="contained">SUBMIT</Button>
                    </Box>
                </Container>
                {/* <PositionedMenu />
                <OutlinedCard />
                Hello React Typescript
                <Hello title="标题" age={21}/> */}
            </div>
        );
    }
}

export default App;