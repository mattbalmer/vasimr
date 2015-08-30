import { graphics } from './graphics/index';

let engine = {
    graphics
};

if(typeof window !== 'undefined') window.vasimr = engine;
export default engine;