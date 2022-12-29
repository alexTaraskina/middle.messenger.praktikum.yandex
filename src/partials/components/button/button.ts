import { Block } from "../../../utils";
import template from 'bundle-text:./template.hbs';

import './button.css';

interface ButtonProps {
    heading: string;
    events? : {
        click?: () => void
    }
}

export default class Button extends Block {
    static componentName: string = 'Button';

    constructor(props: ButtonProps) {
        super(props);
    }

    render() {
        return template;
    }
}
