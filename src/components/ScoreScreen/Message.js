import React from "react";
import PropTypes from "prop-types";

function Headline(lineOne, lineTwo) {
    return (<h3><span className="avoidwrap">{lineOne}</span> <span className="avoidwrap">{lineTwo}</span></h3>);
}

function Message(props) {
    const precision = Math.floor(props.stats.percentage);

    if (100 === precision) {
        return Headline('Practice makes perfect.', 'Congratulations!');
    } else if (precision >= 80) {
        return Headline('Good job!', 'This is an amazing score!');
    } else if (precision >= 60) {
        return Headline('Well done!', ' You should practice to get better.');
    } else if (precision >= 40) {
        return Headline('Average at best.', 'You should practice more.');
    } else if (precision >= 20) {
        return Headline('Pretty terrible...', 'Have you practiced?');
    }

    return Headline('You know...', 'If I were God, I\'d send you to Chechnya. Just so you can learn more about life.');
}

Message.propType = {
    stats: PropTypes.array.isRequired,
};

export default Message;
