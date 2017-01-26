import React from 'react';
import {Link} from 'react-router';
import {Menu} from 'semantic-ui-react';

export default () => {
    return(
        <Menu>
            <Menu.Menu>
                <Menu.Item>
                    <Link to="/">WatchMeNow.com</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/allMovies">Movies</Link>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}