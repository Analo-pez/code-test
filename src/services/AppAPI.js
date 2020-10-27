import React from 'react';
import { fetchReasons } from './ReasonsService';

class AppRoot extends React.Component {
    fetchNewReasons() {
        fetchReasons()
            .then(data => {
                this.setState({
                    reasonsStore: data.reasons
                });
            });
    }
}
export default AppRoot;