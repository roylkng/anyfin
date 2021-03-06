import React from "react";
import { TableHeaderComponent } from './TableHeaderComponent';
import { CountryItemComponent } from '../../CountryComponent/CountryItemComponent';
import { TableWrapper } from './elements';

export class CustomDatatable extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { total, colStyle, hideCurrency, showRate, showList,inputAmt } = this.props;
        const attributes = {
            hideCurrency,
            showRate,
            showList,
            colStyle
        };

        return <div className="col-md-12 table-responsive">
            <div className="text-left">Total { total } found.</div>
            <TableWrapper className="table">
                <TableHeaderComponent attributes={attributes} />
                <tbody>
                 {
                     this.props.countries.map(
                         (country, index) => <CountryItemComponent
                             country={country} inputAmt = {inputAmt} key={index} showList={showList} colStyle={colStyle}
                         />)
                 }
                </tbody>
            </TableWrapper>
        </div>

    }
}



