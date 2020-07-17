import React from 'react'
import PropTypes from 'prop-types'
import AppHeader from './AppHeader'

const AppFrame = ({header, body}) => {
    return (
        <div className="app-frame">
            <AppHeader title={header} />
            <div className="">{body}</div>
            <div className="">CustomersApp 2020</div>
        </div>
    );
}

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
}

export default AppFrame

