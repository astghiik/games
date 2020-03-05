import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Game from './Game';
import Gamers from './Gamers';
import List from './List';
import { bindActionCreators } from 'redux';
import { clearResults } from '../../actions/flll';
import { connect } from 'react-redux';

function FLLL(props) {
    return (
        <div>
            <Link to="/" className="text-secondary">
              <FontAwesomeIcon icon={faHome} size="2x" className="m-2" onClick={props.clearResults} />
            </Link>
            <Gamers />
            <Game />
            <List />
        </div>
    )
}


const matchDistpatchToProps = dispatch => {
    return bindActionCreators({ clearResults }, dispatch);
}

export default connect(null, matchDistpatchToProps)(FLLL);