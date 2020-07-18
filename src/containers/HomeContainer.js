import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions'


class HomeContainer extends Component {

    handleOnClick = () => {
        console.log("boton")
    }

    render() {
        return (
            <div className="">
                <AppFrame 
                header='Home'
                body={
                    <div>
                        Esta es la pantalla inicial
                        <CustomersActions>
                            <button onClick={this.handleOnClick}>Listado de Clientes</button>
                        </CustomersActions>
                    </div>
                }
                >

                </AppFrame>
            </div>
        )
    }
}

HomeContainer.propTypes = {
    prop: PropTypes
}

export default HomeContainer;