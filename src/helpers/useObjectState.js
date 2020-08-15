import React from "react";

export function useObjectState(initialValue) {
    const [value, setter] = React.useState(initialValue);

    const objectSetter = ({ target: { name, checked } }) => {
        setter({ ...value, [name]: checked });
    };

    return [value, objectSetter];
}
