import React  from 'react';


export class CountryItemComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { country,inputAmt } = this.props;
        return <tr>
            <td>
                <a >{country.fullName}</a>
            </td>
            <td>{ country.population }</td>
            <td >
                <dl>
                    { country.currencies.map((cur, idx) => <dt key={idx} > { cur.name }</dt> )}
                </dl>
            </td>
            <td>
                <dl>
                    { country.currencies.map((cur, idx) =>
                        <dt key={idx} > {cur.symbol } { cur.exchangeRate? cur.exchangeRate.toFixed(4): '' }</dt>
                    ) }
                </dl>
            </td>
            <td>
                <dl>
                    { country.currencies.map((cur, idx) =>
                        <dt key={idx} > {cur.symbol } { cur.exchangeRate*(inputAmt)? (cur.exchangeRate*inputAmt).toFixed(4): '' }</dt>
                    ) }
                </dl>
            </td>
            
        </tr>
    }
}

