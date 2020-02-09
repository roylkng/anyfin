import React from 'react';
import  { LoadingBarDiv } from './elements'


export class LoadingBarComponent extends React.Component {

    render() {
        // return <LoadingBarDiv/>
        return (
            <div class="multi-spinner-container">
                <div class="multi-spinner">
                    <div class="multi-spinner">
                        <div class="multi-spinner">
                        <div class="multi-spinner">
                                <div class="multi-spinner">
                                    <div class="multi-spinner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}