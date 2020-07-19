import  React,{ Component } from 'react';

export const setPropsAsInitial = WrappedComponent => (
    class extends Component {
        render() {
            return <WrappedComponent {...this.props} 
                initialValues={this.props} //initialValues solo se inicializa la 1ra vez
                enableReinitialize /> //para que se siga inicializando necesitamos esto
        }
    }
);

