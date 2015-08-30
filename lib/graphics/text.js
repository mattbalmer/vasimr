import _ from 'lodash';
import { shadow } from './shadow';

/**
 * Create a Text object that can be added to the stage.
 *
 * @param {...Object} props The parameters used to create the text object
 * @param {string} props.content The text to display
 * @param {string} props.font The font style (Size and Face) (16px Arial)
 * @param {string} props.color The hex value of the text color (#f2f2f2)
 * @param {Number} props.x The x coordinate of the text object (Top Left anchored)
 * @param {Number} props.y The y coordinate of the text object (Top Left anchored)
 * @param {string} props.textAlign The horizontal alignment of the text (Sets the x anchor) (start, end, left, center, or right)
 * @param {string} props.textBaseline The vertical alignment of the text (Sets the y anchor) (top, hanging, middle, alphabetic, ideographic, or bottom)
 * @param {Object} props.shadow If present, will create a shadow object from these props, and attach it to the text
 * @returns {createjs.Text} Text object
 */
function text(...props) {
    props = _.assign.apply(null, props);

    let text = new createjs.Text(
        props.content,
        props.font || '16px Arial',
        props.color || '#000000'
    );
    text.x = props.x;
    text.y = props.y;

    if(props.textAlign) text.textAlign = props.textAlign;
    if(props.textBaseline) text.textBaseline = props.textBaseline;

    if(props.shadow) text.shadow = shadow(props.shadow);

    return text;
}

/**
 * @module graphics/text
 */
export { text };