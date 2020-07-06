import React from "react";

export function useNumberState(initialValue) {
    const [value, setter] = React.useState(initialValue);

    const inputSetter = (event) => setter(event.target.value === '' ? '' : Number(event.target.value));

    return [value, inputSetter];
}
