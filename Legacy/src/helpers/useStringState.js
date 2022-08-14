import React from "react";

export function useStringState(initialValue) {
    const [value, setter] = React.useState(initialValue);

    const inputSetter = (event) => setter(event.target.value === '' ? '' : String(event.target.value));

    return [value, inputSetter];
}
