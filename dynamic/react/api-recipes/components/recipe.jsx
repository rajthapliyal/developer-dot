import React from 'react';
import ConsoleLiveData from '../../shared/components/consoleLiveData';
import RecipeForm from './recipeForm';
import {replaceStringPlaceholders, buildQueryString} from '../helpers';

// Helper that determines what part of the recipe is shown in the `Request` input of
// the ConsoleLiveData component
const getRequest = (recipe) => {
    if (recipe.request.postBody) {
        return recipe.request.postBody;
    } else if (recipe.request.pathParams || recipe.request.queryString) {
        return replaceStringPlaceholders(recipe.path, recipe.request.pathParams) + buildQueryString(recipe.request.queryString);
    }
    return null;
};

const Recipe = (props) => {
    return (
        <div style={{margin: '10px'}}>
            <h2>{props.recipe.recipeName}</h2>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
                {props.recipe.recipeDescription}
            </div>
            <RecipeForm onInputChange={props.onInputChange} onSubmitRequest={props.onSubmitRequest} recipe={props.recipe} request={props.recipe.request} />
            <div className={'api-console-output'}>
                <ConsoleLiveData
                    action={props.recipe.action}
                    path={props.recipe.path}
                    request={getRequest(props.recipe)}
                    response={props.recipe.response} />
            </div>
        </div>
    );
};

Recipe.displayName = 'Recipe API Console';
Recipe.propTypes = {
    onInputChange: React.PropTypes.func.isRequired,
    onSubmitRequest: React.PropTypes.func.isRequired,
    recipe: React.PropTypes.object.isRequired
};

export default Recipe;
