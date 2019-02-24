import React from "react";
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/es/Paper/Paper";
import './Login.css';
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Button, Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";

export class Login extends React.Component {
    render() {
        return (
            <Paper className="paper">
                <Typography variant="h4" color="primary" gutterBottom>Task Planner</Typography>
                <AssignmentIcon color="primary" style={{ fontSize: 60 }}/>
                <form className="form" noValidate autoComplete="off">
                    <TextField required id="username" label="Username" margin="normal" variant="filled" onChange={this.props.handleUsernameChange}/>
                    <br/>
                    <TextField required id="password" type="password" label="Password" margin="normal" variant="filled" onChange={this.props.handlePasswordChange}/>
                    <br/>
                    <Button type="submit" variant="outlined" color="primary" onClick={this.props.handleLogin}>Login</Button>
                    <br/>
                    <Link variant="body2">Create Account</Link>
                </form>
            </Paper>
        );
    }
}