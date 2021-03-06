import {connect} from 'react-redux';
import actions from '../../shared/actions';
import EndpointComponent from '../components/endpoint';
import request from 'request';
import {replacePathParams} from '../../shared/helpers';

const mapStateToProps = (state, ownProps) => {
    return {
        apiType: state.apiType,
        sampleAuthHeader: state.sampleAuthHeader,
        sampleContentType: state.sampleContentType,
        endpoint: state.apiEndpoints[ownProps.id],
        id: ownProps.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFillConsoleSampleData: (endpointId) => {
            dispatch(actions.fillConsoleSampleData(endpointId));
        },
        onSubmitConsoleRequest: (endpoint, endpointId) => {
            /* If our endpoint has a defined proxy, use that to make our API console request
            * Otherwise, just use the path specified as `host` in Swagger file
            */
            const requestPath = endpoint.proxyRoute || endpoint.path;

            const url = (endpoint.pathParams ? replacePathParams(requestPath, endpoint.pathParams) : requestPath) + (endpoint.qsPath || '');
            const apiReq = {
                url: url,
                headers: {}
            };

            if (requestPath.indexOf('amazonaws') !== -1) {
                apiReq.headers['api-key'] = 'b24757b69083fa34d27a7d814ea3a59c';
            }

            if (endpoint.postBody) {
                apiReq.headers['Content-Type'] = 'application/json';
                apiReq.body = JSON.stringify(endpoint.postBodyData);
            }

            request[endpoint.action](apiReq, (error, response, body) => {
                let responseBody = {};

                try {
                    responseBody = JSON.parse(body);
                } catch (err) {
                    responseBody.error = err.message;
                }

                dispatch(actions.submitConsoleRequest(endpointId, responseBody, response, error));
            });
        },
        onPostBodyInputChanged: (endpointId, paramName, newValue) => {
            dispatch(actions.postBodyInputChanged(endpointId, paramName, newValue));
        },
        onResetConsole: (endpointId) => {
            dispatch(actions.resetConsole(endpointId));
        },
        onQueryParamChanged: (newValue, paramName, endpointId) => {
            dispatch(actions.queryParamChanged(newValue, paramName, endpointId));
        },
        onPathParamChanged: (newValue, paramName, endpointId) => {
            dispatch(actions.pathParamChanged(newValue, paramName, endpointId));
        },
        onAddItemToPostbodyCollection: (paramName, endpointId, itemSchema) => {
            dispatch(actions.addItemToPostbodyCollection(paramName, endpointId, itemSchema));
        },
        onRemovePostbodyCollectionItem: (paramName, endpointId) => {
            dispatch(actions.removePostbodyCollectionItem(paramName, endpointId));
        },
        onToggleShowExcludedPostBodyProps: (endpointId) => {
            dispatch(actions.toggleShowExcludedPostBodyProps(endpointId));
        }
    };
};

const EndpointContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EndpointComponent);

export default EndpointContainer;
