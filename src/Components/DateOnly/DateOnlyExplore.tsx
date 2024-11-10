import React from 'react'
import DateOnly from 'dateonly'; // tsconfig.json -> compilerOptions.strict: false
// const DateOnly = require('dateonly');

// DateOnly
interface DateOnlyDto {
    // dateOnly: typeof DateOnly;
    dateOnly: DateOnly;
}

type Props = {}

const DateOnlyExplore = (props: Props) => {
    const date = new Date();
    const dateOnly = new DateOnly();
    const fromDate = new DateOnly(date);
    const dateOnlyAsAsString: any = '2024-10-11';
    const objUndef = undefined;
    const objNull = null;

    const a: DateOnlyDto = {
        dateOnly: date
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>DateOnlyExplore</h1>
            {
                // 20241010
                <h2>JSON.stringify: {JSON.stringify(dateOnly)}</h2>
            }
            {
                // Sun Nov 10 2024
                <h2>dateOnly.toString(): {dateOnly.toString()}</h2>
            }
            {
                // Sun Nov 10 2024 17:42:11 GMT+0300 (Moscow Standard Time)
                <h2>date.toString(): {date.toString()}</h2>
            }
            <h2>toStringByDefault fromDate: {JSON.stringify(fromDate)}</h2>
            {
                // "object"
                <h2>typeof DateOnly instance: {JSON.stringify(typeof dateOnly)}</h2>
            }
            {
                // "function"
                <h2>typeof DateOnly type: {JSON.stringify(typeof DateOnly)}</h2>
            }
            {
                // true
                <h2>dateOnly instanceof DateOnly: {JSON.stringify(dateOnly instanceof DateOnly)}</h2>
            }
            {
                // false
                <h2>date instanceof DateOnly: {JSON.stringify(date instanceof DateOnly)}</h2>
            }
            {
                // false
                <h2>dateOnlyAsAsString instanceof DateOnly: {JSON.stringify(dateOnlyAsAsString instanceof DateOnly)}</h2>
            }
            {
                // false
                <h2>dateOnlyAsAsString instanceof DateOnly: {JSON.stringify(objUndef instanceof DateOnly)}</h2>
            }
            {
                // false
                <h2>dateOnlyAsAsString instanceof DateOnly: {JSON.stringify(objNull instanceof DateOnly)}</h2>
            }
            <h1>Type names</h1>
            {
                // "object"
                <h2>typeof instanceof DateOnly: {JSON.stringify(typeof dateOnly)}</h2>
            }
            {
                // "object"
                <h2>typeof instanceof DateOnly: {JSON.stringify(typeof date)}</h2>
            }
        </div>
    )
}

export default DateOnlyExplore