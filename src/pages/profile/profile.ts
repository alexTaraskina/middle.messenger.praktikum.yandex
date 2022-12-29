import { Block } from '../../utils';
import template from 'bundle-text:./template.hbs';

import './profile.css';

export default class Profile extends Block {
    render() {
        return template;
    }
}
