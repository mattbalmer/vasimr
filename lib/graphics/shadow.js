import _ from 'lodash';

/**
 * Create a Shadow object that can be added to the stage.
 *
 * @param {...Object} props The parameters used to create the shadow object
 * @param {string} props.color The hex value of the shadow color
 * @param {Number} props.left The left distance of the shadow
 * @param {Number} props.top The top distance of the shadow
 * @param {Number} props.size The size of the shadow
 * @returns {createjs.Shadow}
 */
function shadow(...props) {
    props = _.assign.apply(null, props);

    return new createjs.Shadow(
        props.color || '#000000',
        props.left || 1,
        props.top || 1,
        props.size || 3
    );
}

/**
 * @module graphics/shadow
 */
export { shadow };