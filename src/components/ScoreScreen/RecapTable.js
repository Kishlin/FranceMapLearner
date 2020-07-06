import React from "react";
import PropTypes from "prop-types";

function RecapTable(props) {
    const renderRow = (row, index) => {
        const score = row.gotRight / row.prompted;
        let className = 'stats-row-';
        if (score === 1) {
            className += 'perfect';
        } else if (score >= 0.5) {
            className += 'average';
        } else {
            className += 'bad';
        }

        return (<tr key={index} className={className}>
            <td>{row.name}</td>
            <td>{row.prompted}</td>
            <td>{row.gotRight}</td>
        </tr>);
    };

    const alphabeticalSort = (a, b) => {
        return a.name.localeCompare(b.name);
    }

    return (
        <section>
            <h2>Summary</h2>
            <table>
                <thead>
                    <tr><th>Region</th><th>Times Prompted</th><th>Times Got Right</th></tr>
                </thead>
                <tbody>
                    {Object.values(props.stats.table).sort(alphabeticalSort).map(renderRow)}
                </tbody>
            </table>
        </section>
    );
}

RecapTable.propType = {
    stats: PropTypes.array.isRequired,
}

export default RecapTable;
