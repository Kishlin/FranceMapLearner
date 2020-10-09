import React from "react";
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel } from "@material-ui/core";

function AskAgainKnown(props) {
    return (
        <section>
            <FormControlLabel control={
                <Checkbox checked={props.askAgainKnown} onChange={props.handleAskAgainKnownChange} name="checkbox"
                          color="primary"/>
            } label="Ask again previously learned departments at every set?"/>
            <p>This will result in a total of {props.promptCount} questions.</p>
        </section>
    );
}

AskAgainKnown.propTypes = {
    handleAskAgainKnownChange: PropTypes.func.isRequired,
    promptCount: PropTypes.number.isRequired,
    askAgainKnown: PropTypes.bool.isRequired,
}

export default AskAgainKnown;
