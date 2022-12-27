import { Block } from '../../../utils';

import './form-input-group.css';

export default class FormInputGroup extends Block {
    render() {
        return `<div class="form-input-group {{cssModificator}}">
                    <input class="form-input-group__input" 
                        type="{{type}}" 
                        id="{{name}}" name="{{name}}"
                        placeholder="{{placeholder}}" />
                    {{#if errorMessage}}
                    <span class="form-input-group__error">{{errorMessage}}</span>
                    {{/if}}
                </div>`;
    }
}
